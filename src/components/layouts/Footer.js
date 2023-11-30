"use client";

import { useContext } from "react";
import { ResourcesContext } from "@/contexts/DataContext";
import Link from "next/link";
import NextImage from "../NextImage";
// Components
import LogoImg from "/public/images/act-logo-white.svg";
import { PhoneIcon } from "@heroicons/react/24/solid";
import SocialLinks from "../SocialLinks";
import BottomBar from "./BottomBar";

const Footer = ({ data , socialMedia }) => {
  const { useTranslate } = useContext(ResourcesContext);

  const footerLinks = [
    {
      id: 1,
      title: useTranslate("about"),
      href: "about",
      hasDropDown: false,
    },
    {
      id: 2,
      title: useTranslate("products"),
      href: "products",
      hasDropDown: false,
    },
    {
      id: 3,
      title: useTranslate("services"),
      href: "services",
      hasDropDown: false,
    },
    {
      id: 5,
      title: useTranslate("contact"),
      href: "contact",
      hasDropDown: false,
    },
  ];

  return (
    <footer className="relative z-10 bg-[#1E352C] text-white pt-10 lg:pt-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:justify-center">
          <div className="w-full px-4 sm:w-2/3 lg:w-4/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px] h-70">
                <NextImage
                  src={LogoImg}
                  alt="logo"
                  className="max-w-full object-contain"
                />
              </Link>
              <p className="text-body-color mb-5 mr-10 pr-20 text-base font-regFont">
               
                {useTranslate("aboutFooter")}
              </p>
              <div className="text-dark flex items-center text-lg font-semibold gap-1">
                <PhoneIcon className="h-5 w-5 text-primary" />
                <a href={`tel:${data?.Phone1}`}>{data?.Phone1}</a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-4 text-lg text-boldFont">
                {useTranslate("sitemap")}
              </h4>
              <ul>
                {footerLinks?.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item?.href}
                      className="text-body-color mb-2 inline-block text-base hover:text-mid"
                    >
                      {item?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-4 text-lg font-boldFont">Services</h4>
              <ul>
                <li>
                  <a href="#" className="text-body-color hover:text-primary mb-2 inline-block text-bas">
                    About TailGrids
                  </a>
                </li>
                <li>
                  <a href="#" className="text-body-color hover:text-primary mb-2 inline-block text-base">
                    Contact & Support
                  </a>
                </li>
              </ul>
            </div>
          </div> */}

          {socialMedia && (
            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="text-dark mb-4 text-lg font-semibold">
                  {useTranslate("followUsOn")}
                </h4>
                <div className="mb-6 flex items-center">
                  <SocialLinks socialMedia={socialMedia} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <BottomBar />
    </footer>
  );
};
export default Footer;
