import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { RequestCookies } from "next/dist/server/web/spec-extension/cookies";
import { COOKIE_LOCALE_NAME } from "./constants";
import {
  getLocaleFromPathname,
  getHost,
  isLocaleSupportedOnDomain,
} from "./middlewareConfig";

function findDomainFromHost(requestHeaders, domains) {
  let host = getHost(requestHeaders);

  // Remove port (easier for local development)
  host = host?.replace(/:\d+$/, "");

  if (host && domains) {
    return domains.find((cur) => cur.domain === host);
  }

  return undefined;
}

function getAcceptLanguageLocale(requestHeaders, locales, defaultLocale) {
  let locale;

  const languages = new Negotiator({
    headers: {
      "accept-language": requestHeaders.get("accept-language") || undefined,
    },
  }).languages();
  try {
    locale = match(languages, locales, defaultLocale);
  } catch (e) {
    // Invalid language
  }

  return locale;
}

function resolveLocaleFromPrefix(
  { defaultLocale, localeDetection, locales },
  requestHeaders,
  requestCookies,
  pathname
) {
  let locale;

  // Prio 1: Use route prefix
  if (pathname) {
    const pathLocale = getLocaleFromPathname(pathname);
    if (locales.includes(pathLocale)) {
      locale = pathLocale;
    }
  }

  // Prio 2: Use existing cookie
  if (!locale && localeDetection && requestCookies) {
    if (requestCookies.has(COOKIE_LOCALE_NAME)) {
      const value = requestCookies.get(COOKIE_LOCALE_NAME)?.value;
      if (value && locales.includes(value)) {
        locale = value;
      }
    }
  }

  // Prio 3: Use the `accept-language` header
  if (!locale && localeDetection && requestHeaders) {
    locale = getAcceptLanguageLocale(requestHeaders, locales, defaultLocale);
  }

  // Prio 4: Use default locale
  if (!locale) {
    locale = defaultLocale;
  }

  return locale;
}

function resolveLocaleFromDomain(
  config,
  requestHeaders,
  requestCookies,
  pathname
) {
  const { domains } = config;

  const localeFromPrefixStrategy = resolveLocaleFromPrefix(
    config,
    requestHeaders,
    requestCookies,
    pathname
  );

  // Prio 1: Use a domain
  if (domains) {
    const domain = findDomainFromHost(requestHeaders, domains);
    const hasLocalePrefix =
      pathname && pathname.startsWith(`/${localeFromPrefixStrategy}`);

    if (domain) {
      return {
        locale:
          isLocaleSupportedOnDomain(localeFromPrefixStrategy, domain) ||
          hasLocalePrefix
            ? localeFromPrefixStrategy
            : domain.defaultLocale,
        domain,
      };
    }
  }

  // Prio 2: Use prefix strategy
  return { locale: localeFromPrefixStrategy };
}

export default function resolveLocale(
  config,
  requestHeaders,
  requestCookies,
  pathname
) {
  if (config.domains) {
    return resolveLocaleFromDomain(
      config,
      requestHeaders,
      requestCookies,
      pathname
    );
  } else {
    return {
      locale: resolveLocaleFromPrefix(
        config,
        requestHeaders,
        requestCookies,
        pathname
      ),
    };
  }
}
