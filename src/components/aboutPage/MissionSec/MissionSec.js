"use client";

import { motion } from "framer-motion";
import MissionData from "./MissionData";
import NextImage from "../../NextImage";

const MissionSec = ({ content, media }) => {
  return (
    <div className="relative py-5 md:py-10 w-full overflow-hidden bg-[#f1f5f9]">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="mx-auto grid grid-cols-12 gap-2 md:gap-20">
          <div className="flex justify-center items-center col-span-full lg:col-span-5 md:col-span-6">
            <MissionData data={content} />
          </div>
          <div className="flex justify-center items-center col-span-full lg:col-span-7 md:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center items-center rounded-xl overflow-hidden h-full"
            >
              <NextImage
                src={media?.FeaturedImageUrl}
                alt={media?.Name}
                width={700}
                height={700}
                className="object-cover w-full h-full z-10 relative"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MissionSec;
