"use client";

// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// Components
import AnimatedTitle from "../../AnimatedTitle";
import NextImage from "../../NextImage";


const Banner = ({ data }) => {

  return (
    <section className="relative overflow-hidden">
      <Swiper
        effect={"fade"}
        loop={true}
        parallax={true}
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
        modules={[EffectFade, Pagination, Autoplay, Parallax]}
        className="h-[500px] lg:h-[100vh]"
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[500px] lg:h-[100vh]">
              <div className="absolute top-0 left-0 z-9 w-full h-full bg-black opacity-50"></div>
              <NextImage src={item?.Image} alt={item?.Alt} fill className="-z-10 object-cover" />
              <div className="container flex items-center max-w-full md:max-w-5xl h-[500px] lg:h-[100vh] pt-32 md:pt-10 px-5 md:px-20">
                <div className='relative w-[90vw] lg:w-[70vw] text-white'>
                  <AnimatedTitle title={item?.Title}
                    className='leading-[2rem] md:leading-[6rem] text-[2rem] md:text-[4rem] relative mb-5'
                    // data-swiper-parallax="700"
                    // data-swiper-parallax-duration="1500"
                    // data-swiper-parallax-opacity="0" 
                    />
                  <div className='text-[20px]'
                    // data-swiper-parallax="700"
                    // data-swiper-parallax-duration="1500"
                    // data-swiper-parallax-opacity="0"
                    >
                    {item?.Body}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="w-full custom-pagination !flex flex-center gap-3 absolute bottom-5 z-30 justify-center translate-y-2"></div>
      </Swiper>
    </section>
  );
};
export default Banner;
