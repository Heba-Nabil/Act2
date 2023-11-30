"use client";

import AnimatedTitle from "./AnimatedTitle";
import { motion } from "framer-motion";

const TimeLineSec = () => {
  return (
    <section className='relative overflow-hidden bg-[#eee]'>
      <div className='container px-10 lg:px-40 pb-10 mx-auto flex'>
        <div className="w-full md:w-10/12 lg:6/12 mx-auto relative py-20">
          <AnimatedTitle
            title='Our Timeline'
            className="text-primary text-[40px] font-bold mb-5 -mt-3"
          />
          <div className="border-l-2 mt-10">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}>
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-primary text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-primary absolute -left-10 z-0"></div>

                <div className="flex-auto">
                  <h1 className="text-lg"></h1>
                  <h1 className="text-xl font-bold">2013</h1>
                  <h3>Orientation and Briefing on Uniliver basics</h3>
                </div>
                {/* <a href="#" className="text-center text-white hover:text-gray-300">Download materials</a> */}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}>
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-primary absolute -left-10 z-0"></div>

                <div className="flex-auto">
                  {/* <h1 className="text-lg">Day 1</h1> */}
                  <h1 className="text-xl font-bold">2015</h1>
                  <h3>Orientation and Briefing on Uniliver basics</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}>
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-primary text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-primary absolute -left-10 z-0"></div>

                <div className="flex-auto">
                  <h1 className="text-lg"></h1>
                  <h1 className="text-xl font-bold">2016</h1>
                  <h3>Orientation and Briefing on Uniliver basics</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}>
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white text-black rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-primary absolute -left-10 z-0"></div>

                <div className="flex-auto">
                  <h1 className="text-lg"></h1>
                  <h1 className="text-xl font-bold">2020</h1>
                  <h3>Orientation and Briefing on Uniliver basics</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}>
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-primary text-white rounded mb-10 flex-col md:flex-row">
                <div className="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-primary absolute -left-10 z-0"></div>

                <div className="flex-auto">
                  <h1 className="text-lg"></h1>
                  <h1 className="text-xl font-bold">2021</h1>
                  <h3>Orientation and Briefing on Uniliver basics</h3>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}>
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white text-black rounded mb-10 flex-col md:flex-row">
                <div className="w-5 h-5 bg-primary absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0"></div>

                <div className="w-10 h-1 bg-primary absolute -left-10 z-0"></div>

                <div className="flex-auto">
                  <h1 className="text-lg"></h1>
                  <h1 className="text-xl font-bold">2022</h1>
                  <h3>Orientation and Briefing on Uniliver basics</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
};
export default TimeLineSec;