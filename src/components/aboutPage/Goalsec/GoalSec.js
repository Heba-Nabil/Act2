"use client";

import { motion } from "framer-motion";
import NextImage from "../../NextImage";
import GoalData from "./GoalData";

const GoalSec = ({ content, media }) => {
  return (
    <section className="relative overflow-hidden py-5 md:py-10 w-full">
      <div className="container px-5 lg:px-10 mx-auto flex text-center">
        <div className="mx-auto grid grid-cols-12 gap-2 md:gap-20">
          <div className="flex justify-center items-center col-span-full lg:col-span-7 md:col-span-6 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
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
          <div className="flex justify-center items-center col-span-full lg:col-span-5 md:col-span-6  order-1 md:order-2">
            <GoalData data={content} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default GoalSec;
