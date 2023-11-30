import AnimatedTitle from "@/components/AnimatedTitle";
import InnerBanner from "@/components/InnerBanner";
import NextImage from "@/components/NextImage";
const fetchClients = async () => {
    const data = [
        {
            name: 'Client1',
            logo: '/images/clients/Asset-1.png',
        },
        {
            name: 'Client2',
            logo: '/images/clients/Asset-2.png',
        },
        {
            name: 'Client3',
            logo: '/images/clients/Asset-3.png',
        },
        {
            name: 'Client4',
            logo: '/images/clients/Asset-4.png',
        },
        {
            name: 'Client5',
            logo: '/images/clients/Asset-5.png',
        },
        {
            name: 'Client6',
            logo: '/images/clients/Asset-6.png',
        },
        {
            name: 'Client7',
            logo: '/images/clients/Asset-7.png',
        },
        {
            name: 'Client8',
            logo: '/images/clients/Asset-8.png',
        }
    ];
    return data;
}


const Clients = async () => {

    const data = await fetchClients();

  return (
    <>
      <InnerBanner title="Our Clients" />
      <section className="relative py-10 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="mt-4 lg:mt-0 lg:w-3/5">
            <div>
              <AnimatedTitle
                title="Food Commodities"
                className="text-2xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="py-10 sm:py-10 px-5 md:px-10 flex flex-wrap justify-center">
            {data?.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="w-6/12 md:w-1/3 lg:w-1/4 flex justify-center border md:border-b last:border-r-0 border-gray-200 p-5 md:py-10 md:px-5 items-center group"
              >
                <div className="relative flex items-center w-[200px] h-[100px] grayscale group-hover:grayscale-0">
                  <NextImage
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}

            {data?.slice(4, 8).map((item, index) => (
              <div
                key={index}
                className="w-6/12 md:w-1/3 lg:w-1/4 flex justify-center border xl:border-l lg:border-l border-gray-200 p-5 md:py-10 md:px-5 items-center group"
              >
                <div className="relative flex items-center w-[200px] h-[100px] grayscale group-hover:grayscale-0">
                  <NextImage
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 bg-[#eee] px-6 md:px-12">
        <div className="container mx-auto">
          <div className="mt-4 lg:mt-0 lg:w-3/5">
            <div>
              <AnimatedTitle
                title="Fruit Pulps & Concerntrates"
                className="text-2xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="py-10 sm:py-10 px-5 md:px-10 flex flex-wrap justify-center">
            {data?.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="w-6/12 md:w-1/3 lg:w-1/4 flex justify-center border md:border-b last:border-r-0 border-gray-200 p-5 md:py-10 md:px-5 items-center group bg-white"
              >
                <div className="relative flex items-center w-[200px] h-[100px] grayscale group-hover:grayscale-0">
                  <NextImage
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}

            {data?.slice(4, 8).map((item, index) => (
              <div
                key={index}
                className="w-6/12 md:w-1/3 lg:w-1/4 flex justify-center border xl:border-l lg:border-l border-gray-200 p-5 md:py-10 md:px-5 items-center group bg-white"
              >
                <div className="relative flex items-center w-[200px] h-[100px] grayscale group-hover:grayscale-0">
                  <NextImage
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="mt-4 lg:mt-0 lg:w-3/5">
            <div>
              <AnimatedTitle
                title="Chemical Raw Materials & Food Additives"
                className="text-2xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="py-10 sm:py-10 px-5 md:px-10 flex flex-wrap justify-center">
            {data?.slice(0, 4).map((item, index) => (
              <div
                key={index}
                className="w-6/12 md:w-1/3 lg:w-1/4 flex justify-center border md:border-b last:border-r-0 border-gray-200 p-5 md:py-10 md:px-5 items-center group"
              >
                <div className="relative flex items-center w-[200px] h-[100px] grayscale group-hover:grayscale-0">
                  <NextImage
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}

            {data?.slice(4, 8).map((item, index) => (
              <div
                key={index}
                className="w-6/12 md:w-1/3 lg:w-1/4 flex justify-center border xl:border-l lg:border-l border-gray-200 p-5 md:py-10 md:px-5 items-center group"
              >
                <div className="relative flex items-center w-[200px] h-[100px] grayscale group-hover:grayscale-0">
                  <NextImage
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Clients;
