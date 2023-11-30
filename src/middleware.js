import createIntlMiddleware from "./utils/i18n";

const middleware = async (request) => {
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en"],
    defaultLocale: "en",
    localeDetection: false,
  });

  const response = handleI18nRouting(request);

  return response;
};

export default middleware;

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
