"use client";

import NextImage from "../NextImage";
import AnimatedTitle from "../AnimatedTitle";
import { motion } from "framer-motion";

const ServiceInners = ({ data, itemimg }) => {

  const mediaImg = itemimg.AdvancedCategoryMedia.filter(
    (item) => !item.Prima && !item.Featured && item.DisplayOrder !== 1
  );

  return (
    <div className="mx-auto grid grid-cols-12 gap-2 lg:gap-20 md:gap-10">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative flex justify-center h-[300px] md:h-full items-center overflow-hidden pt-4 col-span-full lg:col-span-6 md:col-span-6 order-1 md:order-2"
      >
        <NextImage
          src={mediaImg[0].ActualImage}
          alt={mediaImg[0]?.Name}
          // width={500}
          // height={1200}
          fill
          className="object-cover w-full z-10 relative rounded-xl"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center col-span-full lg:col-span-6 md:col-span-6 order-2 md:order-1 flex-wrap content-center"
      >
        <div className="product-data">
          {data?.map((item) => (
            <motion.div
              key={item.ID}
              className="mb-10"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center mb-2">
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
                  className="text-primary text-lg  font-bold mb-2 mt-3"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-lg text-black"
              >
                <div
                  dangerouslySetInnerHTML={{ __html: item?.DescriptionLong }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default ServiceInners;
