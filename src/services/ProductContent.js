export const fetchProducts = async (locale, innerProduct, innerItems) => {
  const [
    productsRes,
    ProductsInnerItemRes,
    ProductsInnerContentRes,
    ProductsInnerContentItemsRes,
    marqueeRes,
  ] = await Promise.all([
    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ActProducts/${locale}/Category`,
      { cache: "no-store" }
    ),
    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ActProducts/${locale}/Category/${innerProduct}`,
      { cache: "no-store" }
    ),
    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ActProducts/${locale}/Category/${innerProduct}/Content`,
      { cache: "no-store" }
    ),

    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/ActProducts/${locale}/Category/${innerProduct}/Content/${innerItems}`,
      { cache: "no-store" }
    ),

    fetch(
      `${process.env.BASE_URL}/${process.env.PROJECT_CODE}/AdvancedContent/${process.env.COUNTRY_CODE}/marquee/${locale}/Category`,
      { cache: "no-store" }
    ),
  ]);

  const [
    { Results: products },
    { Results: ProductsInnerItem },
    { Results: ProductsInnerContent },
    { Results: ProductsInnerContentItems },
    { Results: marquee },
  ] = await Promise.all([
    productsRes.json(),
    ProductsInnerItemRes.json(),
    ProductsInnerContentRes.json(),
    ProductsInnerContentItemsRes.json(),
    marqueeRes.json(),
  ]);


  const marqueeProduct = marquee?.find(
    (item) => item?.PageTitle === "ProductsMarquee"
  );

  return {
    products: products || [],
    ProductsInnerItem: ProductsInnerItem,
    ProductsInnerContent,
    ProductsInnerContentItems: ProductsInnerContentItems,
    marqueeProduct,
  };
};
