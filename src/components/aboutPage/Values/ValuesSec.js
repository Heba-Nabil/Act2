"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedTitle from "../../AnimatedTitle";
import NextImage from "../../NextImage";

function ValuesSec({ data, content }) {
  return (
    <>
      <div className="relative bg-[#f1f5f9] py-10">
        <div className="container mx-auto px-5 lg:px-20">
          <div className="px-4 xl:px-0 py-10">
            <div className="flex flex-col lg:flex-row flex-wrap">
              <div className="mt-4 lg:mt-0 w-full">
                <AnimatedTitle
                  title={`${data?.Name}`}
                  className="text-primary text-2xl md:text-4xl text-center"
                />
              </div>
            </div>
          </div>
          <div className="px-6 xl:px-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-center items-center flex-wrap gap-3 md:gap-5 "
            >
              {content?.map((item, index) => (
                <div
                  role="cell"
                  key={index}
                  className="relative block max-w-[300px] list-products"
                >
                  <div className="bg-white relative flex justify-center h-full min-h-[345px] rounded-xl p-3 md:p-5 overflow-hidden my-5 group transition-all ease-in-out duration-500 ">
                    <div className="hover-element absolute bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] top-0 left-0 w-0 h-0 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out z-[1] group-hover:w-[70px] group-hover:h-[70px] group-hover:scale-[15]"></div>
                    <div className="block z-[9]">
                      <NextImage
                        className="w-[50px] h-[50px] text-center border-1 my-3 object-contain block transition-all duration-500 linear group-hover:hidden mx-auto"
                        src={item?.ImageUrl}
                        alt={item?.Name}
                        width={50}
                        height={50}
                        priority
                      />
                      <NextImage
                        className="w-[50px] h-[50px] text-center z-[1] border-1 my-3 object-contain transition-all duration-500 linear hidden group-hover:block mx-auto"
                        src={item?.FeatureImageUrl}
                        alt={item?.Name}
                        width={50}
                        height={50}
                        priority
                      />

                      <h3 className="text-md md:text-lg lg:text-xl font-medium z-[1] group-hover:text-white text-center">
                        {item?.Name}
                      </h3>
                      <div
                        className="text-center group-hover:text-white mt-3"
                        dangerouslySetInnerHTML={{
                          __html: item?.DescriptionLong,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
              {/* <div role="cell" className="relative block max-w-[300px]">
                <div className="bg-white relative min-h-[345px] h-full flex justify-center rounded-xl p-3 md:p-5 overflow-hidden my-5 group transition-all ease-in-out duration-500">
                  <div className="absolute top-0 left-0 w-0 h-0 rounded-full bg-[#1E352C] flex items-center justify-center transition-all duration-500 ease-in-out z-[1] group-hover:w-[70px] group-hover:h-[70px] group-hover:scale-[15]"></div>
                  <div className="block z-[9]">
                    <NextImage
                      className="w-[50px] h-[50px] text-center border-1 my-3 object-contain block transition-all duration-500 linear group-hover:hidden mx-auto"
                      src="/images/oil.svg"
                      alt="Editable oil"
                      width={50}
                      height={50}
                      priority
                    />
                    <NextImage
                      className="w-[50px] h-[50px] text-center z-[1] border-1 my-3 object-contain transition-all duration-500 linear hidden group-hover:block mx-auto"
                      src="/images/oil-white.svg"
                      alt="Editable oil"
                      width={50}
                      height={50}
                      priority
                    />

                    <h3 className="text-md md:text-lg lg:text-xl font-medium z-[1] group-hover:text-white text-center">
                      Excellence
                    </h3>
                    <p className="text-center group-hover:text-white mt-3">
                      We strive for excellence in everything we do, continuously
                      raising the bar to deliver exceptional quality and
                      customer satisfaction
                    </p>
                  </div>
                </div>
              </div>
              <div role="cell" className="relative block max-w-[300px]">
                <div className="bg-white relative flex justify-center min-h-[345px] h-full rounded-xl p-3 md:p-5 overflow-hidden my-5 group transition-all ease-in-out duration-500">
                  <div className="absolute top-0 left-0 w-0 h-0 rounded-full bg-[#1E352C] flex items-center justify-center transition-all duration-500 ease-in-out z-[1] group-hover:w-[70px] group-hover:h-[70px] group-hover:scale-[15]"></div>
                  <div className="block z-[9]">
                    <NextImage
                      className="w-[50px] h-[50px] text-center border-1 my-3 object-contain block transition-all duration-500 linear group-hover:hidden mx-auto"
                      src="/images/agro.svg"
                      alt="Editable oil"
                      width={50}
                      height={50}
                      priority
                    />
                    <NextImage
                      className="w-[50px] h-[50px] text-center z-[1] border-1 my-3 object-contain transition-all duration-500 linear hidden group-hover:block mx-auto"
                      src="/images/agro-white.svg"
                      alt="Editable oil"
                      width={50}
                      height={50}
                      priority
                    />

                    <h3 className="text-md md:text-lg lg:text-xl font-medium z-[1] group-hover:text-white text-center">
                      Adaptability
                    </h3>
                    <p className="text-center group-hover:text-white mt-3">
                      We embrace change and remain agile in a dynamic business
                      environment, proactively seeking new opportunities for
                      growth and improvement.
                    </p>
                  </div>
                </div>
              </div>
              <div role="cell" className="relative block max-w-[300px]">
                <div className="bg-white relative flex justify-center min-h-[345px] h-full rounded-xl p-3 md:p-5 overflow-hidden my-5 group transition-all ease-in-out duration-500">
                  <div className="absolute top-0 left-0 w-0 h-0 rounded-full bg-[#1E352C] flex items-center justify-center transition-all duration-500 ease-in-out z-[1] group-hover:w-[70px] group-hover:h-[70px] group-hover:scale-[15]"></div>
                  <div className="block z-[9]">
                    <NextImage
                      className="w-[50px] h-[50px] text-center border-1 my-3 object-contain block transition-all duration-500 linear group-hover:hidden mx-auto"
                      src="/images/chemical.svg"
                      alt="Editable oil"
                      width={50}
                      height={50}
                      priority
                    />
                    <NextImage
                      className="w-[50px] h-[50px] text-center z-[1] border-1 my-3 object-contain transition-all duration-500 linear hidden group-hover:block mx-auto"
                      src="/images/chemical-white.svg"
                      alt="Editable oil"
                      width={50}
                      height={50}
                      priority
                    />

                    <h3 className="text-md md:text-lg lg:text-xl font-medium z-[1] group-hover:text-white text-center">
                      Accountability
                    </h3>
                    <p className="text-center group-hover:text-white mt-3">
                      We take ownership of our responsibilities and strive to
                      meet and exceed expectations. We understand the importance
                      of delivering on our promises to our clients, partners,
                      and stakeholders
                    </p>
                  </div>
                </div>
              </div>
              <div role="cell" className="relative block max-w-[300px]">
                <div className="bg-white relative flex justify-center min-h-[345px] h-full rounded-xl p-3 md:p-5 overflow-hidden my-5 group transition-all ease-in-out duration-500">
                  <div className="absolute top-0 left-0 w-0 h-0 rounded-full bg-[#1E352C] flex items-center justify-center transition-all duration-500 ease-in-out z-[1] group-hover:w-[70px] group-hover:h-[70px] group-hover:scale-[15]"></div>
                  <div className="block z-[9]">
                    <NextImage
                      className="w-[50px] h-[50px] text-center border-1 my-3 object-contain block transition-all duration-500 linear group-hover:hidden mx-auto"
                      src="/images/sweet.svg"
                      alt="Editable oil"
                      width={50}
                      height={50}
                      priority
                    />
                    <NextImage
                      className="w-[50px] h-[50px] text-center z-[1] border-1 my-3 object-contain transition-all duration-500 linear hidden group-hover:block mx-auto"
                      src="/images/sweet-white.svg"
                      alt="Editable oil"
                      width={50}
                      height={50}
                      priority
                    />

                    <h3 className="text-md md:text-lg lg:text-xl font-medium z-[1] group-hover:text-white text-center">
                      Commitment
                    </h3>
                    <p className="text-center group-hover:text-white mt-3">
                      We are dedicated to the success of our clients, partners,
                      and employees. We go the extra mile to understand their
                      needs, challenges, and aspirations, and we proactively
                      work towards achieving their goals
                    </p>
                  </div>
                </div>
              </div>
              <div role="cell" className="relative block max-w-[300px]">
                <div className="bg-white relative flex justify-center min-h-[345px] h-full rounded-xl p-3 md:p-5 overflow-hidden my-5 group transition-all ease-in-out duration-500">
                  <div className="absolute top-0 left-0 w-0 h-0 rounded-full bg-[#1E352C] flex items-center justify-center transition-all duration-500 ease-in-out z-[1] group-hover:w-[70px] group-hover:h-[70px] group-hover:scale-[15]"></div>
                  <div className="block z-[9]">
                    <NextImage
                      className="w-[50px] h-[50px] text-center border-1 my-3 object-contain block transition-all duration-500 linear group-hover:hidden mx-auto"
                      src="/images/industry.svg"
                      alt="Editable oil"
                      width={50}
                      height={50}
                      priority
                    />
                    <NextImage
                      className="w-[50px] h-[50px] text-center z-[1] border-1 my-3 object-contain transition-all duration-500 linear hidden group-hover:block mx-auto"
                      src="/images/industry-white.svg"
                      alt="Editable oil"
                      width={50}
                      height={50}
                      priority
                    />

                    <h3 className="text-md md:text-lg lg:text-xl font-medium z-[1] group-hover:text-white text-center">
                      Innovation
                    </h3>
                    <p className="text-center group-hover:text-white mt-3">
                      We embrace innovation as a driving force for progress,
                      continuously seeking new ideas, technologies, and
                      approaches to stay ahead in the market.
                    </p>
                  </div>
                </div>
              </div>
              <div role="cell" className="relative block max-w-[300px]">
                <div className="bg-white relative flex justify-center min-h-[345px] h-full rounded-xl p-3 md:p-5 overflow-hidden my-5 group transition-all ease-in-out duration-500">
                  <div className="absolute top-0 left-0 w-0 h-0 rounded-full bg-[#1E352C] flex items-center justify-center transition-all duration-500 ease-in-out z-[1] group-hover:w-[70px] group-hover:h-[70px] group-hover:scale-[15]"></div>
                  <div className="block z-[9]">
                    <NextImage
                      className="w-[50px] h-[50px] text-center border-1 my-3 object-contain block transition-all duration-500 linear group-hover:hidden mx-auto"
                      src="/images/industry.svg"
                      alt="Editable oil"
                      width={50}
                      height={50}
                      priority
                    />
                    <NextImage
                      className="w-[50px] h-[50px] text-center z-[1] border-1 my-3 object-contain transition-all duration-500 linear hidden group-hover:block mx-auto"
                      src="/images/industry-white.svg"
                      alt="Editable oil"
                      width={50}
                      height={50}
                      priority
                    />

                    <h3 className="text-md md:text-lg lg:text-xl font-medium z-[1] group-hover:text-white text-center">
                      Sustainability
                    </h3>
                    <p className="text-center group-hover:text-white mt-3">
                      We are committed to sustainable practices, promoting
                      environmental responsibility and social well-being in all
                      aspects of our operations.
                    </p>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ValuesSec;
