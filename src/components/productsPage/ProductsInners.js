"use client"

import NextImage from "../NextImage";
import AnimatedTitle from "../AnimatedTitle";
import { motion } from 'framer-motion'


const ProductsInners = ({ data, itemimg  }) => {

  const mediaImg = itemimg.AdvancedCategoryMedia.filter(
    (item) => !item.Prima && !item.Featured && item.DisplayOrder !== 1
  );
  return (
    <div className="mx-auto grid grid-cols-12 gap-2 lg:gap-20 md:gap-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center col-span-full lg:col-span-5 md:col-span-6 order-2 md:order-1 flex-wrap content-center">
        <AnimatedTitle
          title={`${data?.DescriptionShort}`}
          className='text-primary text-2xl md:text-3xl mb-5 md:mb-10 mt-5'
        />
        <div className="product-data px-5">
          <div dangerouslySetInnerHTML={{ __html: data?.DescriptionLong }} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='relative flex justify-center items-center overflow-hidden pt-4 col-span-full lg:col-span-7 md:col-span-6 order-1 md:order-2'>
        <NextImage
          src={mediaImg[0].ActualImage}
          alt="Industries Served"
          width={500}
          height={300}
          className="object-cover w-full h-auto md:h-[400px] z-10 relative rounded-xl"
        />
      </motion.div>
    </div>
  );
};
export default ProductsInners;

