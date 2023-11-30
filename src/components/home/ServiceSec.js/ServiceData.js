"use client";
import Link from "next/link";
import AnimatedTitle from "../../AnimatedTitle";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import NextImage from "../../NextImage";

const ServiceData = ({ data, content }) => {

    return (
        <div className='text-left py-20'>
            <motion.div
                className='mb-10'
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <AnimatedTitle title={data?.Name} className='text-primary text-2xl md:text-4xl mb-2 -mt-3' />
                <motion.p
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className='text-[17px] text-black'>
                    {data?.DescriptionShort}
                </motion.p>
            </motion.div>

            {content &&
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    {content?.map((item, index) => (
                        <div key={index} className='relative mb-7'>
                            <div className="flex gap-2 items-center mb-2">
                                <div className="w-[40px] h-[40px] flex items-center justify-center text-center rounded-[50%]">
                                    <NextImage src={item?.ImageUrl} alt={item?.Name} width={30} height={30} className="z-10" />
                                </div>
                                <AnimatedTitle title={item?.Name} className='text-black text-[20px] font-bold' />
                            </div>
                            <motion.p
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className='text-[17px] text-black'>
                                {item?.DescriptionShort}
                            </motion.p>
                        </div>
                    ))}
                </motion.div>
            }

            <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <Link href={data?.Link1} className='relative pr-5 flex items-center overflow-hidden rounded-[34px] w-fit text-[20px] font-normal group hover:text-white transition-all duration-700 linear'>
                    <div className='absolute top-0 left-0 w-0 h-[60px] -z-[1] rounded-[35px] bg-primary flex items-center justify-center transition-all duration-700 linear group-hover:w-full'></div>
                    <div className="relative bg-primary w-[60px] h-[60px] mr-1 -z-[1] flex items-center justify-center text-center rounded-[50%]">
                        <ArrowSmallRightIcon className='w-5 h-5 stroke-white fill-white z-10' />
                    </div>
                    {data?.Source1}
                </Link>
            </motion.div>
        </div>
    )
}
export default ServiceData;