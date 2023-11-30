
"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import AnimatedTitle from "../../AnimatedTitle";
import NextImage from "../../NextImage";


const CounterItem = dynamic(() => import("./Counter"), {
  ssr: false,
  loading: () => "0",
});


const CounterSec = ({ data, content }) => {

  return (
    <section className="relative z-9 overflow-hidden py-14 bg-slate-100">
      <div className="container text-center px-10 lg:px-20 pb-5 mx-auto">
        <AnimatedTitle
          title={data?.Name}
          className="text-primary text-2xl md:text-3xl mb-7"
        />
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-base"
        >
          <div dangerouslySetInnerHTML={{ __html: data?.DescriptionLong }} />
        </motion.div>
      </div>
      <div className="container pt-5 px-5 lg:px-20 mx-auto flex text-center z-9 flex-col">
        <div className="md:mx-auto grid grid-cols-12 gap-2 md:gap-10 lg:gap-20">
          {content?.map((item, index) => (
            <div key={index} className="flex justify-center items-center col-span-4 flex-col">
              <div className="flex items-end h-[70px] my-2">
                <NextImage
                  className="w-[50px] h-[50px] md:h-[70px] md:w-[70px] text-center border-1 object-contain flex transition-all duration-700 linear group-hover:hidden mx-auto"
                  src={item?.ImageUrl}
                  alt={item?.Name}
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <CounterItem value={item?.DescriptionShort} />
              <h3 className="capitalize text-sm md:text-xl font-bold h-10 mb-2 text-black">
                {item?.Name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CounterSec;
