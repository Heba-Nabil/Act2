
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Marquee = ({ data = 'Food Additives', className }) => {
    const [playMarquee, setPlayMarquee] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setPlayMarquee(true);
        }, 2000);
    }, []);


    return (
        <div className={`marquee ${playMarquee && "animate"}`}>
            <motion.div
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
                className={`marquee__inner ${className}`}>
                <motion.span
                    className='px-[3vw] uppercase text-center font-boldFont whitespace-nowrap mr-10 text-4xl md:text-8xl opacity-40'>
                    {data?.Name}
                </motion.span>
                <motion.span
                    className='px-[3vw] uppercase text-center font-boldFont whitespace-nowrap mr-10 text-4xl md:text-8xl opacity-40'>
                    {data?.Name}
                </motion.span>
                <motion.span
                    className='px-[3vw] uppercase text-center font-boldFont whitespace-nowrap mr-10 text-4xl md:text-8xl opacity-40'>
                    {data?.Name}
                </motion.span>
                <motion.span
                    className='px-[3vw] uppercase text-center font-boldFont whitespace-nowrap mr-10 text-4xl md:text-8xl opacity-40'>
                    {data?.Name}
                </motion.span>
            </motion.div>
        </div>
    );
};

export default Marquee;