"use client";

import { motion } from 'framer-motion'
import AnimatedTitle from '../AnimatedTitle';
import Breadcrumbs from '../Breadcrumbs';
// import Marquee from '../home/Marquee';


const AboutSec = ({ data, marquee }) => {
    const crumbs = [
        { title: "Home", href: "/" },
        { title: "About us", href: "" },
      ];
    return (
        <div className="relative pt-24 pb-10 w-full overflow-hidden">
                <Breadcrumbs className="w-full " crumbs={crumbs} />
            {/* <Marquee data={marquee} className='absolute text-secondary !top-0' /> */}
            <div className="container mx-auto pt-10 px-5 lg:px-20 text-center">
                <div className="mx-auto grid grid-cols-12 gap-2 md:gap-20">
                    <div className='flex justify-center items-center col-span-full py-10'>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}>
                            <AnimatedTitle title={data?.Name} className='text-primary text-2xl md:text-4xl mb-10' />
                           
                            <div className='text-lg mb-3 overflow-hidden max-w-6xl'>
                                {/* <p>
                                    From our humble beginnings in 2013 as a supplier in the building materials and solid fuel sectors, we have come a long way. Our company, has grown and evolved, establishing itself as a trusted partner in the market. While recognizing the ever-changing landscape of business, we seized opportunities to expand our reach and explore new industries.
                                </p>
                                <br />
                                <p>
                                    During our journey, we have overcome challenges and achieved significant milestones and accomplishments. Today, we take great pride in our heritage and remain dedicated to building upon our success as we look towards the future.
                                </p>
                                <br />
                                <p>
                                    Driven by our commitment to meeting market demands, we ventured into sectors such as food commodities and chemical raw materials. These expansions allowed us to diversify our offerings and cater to a wider range of industries, further solidifying our position as a reliable and adaptable partner.
                                </p> */}
                                <div dangerouslySetInnerHTML={{__html: data?.DescriptionLong}} />
                            </div>
                        </motion.div>
                    </div>
                    {/* <div className='flex justify-center items-center col-span-full lg:col-span-7 md:col-span-6'>
                        <MissionSlider data={missionData.images} />
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default AboutSec;
