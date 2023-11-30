"use client";

import { motion } from "framer-motion";
import AnimatedTitle from "../../AnimatedTitle";
import Link from "next/link";
import { ArrowSmallRightIcon, EnvelopeOpenIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ResourcesContext } from "@/contexts/DataContext";

const ContactData = ({ info }) => {
  const { useTranslate } = useContext(ResourcesContext)

  return (
    <div className="z-10">
      <AnimatedTitle
        title={`${useTranslate('contactSec')}`}
        className="text-white text-2xl md:text-4xl mb-5"
      />
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <ul className='text-white text-[18px] mb-5'>
          <li className='flex gap-2 mb-2'>
            <MapPinIcon className='h-5 w-5 text-white' />
            {info?.Address}
          </li>
          <li className='flex gap-2 mb-2'>
            <EnvelopeOpenIcon className='h-5 w-5 text-white' />
            <Link href={`mailto:${info?.Email1}`}>{info?.Email1}</Link>
          </li>
          <li className='flex gap-2 mb-2'>
            <PhoneIcon className='h-5 w-5 text-white' />
            <Link href={`tel:${info?.Phone1}`}>{info?.Phone1}</Link>
          </li>
        </ul>
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="#"
            className="relative pr-5 flex z-10 items-center overflow-hidden text-white rounded-[34px] w-fit text-[20px] font-normal transition-all duration-700 linear group hover:text-white"
          >
            <div className="absolute top-0 left-0 w-0 h-[60px] -z-[1] rounded-[35px] bg-[#6B6A6C] transition-all duration-700 linear flex items-center justify-center group-hover:w-full"></div>
            <div className="relative bg-[#6B6A6C] w-[60px] h-[60px] mr-1 -z-[1] flex items-center justify-center text-center rounded-[50%]">
              <ArrowSmallRightIcon className="w-5 h-5 stroke-white fill-white z-10" />
            </div>
            {useTranslate('contactSecBtn')}
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default ContactData;
