"use client";

import AnimatedTitle from "../../AnimatedTitle";
import { motion } from "framer-motion";
// import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { GlobalLinks } from "../../GlobalButtons";

const AboutData = ({ data }) => {
  return (
    <motion.div>
      <AnimatedTitle
        title={data?.Name}
        className="text-primary text-2xl md:text-3xl mb-7"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-base mb-3 overflow-hidden"
      >
        <div dangerouslySetInnerHTML={{ __html: data?.DescriptionLong }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 mb-5"
      >
        {/* <Link
          href={data?.Link1}
          className="relative pr-5 mt-5 mb-5 flex items-center overflow-hidden rounded-[34px] w-fit text-[20px] font-bold group hover:text-white z-10 transition-all duration-700 linear"
        >
          <div className="absolute top-0 left-0 w-0 h-[60px] -z-[1] rounded-[35px] flex items-center justify-center transition-all duration-700 linear group-hover:w-full bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d]"></div>
          <div className="relative bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] group-hover:bg-none w-[60px] h-[60px] mr-1 -z-[1] flex items-center justify-center text-center rounded-[50%]">
            <ArrowSmallRightIcon className="w-5 h-5 stroke-white fill-white z-10" />
          </div>
          {data?.Source1}
        </Link> */}

        {/* <Link
          href={`/act${data?.Link1}`}
          className="font-SemiboldFont cursor-pointer  whitespace-nowrap inline-flex items-center justify-center px-10 py-2 border border-white rounded-[24px] shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] hover:bg-none hover:bg-white hover:text-primary hover:border hover:border-primary"
          >
         {data?.Source1}
        </Link> */}
        <GlobalLinks link={`${data?.Link1}`}>About act</GlobalLinks>
        {/* <GlobalLinks link={`/act${data?.Link1}`}>{data?.Source1}</GlobalLinks> */}
      </motion.div>
    </motion.div>
  );
};
export default AboutData;
