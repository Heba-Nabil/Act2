import NextImage from "../../NextImage";
import AboutData from "./AboutData";

const AboutSec = ({ data }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-5">
      <div className="container px-5 lg:px-20 pb-10 mx-auto flex">
        <div className="mx-auto grid grid-cols-12 gap-2 lg:gap-20 md:gap-10">
          <div className='relative flex justify-center items-center rounded-xl overflow-hidden col-span-full lg:col-span-7 md:col-span-6 order-2 md:order-1'>
            <NextImage
              src={data?.ImageUrl}
              alt={data?.Name}
              width={700}
              height={700}
              className="object-cover w-full h-full z-10 relative"
            />
          </div>
          <div className="flex items-center col-span-full lg:col-span-5 md:col-span-6 order-1 md:order-2">
            <AboutData data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSec;
