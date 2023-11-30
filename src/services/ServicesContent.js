export const fetchServices = async (locale, innerService, innerItems) => {
  const [
    servicesRes,
    ServicesInnerItemRes,
    ServicesInnerContentRes,
    ServicesInnerContentItemsRes,
    marqueeRes,
  ] = await Promise.all([
    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ActServices/${locale}/Category`,
      { cache: "no-store" }
    ),
    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ActServices/${locale}/Category/${innerService}`,
      { cache: "no-store" }
    ),
    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ActServices/${locale}/Category/${innerService}/Content`,
      { cache: "no-store" }
    ),

    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ActServices/${locale}/Category/${innerService}/Content/${innerItems}`,
      { cache: "no-store" }
    ),
    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/marquee/${locale}/Category`,
      { cache: "no-store" }
    ),
  ]);

  const [
    { Results: services },
    { Results: ServicesInnerItem },
    { Results: ServicesInnerContent },
    { Results: ServicesInnerContentItems },
    { Results: marquee },
  ] = await Promise.all([
    servicesRes.json(),
    ServicesInnerItemRes.json(),
    ServicesInnerContentRes.json(),
    ServicesInnerContentItemsRes.json(),
    marqueeRes.json(),
  ]);


  const marqueeService = marquee?.find(
    (item) => item?.PageTitle === "ServicesMarquee"
  );

  return {
    services: services || [],
    ServicesInnerItem: ServicesInnerItem,
    ServicesInnerContent,
    ServicesInnerContentItems: ServicesInnerContentItems,
    marqueeService,
  };
};
