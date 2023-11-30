"use client";

import NextImage from "../../NextImage";


const ClientsItem = ({ data }) => {
    return (
        <div className="py-10 sm:py-10 px-5 md:px-40 flex flex-wrap justify-center">
            {data?.slice(0, 4).map((item, index) => (
                <div key={index} className="w-6/12 md:w-1/3 lg:w-1/4 flex justify-center border md:border-b last:border-r-0 border-gray-200 p-5 md:py-10 md:px-5 items-center group">
                    <div className='relative flex items-center w-[200px] h-[100px] grayscale group-hover:grayscale-0'>
                        <NextImage src={item.logo} alt={item.name} fill className='w-full h-full object-contain' />
                    </div>
                </div>
            ))}

            {data?.slice(4, 8).map((item, index) => (
                <div key={index} className="w-6/12 md:w-1/3 lg:w-1/4 flex justify-center border xl:border-l lg:border-l border-gray-200 p-5 md:py-10 md:px-5 items-center group">
                    <div className='relative flex items-center w-[200px] h-[100px] grayscale group-hover:grayscale-0'>
                        <NextImage src={item.logo} alt={item.name} fill className='w-full h-full object-contain' />
                    </div>
                </div>
            ))}
            {/* <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                <NextImage src="https://cdn.tuk.dev/assets/channel-dark.png" alt='' />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                <NextImage src="https://cdn.tuk.dev/assets/nike-dark.png" alt='' />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                <NextImage src="https://cdn.tuk.dev/assets/toyota-dark.png" alt='' />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                <NextImage src="https://cdn.tuk.dev/assets/gs1-dark.png" alt='' />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                <NextImage src="https://cdn.tuk.dev/assets/berry-dark.png" alt='' />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                <NextImage src="https://cdn.tuk.dev/assets/min-dark.png" alt='' />
            </div>
            <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                <NextImage src="https://cdn.tuk.dev/assets/honda-dark.png" alt='' />
            </div> */}
        </div>
    )
}
export default ClientsItem;
