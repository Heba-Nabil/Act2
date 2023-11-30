"use client";

import { motion } from "framer-motion";
import AnimatedTitle from "../../AnimatedTitle";
import NextImage from "../../NextImage";

const MissionData = ({ data }) => {
  return (
    <div className="text-left py-10">
      {data?.map((item, index) => (
        <motion.div
          key={index}
          className="mb-10"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex mb-2">
            <div className="bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] text-white mr-6 flex h-[50px] w-full max-w-[50px] items-center justify-center overflow-hidden rounded-[15px] p-2">
              <NextImage
                src={item?.ImageUrl}
                alt={item?.Name}
                width={50}
                height={50}
              />
            </div>
            <AnimatedTitle
              title={item?.Name}
              className="text-primary text-2xl md:text-3xl font-bold mb-2 mt-3"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[17px] text-black"
          >
            <div dangerouslySetInnerHTML={{ __html: item?.DescriptionLong }} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
export default MissionData;
