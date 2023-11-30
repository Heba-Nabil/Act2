"use client";

// Framer Motion Plugin
import { motion } from "framer-motion";
// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// Components
import NextImage from '@/components/NextImage';

const MissionSlider = ({ data }) => {


    return (
        <motion.div
            className="w-full relative rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 1.2,
            }}
        >
            <Swiper
                effect={"fade"}
                loop={true}
                speed={1000}
                pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                }}
                autoplay={{
                    pauseOnMouseEnter: false,
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Pagination, Autoplay]}
            >
                {data?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='relative block h-[300px] md:min-h-[600px] md:h-full'>
                            <NextImage src={item.img} alt={item.alt} fill className='object-cover' />
                        </div>
                    </SwiperSlide>
                ))}
                <div className="w-full custom-pagination !flex flex-center gap-3 absolute bottom-5 z-30 justify-center translate-y-2"></div>
            </Swiper>
        </motion.div>
    )
}
export default MissionSlider;