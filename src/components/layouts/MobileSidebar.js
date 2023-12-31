import Link from "next/link";

const MobileSidebar = ({ items }) => {
    return (
        <div className="w-64 z-40 fixed overflow-y-auto top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
            <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                    <div>
                        {/* <div className="mt-6 flex w-full items-center justify-between">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={43}
                                        height={44}
                                        viewBox="0 0 43 44"
                                        fill="none"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M37.8735 0C36.1688 0 34.7818 1.37956 34.7818 3.0751C34.7818 4.77063 36.1688 6.15019 37.8735 6.15019C39.5782 6.15019 40.9653 4.77063 40.9653 3.0751C40.9653 1.37956 39.5782 0 37.8735 0ZM37.8735 4.61264C37.021 4.61264 36.3277 3.92305 36.3277 3.0751C36.3277 2.22714 37.021 1.53755 37.8735 1.53755C38.7261 1.53755 39.4194 2.22714 39.4194 3.0751C39.4194 3.92305 38.7261 4.61264 37.8735 4.61264ZM26.6663 1.0513C26.1828 1.0513 25.7909 1.44107 25.7909 1.92193C25.7909 2.4028 26.1828 2.79238 26.6663 2.79238C27.1497 2.79238 27.5416 2.40261 27.5416 1.92193C27.5416 1.44107 27.1497 1.0513 26.6663 1.0513ZM43 13.4535C43 13.9342 42.6081 14.324 42.1247 14.324C41.6412 14.324 41.2493 13.9342 41.2493 13.4535C41.2493 12.9727 41.6412 12.5829 42.1247 12.5829C42.6081 12.5829 43 12.9729 43 13.4535ZM18.1654 2.59019L35.1698 12.4044C35.4079 12.5418 35.5548 12.7951 35.5548 13.0692V33.0573C35.5548 33.3273 35.4123 33.5772 35.1803 33.7161L18.1758 43.8901C18.0533 43.9633 17.915 44 17.7774 44C17.6398 44 17.5016 43.9633 17.3789 43.8901L0.374484 33.7161C0.142219 33.5772 0 33.3271 0 33.0573V13.0692C0 12.7951 0.146857 12.5418 0.384919 12.4044L17.3894 2.59019C17.6296 2.45124 17.9254 2.45124 18.1654 2.59019ZM17.7774 4.14388L33.2524 13.0751L23.0207 19.0887L18.5503 16.4735V12.3004C18.5503 11.8758 18.2042 11.5316 17.7774 11.5316C17.3505 11.5316 17.0044 11.8758 17.0044 12.3004V16.4735L11.9752 19.4158C11.7389 19.554 11.5939 19.8057 11.5939 20.0783V25.8047L1.54586 31.7102V13.5118L17.7774 4.14388ZM2.28227 33.0632L17.7774 42.3341L34.0091 32.6225V14.4162L23.961 20.322V26.4081C23.961 26.6807 23.8161 26.9325 23.5798 27.0706L18.5505 30.0125V33.826C18.5505 34.2506 18.2044 34.5948 17.7776 34.5948C17.3507 34.5948 17.0046 34.2506 17.0046 33.826V30.0125L12.2274 27.2182L2.28227 33.0632Z"
                                            fill="#667EEA"
                                        />
                                    </svg>
                                </div>
                                <div
                                    id="cross"
                                    className="text-gray-800"
                                    onClick={() => setShow(!show)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-x"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            </div>
                        </div> */}
                        <ul className="f-m-m">
                            {items?.map((item, index) => (
                                <li key={index} className="text-gray-800 pt-10">
                                    <div className="flex items-center">
                                        <Link href="#" className="text-indigo-700 xl:text-base text-base ml-3">
                                            {item.title}
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full pt-4">
                        <div className="flex justify-center mb-4 w-full">
                            <div className="relative w-full">
                                <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-search"
                                        width={16}
                                        height={16}
                                        viewBox="0 0 24 24"
                                        strokeWidth={1}
                                        stroke="#A0AEC0"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={10} cy={10} r={7} />
                                        <line x1={21} y1={21} x2={15} y2={15} />
                                    </svg>
                                </div>
                                <input
                                    className="bg-gray-100 focus:outline-none rounded w-full text-sm text-gray-500  pl-10 py-2"
                                    type="text"
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                        <div className="border-t border-gray-300">
                            <div className="w-full flex items-center justify-between pt-1">
                                <div className="flex items-center">
                                    <img
                                        alt="profile-pic"
                                        src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                                        className="w-8 h-8 rounded-md"
                                    />
                                    <p className=" text-gray-800 text-base leading-4 ml-2">
                                        Jane Doe
                                    </p>
                                </div>
                                <ul className="flex">
                                    <li className="cursor-pointer text-gray-800 pt-5 pb-3">
                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-messages"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                            </svg>
                                        </div>
                                    </li>
                                    <li className="cursor-pointer text-gray-800 pt-5 pb-3 pl-3">
                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="icon icon-tabler icon-tabler-bell"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1}
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                            </svg>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MobileSidebar;