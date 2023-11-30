"use client";
import { motion } from "framer-motion";
import AnimatedTitle from "../../AnimatedTitle";


const SliderContent = ({ title }) => {
    return (
        <div className='relative w-[90vw] lg:w-[70vw] text-white'>
            <AnimatedTitle title={title} className='leading-[2rem] md:leading-[6rem] text-[2rem] md:text-[5rem] relative mb-5' />
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1}}>
                <span className='text-[20px]'>
                    We are specialised in setting up the foundation of your brand and
                    setting you up for success.
                </span>
            </motion.div>
        </div >
    );
};
export default SliderContent;
