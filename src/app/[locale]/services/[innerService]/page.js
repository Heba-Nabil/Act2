import AnimatedTitle from "@/components/AnimatedTitle";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPrevNext from "@/components/InnerPrevNext";
// import Marquee from "@/components/home/Marquee";
import ServiceInners from "@/components/servicePage/ServiceInners";
import { fetchServices } from "@/services/ServicesContent";

async function InnerServicesPage({ params: { innerService, locale } }) {
  const { services, ServicesInnerItem, ServicesInnerContent } = await fetchServices(locale, innerService);

  let previous, next;
  for (let i = 0; i < services.length; i++) {
    if (services[i].UniqueName === innerService) {
      previous = services[i - 1]?.UniqueName;
      next = services[i + 1]?.UniqueName;
    }
  }

  const crumbs = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    {
      title: ServicesInnerItem?.Name,
      href: "",
    },
  ];
  return (
    <>
      <div className="relative pt-24 pb-10 w-full overflow-hidden ">
        <Breadcrumbs className="w-full " crumbs={crumbs} />
        {/* <Marquee data={ServicesInnerItem} className="absolute text-secondary !top-0" /> */}
        <div className="container mx-auto px-5 lg:px-20 pt-10 text-center flex content-center flex-col items-center ">
          <AnimatedTitle
            title={`${ServicesInnerItem.Name}`}
            className="text-primary text-2xl md:text-4xl mb-10 mt-10 text-center"
          />
          <div className="text-lg max-w-4xl  mb-3 overflow-hidden">
            <div dangerouslySetInnerHTML={{ __html: ServicesInnerItem?.DescriptionLong }} />
          </div>
        </div>
      </div>
      <div className="relative py-10 bg-[#f1f5f9] w-full overflow-hidden">
        <div className="container mx-auto px-5 lg:px-20 pt-0 md:pt-7">
          <ServiceInners data={ServicesInnerContent} itemimg={ServicesInnerItem} />
        </div>
      </div>

      {services?.length > 1 && (
        <InnerPrevNext
          prevHref={`/services/${previous}`}
          prevLabel="Previous"
          allHref="/services"
          nextHref={`/services/${next}`}
          nextLabel="Next"
        />
      )}
    </>
  );
}
export default InnerServicesPage;
