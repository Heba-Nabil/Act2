'use client'

import { useRef, useEffect, Fragment } from 'react'
import { Tab, Transition } from '@headlessui/react'
import NextImage from '../../NextImage'


const ClientsTab = ({ locale, tabs, media }) => {

    const tabsRef = useRef(null)

    const heightFix = () => {
        if (tabsRef.current && tabsRef.current.parentElement) tabsRef.current.parentElement.style.height = `${tabsRef.current.clientHeight}px`
    }

    useEffect(() => {
        heightFix();
    }, [tabsRef.current])


    return (
        <Tab.Group>
            {({ selectedIndex }) => (
                <div>
                    {/* Buttons */}
                    <div className="flex justify-center">
                        <Tab.List className="max-[480px]:max-w-full h-auto md:h-[64px] block md:inline-flex flex-wrap justify-center bg-primary rounded-[35px] border-2 border-primary overflow-hidden mb-5 min-[480px]:mb-5 font-regFont">
                            {tabs.map((tab, index) => (
                                <Tab key={index} as={Fragment}>
                                    <button
                                        className={`block w-full md:flex-1 text-base h-[60px] px-4 rounded-[35px] whitespace-nowrap transition duration-150 ease-in-out ${selectedIndex === index ? 'bg-white !text-black' : '!text-white'}`}>
                                        {tab?.Name}
                                    </button>
                                </Tab>
                            ))}
                        </Tab.List>
                    </div>

                    {/* Tab panels */}
                    <Tab.Panels className="mx-auto">
                        <div className="relative flex flex-col" ref={tabsRef}>
                            {tabs.map((tab, index) => (
                                <Tab.Panel
                                    key={index}
                                    as={Fragment}
                                    static={true}
                                >
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
                                        <div className={`${selectedIndex === index ? "flex" : "hidden"}`}>
                                            <div className="py-10 sm:py-10 px-5 md:px-40 flex flex-wrap justify-center">
                                                {media?.slice(0, 4).map((item, index) => (
                                                    <div key={index} className="w-6/12 md:w-1/3 lg:w-1/4 flex justify-center border md:border-b last:border-r-0 border-gray-200 p-5 md:py-10 md:px-5 items-center group">
                                                        <div className='relative flex items-center w-[200px] h-[100px] grayscale group-hover:grayscale-0'>
                                                            <NextImage src={item?.ImageUrl} alt={item?.Alt} fill className='w-full h-full object-contain' />
                                                        </div>
                                                    </div>
                                                ))}

                                                {media?.slice(4, 8).map((item, index) => (
                                                    <div key={index} className="w-6/12 md:w-1/3 lg:w-1/4 flex justify-center border xl:border-l lg:border-l border-gray-200 p-5 md:py-10 md:px-5 items-center group">
                                                        <div className='relative flex items-center w-[200px] h-[100px] grayscale group-hover:grayscale-0'>
                                                            <NextImage src={item?.ImageUrl} alt={item?.Alt} fill className='w-full h-full object-contain' />
                                                        </div>
                                                    </div>
                                                ))}
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
    )
}
export default ClientsTab;