"use client";

import Link from "next/link";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

const ProductItem = ({ item }) => {

  return (
    <div className='bg-white border border-[#e3e3e3] overflow-hidden group transition-all linear duration-700'>
      <Link href="#" className="relative block md:flex gap-10 items-center p-5 md:px-7 md:py-10 transition-all duration-700 linear">
        <div className="relative bg-primary w-[68px] h-[68px] flex items-center justify-center text-center rounded-[50%]">
          <ArrowSmallRightIcon className="w-5 h-5 stroke-white fill-white z-10" />
          <div className="absolute top-0 w-[68px] h-[68px] rounded-full bg-primary flex items-center justify-center transition-all duration-700 linear z-[1] group-hover:scale-[15]"></div>
        </div>
        <div className="z-[2] relative transition-all duration-700 linear ">
          <p className="text-[15px] font-normal text-primary  group-hover:text-white">{item?.DescriptionShort}</p>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium  group-hover:text-white">{item?.Name}</h3>
        </div>
      </Link>
    </div>
  );
};
export default ProductItem;
