"use client";

import { useRef, useEffect, Fragment } from "react";
import { Tab, Transition } from "@headlessui/react";
import NextImage from "../NextImage";
import { motion } from 'framer-motion'

const ProductsTab = ({ locale, innerProduct, tabs }) => {
  const tabsRef = useRef(null);

  const heightFix = () => {
    if (tabsRef.current && tabsRef.current.parentElement)
      tabsRef.current.parentElement.style.height = `${tabsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, [tabsRef.current]);

   const sortedTabs = tabs.sort( (p1, p2) => (p1.Order < p2.Order) ? -1 : (p1.Order > p2.Order) ? 1 : 0);

  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full">
      <Tab.Group className="relative">
        {({ selectedIndex }) => (
          <div className="block md:flex overflow-hidden bg-white border-2 border-[#eee] rounded-2xl w-full h-full">
            {/* Buttons */}
            <div className="flex justify-center w-[100%] md:w-[370px] lg:h-full">
              <Tab.List className="w-full md:h-auto inline-flex flex-wrap justify-center overflow-hidden min-[500px]:mb-5 md:mb-0">
                {sortedTabs.map((tab, index) => (
                  <Tab key={index} as={Fragment} className="tabs-button">
                    <button
                      className={`flex items-center md:w-full w-full text-lg md:text-xl font-medium h-[30px] md:max-h-[110px] h-auto p-6 whitespace-nowrap border-b-2 transition-colors duration-150 ease-in-out border-[#219E70] last-of-type:border-0 ${selectedIndex === index
                        ? " !text-primary  !bg-[#fff] border-b-3"
                        : "text-white"
                        }}`}
                    >
                      {selectedIndex === index ? (
                        <NextImage
                          className="w-[20px] h-[20px] md:h-[30px] md:w-[30px] border-1 my-2 mr-2 object-contain block transition-all duration-700 linear"
                          src={tab?.ImageUrl}
                          alt=" Local Presence"
                          width={10}
                          height={10}
                          priority
                        />
                      ) : (
                        <NextImage
                          className="w-[20px] h-[20px] md:h-[30px] md:w-[30px] border-1 my-2 mr-2 object-contain block transition-all duration-700 linear"
                          src={tab?.FeatureImageUrl}
                          alt=" Local Presence"
                          width={10}
                          height={10}
                          priority
                        />
                      )}
                      {tab?.Name}
                    </button>
                  </Tab>
                ))}
              </Tab.List>
            </div>

            {/* Tab panels */}
            <Tab.Panels className="!h-full bg-white">
              <div className="px-5 h-full" ref={tabsRef}>
                {tabs.map((tab, index) => (
                  <div key={index}>
                    <Tab.Panel static={true}>
                      <Transition
                        as="article"
                        show={selectedIndex === index}
                        unmount={false}
                        className="h-full"
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 transform order-first"
                        enterFrom="opacity-0 -translate-y-8"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-300 transform absolute"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-12"
                      // beforeEnter={() => heightFix()}
                      >
                        <div
                          className={`${selectedIndex === index ? "flex" : "hidden"
                            }`}
                        >
                          <div className="py-5 md:py-10 px-2 md:px-5 justify-center">
                            <h4 className="text-2xl mb-4 text-primary">
                              {" "}
                              {tab?.Name}
                            </h4>
                            <div className="list-content px-2 md:px-5">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: tab?.DescriptionLong,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </Transition>
                    </Tab.Panel>
                    {selectedIndex === index &&
                      <div className="w-[200px] h-[200px] absolute -right-5 bottom-0 opacity-5 hidden md:block pr-5">
                        <NextImage src={tab?.ImageUrl} alt="img" width={300} height={300} className="w-full h-full object-contain" />
                      </div>
                    }
                  </div>
                ))}
              </div>
            </Tab.Panels>
          </div>
        )}
      </Tab.Group>
    </motion.div>
  );
};
export default ProductsTab;
