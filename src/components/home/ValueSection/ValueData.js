"use client";
import Link from "next/link";
import AnimatedTitle from "../../AnimatedTitle";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const ValueData = ({ data }) => {

    return (
        <div className='text-left py-10'>
            <motion.div
                className='mb-10'
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 1,
                }}
            >
                <motion.span
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 0.5,
                    }}
                    className='text-[17px] font-normal text-primary'>
                    {data.subtitle3}
                </motion.span>
                <AnimatedTitle title={data.title3} className='text-black text-[40px] font-bold mb-5 -mt-3' />
                <motion.p
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 1,
                    }}
                    className='text-[17px] text-black'>
                    {data.desc3}
                </motion.p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.5,
                }}
            >
                <Link href='#' className='relative pr-5 flex items-center overflow-hidden rounded-[34px] w-fit text-[20px] font-normal group'>
                    <div className='absolute top-0 left-0 w-0 h-[60px] -z-[1] rounded-[35px] bg-secondary flex items-center justify-center transition-all duration-700 linear group-hover:w-full'></div>
                    <div className="relative bg-secondary w-[60px] h-[60px] -mr-3 -z-[1] flex items-center justify-center text-center rounded-[50%]">
                        <ArrowSmallRightIcon className='w-5 h-5 stroke-primary fill-primary z-10' />
                    </div>
                    About act
                </Link>
            </motion.div>
        </div>
    )
}
export default ValueData;