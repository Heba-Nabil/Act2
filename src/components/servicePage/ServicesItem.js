"use client";

import { motion } from 'framer-motion'
import Link from 'next/link';
import NextImage from '../NextImage';


const ServicesItem = ({ item }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <Link
                href={`services/${item?.UniqueName}`}
                className="bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] relative flex justify-center h-full min-h-[150px] md:min-h-[240px] items-center rounded-xl p-3 md:p-5 overflow-hidden group transition-all ease-in-out duration-500"
            >
                <div className="hover-element absolute top-0 left-0 w-0 h-0 bg-white  rounded-full flex items-center justify-center transition-all duration-500 ease-in-out z-[1] group-hover:w-[70px] group-hover:h-[70px] group-hover:scale-[15]"></div>
                <div className="block z-[9]">
                    <NextImage
                        className="w-[50px] h-[50px] md:h-[100px] md:w-[100px] text-center border-1 my-3 object-contain block transition-all duration-500 linear group-hover:hidden mx-auto"
                      
                        src={item?.FeaturedImageUrl}
                        alt={item?.Name}
                        width={50}
                        height={50}
                        priority
                    />
                    <NextImage
                        className="w-[50px] h-[50px] md:h-[100px] md:w-[100px] text-center z-[1] border-1 my-3 object-contain block transition-all duration-500 linear hidden group-hover:block mx-auto"
                        src={item?.ImageUrl}
                        alt={item?.Name}
                        width={50}
                        height={50}
                        priority
                    />

                    <h3 className="text-sm md:text-lg lg:text-xl font-medium z-[1] group-hover:text-primary text-white text-center">
                        {item?.Name}
                    </h3>
                </div>
            </Link>
        </motion.div>

    )
}
export default ServicesItem;