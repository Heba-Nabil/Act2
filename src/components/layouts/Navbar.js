"use client";

import { useContext, useEffect, useState } from "react";
import { usePathname, useSearchParams } from 'next/navigation'
import { ResourcesContext } from "@/contexts/DataContext";
import { Link as LinkScroll } from "react-scroll";
import NextImage from "../NextImage";
import Logo from "/public/images/act-logo.svg";
import WhiteLogo from "/public/images/act-logo-white.svg";
import Link from "next/link";
import useScroll from "@/hooks/useScroll";
import  { GlobalLinks } from "../GlobalButtons";

const Navbar = () => {
  const { useTranslate } = useContext(ResourcesContext);
  const [show, setShow] = useState(null);

  const headerLinks = [
    {
      id: 1,
      title: useTranslate("about"),
      href: 'about',
      hasDropDown: false,
    },
    {
      id: 2,
      title: useTranslate('products'),
      href: 'products',
      hasDropDown: false,
    },
    {
      id: 3,
      title: useTranslate('services'),
      href: 'services',
      hasDropDown: false,
    },
    {
      id: 5,
      title: useTranslate('contact'),
      href: 'contact',
      hasDropDown: false,
    },
  ]

  const stickyNav = useScroll();

  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const [activeLink, setActiveLink] = useState(null);


  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveLink(
        headerLinks.find((item) => item.href === currentPath)?.id
      );
    }
  }, [currentPath, searchParams]);


  return (
    <>
      <div
        className={`py-0 md:px-10 z-[99] flex w-full items-center bg-white text-black ${stickyNav
          ? "md:sticky top-0 left-0 md:shadow-xl transition"
          : "md:absolute "
          }`}
      >
        {/* Code block starts */}
        <nav className="md:h-full w-full hidden md:block py-1">
          <div className="mx-auto container py-0">
            <div className="flex items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                <div className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-150 ease-in-out">
                  <div className="block sm:hidden">
                    {/* <div className="p-2 border-r bg-white absolute rounded left-0 right-0 shadow mt-8 md:mt-8">
                      {headerLinks?.map((item, index) => (
                      
                        <Link
                          key={index}
                          href={item.href}
                          className='hidden sm:flex cursor-pointer text-xl leading-3 tracking-normal mt-2  py-2 focus:outline-none'
                        >
                           { console.log(currentPath , currentPath.endsWith(item.href) )}
                          <span className={`ml-2  ${currentPath.endsWith(item.href) ? 'text-primary' : 'text-black'}`}>{item.title}</span>
                        </Link>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="flex w-full sm:w-auto items-center sm:items-stretch justify-end sm:justify-start">
                <div className="flex items-center p-2 rounded-md">
                  <Link href="/" className="relative w-[200px] h-[65px]">
                    {stickyNav ? (
                      <NextImage
                        src={Logo}
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    ) : (
                      <NextImage
                        // src={WhiteLogo}
                        src={Logo}
                        alt="Logo"
                        fill
                        className="object-contain"
                      />
                    )}
                  </Link>
                </div>
              </div>
              <div className="flex">
                <div className="hidden md:flex md:mr-6 xl:mr-16 font-SemiboldFont">
                  {headerLinks?.map((item, index) => (

                    
                    <Link
                      key={index}
                      href={item.href}
                      className={`flex px-4 items-center relative py-4 text-lg transition-all ease-linear duration-500 before:absolute before:h-[2px] before:left-0 before:bottom-0 before:bg-primary hover:before:w-full  ${currentPath.includes(item.href) ? 'text-primary before:w-full' : 'text-dark before:w-0'} `}
                    >
                     
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="hidden xl:flex items-center">
                  <div className="relative md:mr-6 my-2">
                    {/* <Link
                      href="quote"
                      className="font-SemiboldFont cursor-pointer ml-8 whitespace-nowrap inline-flex items-center justify-center px-10 py-2 border border-transparent rounded-[24px] shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] hover:bg-none hover:bg-white hover:text-primary hover:border-primary"
                    >
                      {useTranslate('getQuote')}
                    </Link> */}

                    <GlobalLinks link="quote">  {useTranslate('getQuote')}</GlobalLinks>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile */}
        <nav className="h-full w-full block md:hidden">
          <div className="py-4 px-2 w-full flex xl:hidden justify-between items-center bg-white fixed top-0 left-0 z-40">
            <div className="w-24">
              <Link href="/act" className="relative block w-[100px] h-[50px]">
                <NextImage
                  src={Logo}
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="flex items-center">
              <div
                id="menu"
                className="text-gray-800 cursor-pointer bg-primary rounded-full h-10 w-10 flex items-center justify-center"
                onClick={() => setShow(!show)}
              >
                {show ? (
                  ""
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={4} y1={6} x2={20} y2={6} />
                    <line x1={4} y1={12} x2={20} y2={12} />
                    <line x1={4} y1={18} x2={20} y2={18} />
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/*Mobile responsive sidebar*/}
          <div
            className={
              show
                ? "w-full xl:hidden h-full fixed z-40 transform translate-x-0 left-0"
                : "w-full xl:hidden h-full fixed z-40 transform -translate-x-full left-0 overflow-hidden"
            }
          >
            <div
              className="bg-gray-800 opacity-50 w-full h-full"
              onClick={() => setShow(!show)}
            />
            <div className="w-64 z-40 fixed overflow-hidden overscroll-none top-0 bg-white shadow h-full flex-col justify-between xl:hidden pb-4 transition duration-150 ease-in-out">
              <div className="px-6 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <Link
                            href="/act"
                            className="relative w-[100px] h-[50px]"
                            onClick={() => setShow(!show)}
                          >
                            <NextImage
                              src={Logo}
                              alt="Logo"
                              fill
                              className="object-contain"
                            />
                          </Link>
                        </div>
                        <div
                          id="cross"
                          className="text-gray-800 cursor-pointer"
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
                    </div>
                    <div className="f-m-m text-black pt-8 block font-SemiboldFont" onClick={() => setShow(!show)}>
                      {headerLinks?.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className={`flex items-center py-2 text-xl focus:outline-none transition duration-150 ease-in-out $ ${currentPath.includes(item.href) ? 'text-primary' : 'text-dark'} `}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>

                      <div className="relative md:mr-6 my-2" onClick={() => setShow(!show)}>
                        {/* <Link
                          href="quote"
                          className="font-SemiboldFont cursor-pointer whitespace-nowrap mt-5 inline-flex items-center justify-center px-10 py-2 border border-transparent rounded-[24px] shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] hover:bg-none hover:bg-white hover:text-primary hover:border-primary"
                          >
                          {useTranslate('getQuote')}
                        </Link> */}
                        <GlobalLinks link="quote">{useTranslate('getQuote')}</GlobalLinks>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Code block ends */}
      </div>
    </>
  );
}
export default Navbar;
