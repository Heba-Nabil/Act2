"use client";
import { motion } from "framer-motion";

const banner = {
    animate: {
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.025,
        },
    },
};
const letterAni = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        },
    },
};


const AnimatedTitle = ({ title, className }) => {
    return (
        <motion.h2
            className={`overflow-hidden ${className}`}
            variants={banner}
            initial='initial'
            animate='animate'>
            {title.split(' ').map((word, index) => (
                <motion.span key={index}
                    className='inline-flex mr-3 capitalize'>
                    {[...word].map((letter, index) => (
                        <motion.p key={index} variants={letterAni} className='inline-block font-boldFont'> {letter}</motion.p>
                    ))}
                </motion.span>
            ))}
        </motion.h2>
    )
}
export default AnimatedTitle;