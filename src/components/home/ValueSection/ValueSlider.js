"use client";

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { motion } from "framer-motion";
import NextImage from '../../NextImage';


const ValueSlider = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <motion.div
            className="w-full relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 1.2,
            }}
        >
            <Slider className=' relative' {...settings}>
                {data?.map((item, index) => (
                    <div key={index} className='relative block h-[400px] md:min-h-[600px] md:h-full'>
                        <NextImage src={item.img} alt={item.alt} fill className='object-cover' />
                    </div>
                ))}
            </Slider>
        </motion.div>
    )
}
export default ValueSlider;