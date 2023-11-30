"use client";

import { motion } from "framer-motion";
import AnimatedTitle from "../../AnimatedTitle";
import NextImage from "../../NextImage";

const GoalData = ({ data }) => {

  return (
    <div className="text-left py-10">
      {data?.map((item, index) => (
        <motion.div
          key={index}
          className="mb-10"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex mb-2">
            <div className="bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] text-white mr-6 flex h-[50px] w-full max-w-[50px] items-center justify-center overflow-hidden rounded-[15px] p-2">
              <NextImage src={item?.ImageUrl} alt={item?.Name} width={50} height={50} />
            </div>
            <AnimatedTitle
              title={item?.Name}
              className="text-primary text-2xl md:text-3xl font-bold mb-2 mt-3"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-[17px] text-black"
          >
            <div dangerouslySetInnerHTML={{ __html: item?.DescriptionLong }} />
          </motion.div>
        </motion.div>
      ))}
    </div>
    // <div className="text-left py-20">
    //   {data.title1 && (
    //     <motion.div
    //       className="mb-10"
    //       initial={{ opacity: 0, x: -80 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 1 }}>
    //       <AnimatedTitle
    //         title={data.title1}
    //         className="text-primary text-[40px] font-bold mb-5 -mt-3"
    //       />
    //       <motion.p
    //         initial={{ opacity: 0, x: -80 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{ duration: 1 }}
    //         className="text-[17px] text-black"
    //       >
    //         {data.desc1}
    //       </motion.p>
    //     </motion.div>
    //   )}
    //   {data.title2 && (
    //     <motion.div
    //       className="mb-10"
    //       initial={{ opacity: 0, x: -80 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 1 }}
    //     >
    //       <div className="flex gap-2 items-center mb-2">
    //         <div className="w-[40px] h-[40px] bg-primary flex items-center justify-center text-center rounded-[50%]">
    //           <EyeIcon className="w-5 h-5 fill-white stroke-white" />
    //         </div>
    //         <AnimatedTitle
    //           title={data.title2}
    //           className="text-black text-[20px] font-bold"
    //         />
    //       </div>
    //       <motion.p
    //         initial={{ opacity: 0, x: -80 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{
    //           ease: "easeInOut",
    //           duration: 1,
    //           delay: 1,
    //         }}
    //         className="text-[17px] text-black"
    //       >
    //         {data.desc2}
    //       </motion.p>
    //     </motion.div>
    //   )}
    //   {data.title3 && (
    //     <motion.div
    //       className="mb-10"
    //       initial={{ opacity: 0, x: -80 }}
    //       whileInView={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 1 }}
    //     >
    //       <div className="flex gap-2 items-center mb-2">
    //         <div className="w-[40px] h-[40px] bg-primary flex items-center justify-center text-center rounded-[50%]">
    //           <Cog8ToothIcon className="w-5 h-5 fill-white stroke-white" />
    //         </div>
    //         <AnimatedTitle
    //           title={data.title3}
    //           className="text-black text-[20px] font-bold"
    //         />
    //       </div>
    //       <motion.p
    //         initial={{ opacity: 0, x: -80 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         transition={{
    //           ease: "easeInOut",
    //           duration: 1,
    //           delay: 1,
    //         }}
    //         className="text-[17px] text-black"
    //       >
    //         {data.desc3}
    //       </motion.p>
    //     </motion.div>
    //   )}
    // </div>
  );
};
export default GoalData;
