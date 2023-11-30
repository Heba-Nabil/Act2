import Breadcrumbs from "@/components/Breadcrumbs";
import ContactData from "@/components/ContactPage/ContactData";
import ContactForm from "@/components/ContactPage/ContactForm";
// import Marquee from "@/components/home/Marquee";
import { fetchContactPage } from "@/services/ContactPageContent";
import { fetchHomePage } from "@/services/HomePageContent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function generateMetadata({ params: { locale } }) {
  // Fetch Data
  const [websiteDataRes, pageSeoRes] = await Promise.all([
    fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/Retrieve`, {
      cache: "force-cache",
      next: { tags: ["websiteData"] },
    }),
    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/SEO/${locale}/ContactPage/Index`,
      { cache: "no-store" }
    ),
  ]);
  const [{ Results: websiteData }, { Results: pageSeo }] = await Promise.all([
    websiteDataRes.json(),
    pageSeoRes.json(),
  ]);

  return {
    title: pageSeo?.PageTitle,
    description: pageSeo?.PageDescription,
    keywords: pageSeo?.PageKeywords,

    openGraph: {
      title: pageSeo?.OGtitle,
      description: pageSeo?.OGdescription,
      type: pageSeo?.OGtype,
      images: [{ url: pageSeo?.OGimage, width: 32, height: 32 }],
      url: websiteData?.FrontUrl,
    },

    twitter: {
      title: pageSeo?.Twittertitle,
      description: pageSeo?.Twitterdescription,
      images: pageSeo?.Twitterimage,
    },
  };
}

const ContactPage = async ({ params: { locale } }) => {
  const { contactInfo } = await fetchHomePage(locale);
  const { marqueeContact } = await fetchContactPage(locale);
  const crumbs = [
    { title: "Home", href: "/" },
    { title: "Contact us", href: "" },
  ];
  return (
    <>
      {/* <InnerBanner title='Contact Us' /> */}

      {/* <div className="relative bg-[#f1f5f9] pt-[10rem] pb-10 w-full overflow-hidden"> */}
      <div className="relative bg-[#f1f5f9] w-full overflow-hidden pt-[5.5rem] pb-10 flex-grow">
        <Breadcrumbs className="w-full " crumbs={crumbs} />
        {/* <Marquee data={marqueeContact} className="opacity-10" /> */}
        <div className="container mx-auto px-5 lg:px-20">
          <div className="py-5 md:py-10 flex flex-wrap lg:justify-between">
            <div className="w-full lg:w-1/2 xl:w-6/12 pr-8">
              <ContactData locale={locale} data={contactInfo} />
            </div>
            <div className="w-full lg:w-1/2 xl:w-6/12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};
export default ContactPage;
