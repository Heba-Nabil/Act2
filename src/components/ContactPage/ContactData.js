"use client";

import { useContext } from "react";
import { ResourcesContext } from "@/contexts/DataContext";
import { motion } from "framer-motion";
import AnimatedTitle from "../AnimatedTitle";
import { EnvelopeIcon, HomeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ContactData = ({ data, locale }) => {
  const { useTranslate } = useContext(ResourcesContext);

  return (
    <div className="mb-12 lg:mb-0">
      <AnimatedTitle
        title={`${useTranslate("contactInfo")}`}
        className="text-primary text-2xl md:text-4xl mb-10 mt-10"
      />

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {data?.Branch && (
          <div className="mb-8 flex w-full">
            <div className="bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] text-white mr-6 flex h-[50px] w-full max-w-[50px] items-center justify-center overflow-hidden rounded-[15px]">
              <HomeIcon className="w-7 h-7" />
            </div>
            <div className="w-full">
              <h4 className="text-dark mb-1">
                {useTranslate("location")}
              </h4>
              <p className="text-body-color text-base">{data?.Branch}</p>
              <Link
                target="_blank"
                href={data?.URL1}
                className="font-SemiboldFont cursor-pointer mt-2 whitespace-nowrap inline-flex items-center justify-center  pt-2 border-b-2 border-primary shadow-sm text-base text-black hover:text-primary "
              >
                {useTranslate("viewGoogleMaps")}
              </Link>
            </div>
          </div>
        )}
        {data?.Phone1 && (
          <div className="mb-8 flex w-full">
            <div className="bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] text-white mr-6 flex h-[50px] w-full max-w-[50px] items-center justify-center overflow-hidden rounded-[15px]">
              <PhoneIcon className="w-7 h-7" />
            </div>
            <div className="w-full">
              <h4 className="text-dark mb-1">
                {useTranslate("phone")}
              </h4>
              <div>
                {data?.Phone1 && (
                  <a className="text-base block" href={`tel:${data?.Phone1}`}>
                    {data?.Phone1}
                  </a>
                )}
                {data?.Phone2 && (
                  <a className="text-base block" href={`tel:${data?.Phone2}`}>
                    {data?.Phone2}
                  </a>
                )}
                {data?.Phone3 && (
                  <a className="text-base block" href={`tel:${data?.Phone3}`}>
                    {data?.Phone3}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        {data?.Email1 && (
          <div className="mb-8 flex w-full">
            <div className="bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] text-white mr-6 flex h-[50px] w-full max-w-[50px] items-center justify-center overflow-hidden rounded-[15px]">
              <EnvelopeIcon className="w-7 h-7" />
            </div>
            <div className="w-full">
              <h4 className="text-dark mb-1 ">
                {useTranslate("email")}
              </h4>
              <div>
                {data?.Email1 && (
                  <a
                    className="text-base block"
                    href={`mailto:${data?.Email1}`}
                  >
                    {data?.Email1}
                  </a>
                )}
                {data?.Email2 && (
                  <a
                    className="text-base block"
                    href={`mailto:${data?.Email2}`}
                  >
                    {data?.Email2}
                  </a>
                )}
                {data?.Email3 && (
                  <a
                    className="text-base block"
                    href={`mailto:${data?.Email3}`}
                  >
                    {data?.Email3}
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
export default ContactData;
