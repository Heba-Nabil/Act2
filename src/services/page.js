import { fetchServices } from "@/servicesServicesContent";
// import Marquee from "@/components/home/Marquee";
import ServicesItem from "@/components/servicePage/ServicesItem";
import ServicesTitle from "@/components/servicePage/ServicesTitle";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateMetadata({ params: { locale } }) {
  // Fetch Data
  const [websiteDataRes, pageSeoRes] = await Promise.all([
    fetch(`${process.env.BASE_URL}/${process.env.PROJECT_CODE}/Retrieve`, { cache: "force-cache", next: { tags: ["websiteData"] } }),
    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/SEO/${locale}/ServicesPage/Index`, { cache: "no-store" }
    )
  ]);
  const [{ Results: websiteData }, { Results: pageSeo }] = await Promise.all([websiteDataRes.json(), pageSeoRes.json()]);

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
      images: pageSeo?.Twitterimage
    }
  }
}

async function ServicePage({ params: { locale } }) {

  const { services, marqueeService } = await fetchServices(locale)
  const crumbs = [
    { title: "Home", href: "/" },
    { title: "Services", href: "" }
  ];
  return (
    <>

      <div className="relative bg-[#f1f5f9] w-full overflow-hidden pt-[5.5rem] pb-10 flex-grow">
        <Breadcrumbs className="w-full " crumbs={crumbs} />
        {/* <Marquee data={marqueeService} className="opacity-10" /> */}
        <div className="container mx-auto px-5 lg:px-20 pt-10">

          <ServicesTitle />
          <div className="px-0 py-3 md:py-6">
            <div className="flex justify-center items-center flex-wrap gap-3 md:gap-5">
              {services?.map((item, index) => (
                <div role="cell" key={index} className="relative w-5/12 md:w-1/4 list-products">
                  <ServicesItem item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicePage;
