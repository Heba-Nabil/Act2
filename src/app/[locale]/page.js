// Fetch Data
import { fetchHomePage } from "@/services/HomePageContent";
// Components
import Banner from "@/components/home/MainBanner/Banner";
import AboutSec from "@/components/home/About/AboutSec";
import ProductSec from "@/components/home/ProductsSec/ProductSec";
import ServiceSec from "@/components/home/ServiceSec.js/ServiceSec";
import ContactSec from "@/components/home/ContactSec/ContactSec";
import ClientsSec from "@/components/home/Clients/ClientsSec";
// Toaster
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Marquee from "@/components/home/Marquee";
import CounterSec from "@/components/home/CounterSec/CounterSec";


export async function generateMetadata({ params: { locale } }) {
  const [websiteDataRes, seoDataRes] = await Promise.all([
    fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/Retrieve`, {
      cache: "force-cache",
      next: { tags: ["websiteData"] },
    }),
    fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/SEO/${locale}/act/Index`, { cache: "no-store", }),
  ]);
  const [{ Results: websiteData }, { Results: seoData }] = await Promise.all([websiteDataRes.json(), seoDataRes.json()]);

  return {
    title: seoData?.PageTitle,
    description: seoData?.PageDescription,
    keywords: seoData?.PageKeywords,

    openGraph: {
      title: seoData?.OGtitle,
      description: seoData?.OGdescription,
      images: [{ url: seoData?.OGimage, width: 32, height: 32 }],
      url: websiteData?.FrontUrl,
      type: seoData?.OGtype,
    },

    twitter: {
      title: seoData?.Twittertitle,
      description: seoData?.Twitterdescription,
      images: [seoData?.Twitterimage],
      siteId: websiteData?.FrontUrl,
    },
  };
}

const HomePage = async ({ params: { locale } }) => {

  const {
    mainBanner,
    aboutSec,
    marqueeSec,
    serviceSec,
    serviceMedia,
    serviceContent,
    productSec,
    productContent,
    clientSec,
    clientContent,
    newsletterSec,
    contactInfo,
    counterSec,
    counterContent
  } = await fetchHomePage(locale);

  return (
    <>
      <Banner data={mainBanner} />
      {productSec &&
        <ProductSec data={productSec} content={productContent} />
      }
      {serviceSec &&
        <ServiceSec data={serviceSec} media={serviceMedia} content={serviceContent} />
      }
      {/* {marqueeSec &&
        <div className="relative overflow-x-hidden h-40">
          <Marquee data={marqueeSec} className='absolute text-secondary !top-10' />
        </div>
      } */}
      {aboutSec &&
        <AboutSec data={aboutSec} />
      }
      {counterSec &&
        <CounterSec data={counterSec} content={counterContent} />
      }
      {clientSec &&
        <ClientsSec locale={locale} data={clientSec} content={clientContent} />
      }

      {contactInfo && newsletterSec &&
        <ContactSec locale={locale} info={contactInfo} data={newsletterSec} />
      }

       {/* <ToastContainer /> */}
    </>
  );
};

export default HomePage;
