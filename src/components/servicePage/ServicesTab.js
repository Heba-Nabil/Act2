"use client";

import { useRef, useEffect, Fragment } from "react";
import { Tab, Transition } from "@headlessui/react";
import NextImage from "../NextImage";

const ServicesTab = ({ tabs }) => {
  const tabsRef = useRef(null);

  const heightFix = () => {
    if (tabsRef.current && tabsRef.current.parentElement)
      tabsRef.current.parentElement.style.height = `${tabsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, [tabsRef.current]);

  return (
    <Tab.Group>
      {({ selectedIndex }) => (
        <div className="block md:flex overflow-hidden">

          {/* Buttons */}
          <div className="flex justify-center w-[100%] md:w-[350px] h-full">
            <Tab.List className="w-full  md:h-auto inline-flex flex-wrap justify-center rounded-[5px] overflow-hidden min-[480px]:mb-5 md:mb-0 bg-[#f7f7f7]">
              {tabs.map((tab, index) => (
                <Tab key={index} as={Fragment}>
                  <button
                    className={`flex items-center md:w-full w-full text-xl font-medium h-[30px] md:h-[70px] p-6 whitespace-nowrap border-b-2  transition-colors duration-150 ease-in-out ${selectedIndex === index
                      ? " text-primary  border-[#2a5c3d] bg-[#fff] border-b-3 "
                      : "text-[#5d5d5d] border-secondary"
                      }}`}
                  >
                    <NextImage
                      className="w-[10px] h-[10px] md:h-120px md:w-[10px] border-1 my-2 mr-2 object-contain block transition-all duration-700 linear group-hover:hidden "
                      src="/images/arrow.svg"
                      alt=" Local Presence"
                      width={10}
                      height={10}
                      priority
                    />

                    {tab.title}
                  </button>
                </Tab>
              ))}
            </Tab.List>
          </div>

          {/* Tab panels */}
          <Tab.Panels className="!h-auto">
            <div className="relative px-5" ref={tabsRef}>
              {tabs.map((tab, index) => (
                <Tab.Panel key={index} as={Fragment} static={true}>
                  <Transition
                    as="article"
                    show={selectedIndex === index}
                    unmount={false}
                    className="w-full "
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
                        <h4 className="text-2xl mb-4 text-primary">  {tab.title}</h4>
                        <div className="list-content px-2 md:px-5">
                          <div dangerouslySetInnerHTML={{ __html: tab?.description }} />
                        </div>
                      </div>
                    </div>
                  </Transition>
                </Tab.Panel>
              ))}
            </div>
          </Tab.Panels>
        </div>
      )}
    </Tab.Group>
  );
};
export default ServicesTab;
