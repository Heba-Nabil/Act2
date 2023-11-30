"use client";

import { useState } from "react";
import Odometer from "react-odometerjs";
import {motion} from "framer-motion"
import "odometer/themes/odometer-theme-default.css";

const Counter = (props) => {
  const { value, duration = 5000, ...other } = props;

  const [counterVal, setCounterVal] = useState(0);

  return (
    <motion.div
      onViewportEnter={() => setCounterVal(value)}
      onViewportLeave={() => setCounterVal(0)}
    >
   <span style={{ fontFamily: 'sans-serif' , fontWeight: "bold" }} className="text-primary text-3xl md:text-6xl md:relative md:top-[20px] md:mt-4">+</span>   <Odometer value={counterVal} duration={duration} format="d" {...other} style={{ fontFamily: 'sans-serif' , fontWeight: "bold" }} className="text-primary text-3xl md:text-6xl h-[50px] md:h-[70px]" />
    </motion.div>
  );
};

export default Counter;
