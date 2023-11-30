"use client";
import AnimatedTitle from "../../AnimatedTitle";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";

const ProductDesc = ({ data }) => {
  return (
    <div className="relative">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-full md:col-span-8">
          <AnimatedTitle
            title={data?.Name}
            className="text-primary text-2xl md:text-4xl mb-5"
          />
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-base"
          >
            {data?.DescriptionShort}
          </motion.p>
        </div>
        <motion.div
          className="col-span-full md:col-span-4"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link href={data?.Link1} className='relative pr-5 mt-5 flex items-center overflow-hidden rounded-[34px] w-fit text-[20px] font-normal group hover:text-white z-10 transition-all duration-700 linear'>
            <div className='absolute top-0 left-0 w-0 h-[60px] -z-[1] rounded-[35px] bg-primary flex items-center justify-center transition-all duration-700 linear group-hover:w-full'></div>
            <div className="relative bg-primary w-[60px] h-[60px] mr-1 -z-[1] flex items-center justify-center text-center rounded-[50%]">
              <ArrowSmallRightIcon className='w-5 h-5 stroke-white fill-white z-10' />
            </div>
            {data?.Source1}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
export default ProductDesc;
