"use client";

import { useContext } from "react";
import { ResourcesContext } from "@/contexts/DataContext";
import AnimatedTitle from "../AnimatedTitle";

const ServicesTitle = () => {
  const { useTranslate } = useContext(ResourcesContext);

  return (
  
    <div className="px-4 xl:px-0 py-5 md:py-10">
            <AnimatedTitle
              title={`${useTranslate("ourServices")}`}
              className='text-primary text-2xl md:text-4xl text-center'
            />
          </div>

  );
};
export default ServicesTitle;
