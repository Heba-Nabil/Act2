import AnimatedTitle from "@/components/AnimatedTitle";
import Breadcrumbs from "@/components/Breadcrumbs";
import InnerPrevNext from "@/components/InnerPrevNext";
import NextImage from "@/components/NextImage";
// import Marquee from "@/components/home/Marquee";
import ProductsInners from "@/components/productsPage/ProductsInners";
import ProductsTab from "@/components/productsPage/ProductsTab";
import { fetchProducts } from "@/services/ProductContent";

async function InnerProductsPage({ params: { innerProduct, locale } }) {
  const { products, ProductsInnerItem, ProductsInnerContent } = await fetchProducts(locale, innerProduct);

  let previous, next;
  for (let i = 0; i < products.length; i++) {
    if (products[i].UniqueName === innerProduct) {
      previous = products[i - 1]?.UniqueName;
      next = products[i + 1]?.UniqueName;
    }
  }

  const crumbs = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    {
      title: ProductsInnerItem?.Name,
      href: "",
    },
  ];

  return (
    <>
      {/* <InnerBanner title={`${ProductsInnerItem.Name} Products`} /> */}
      <div className="relative pt-24 pb-10 w-full overflow-hidden">
        <Breadcrumbs className=" w-full " crumbs={crumbs} />
        <div className="container mx-auto px-5 lg:px-20 pt-10">
          <AnimatedTitle
            title={`${ProductsInnerItem?.Name} Products`}
            className="text-primary text-2xl md:text-4xl mb-10 mt-10 text-center"
          />
          
          {ProductsInnerContent?.length > 1 ? (
            <div className="overflow-hidden w-full">
              <div className="mx-auto grid grid-cols-12 gap-5">
                <div className="relative flex justify-center items-center overflow-hidden col-span-full w-full h-full">
                  <ProductsTab
                    locale={locale}
                    innerProduct={ProductsInnerItem?.UniqueName}
                    tabs={ProductsInnerContent}
                  />
                </div>
              </div>
            </div>
          ) : (
            <>
              <NextImage
                src="/images/act-logo-transperent.svg"
                alt="ACT"
                width={200}
                height={100}
                className="object-contain w-full h-auto md:h-[150px] z-10 relative rounded-xl mb-10"
              />
              <AnimatedTitle
                title="Not Found Data"
                className="text-lg md:text-2xl mb-10 mt-50 pt-50 text-center text-black"
              />
            </>
          )}
        </div>
      </div>

      {ProductsInnerItem?.DescriptionLong &&
        ProductsInnerItem?.DescriptionShort && (
          <div className="relative py-10 bg-[#f1f5f9] w-full overflow-hidden">
            {/* <Marquee data={ProductsInnerItem} className="absolute text-secondary !top-0" /> */}
            <div className="container mx-auto px-5 lg:px-20 pt-0 md:pt-7">
              <ProductsInners
                data={ProductsInnerItem}
                itemimg={ProductsInnerItem}
              />
            </div>
          </div>
        )}

      {products?.length > 1 && (
        <InnerPrevNext
          prevHref={`/products/${previous}`}
          prevLabel="Previous"
          allHref="/products"
          nextHref={`/products/${next}`}
          nextLabel="Next"
        />
      )}
    </>
  );
}
export default InnerProductsPage;
