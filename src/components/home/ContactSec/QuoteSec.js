"use client";
import { motion } from "framer-motion";
import AnimatedTitle from "../../AnimatedTitle";
import QuoteForm from "./QuoteForm";

const QuoteSec = ({locale, data }) => {
    return (
        <div className='text-center md:px-10' id='quote'>
            <AnimatedTitle title={data?.Name} className='text-primary text-2xl md:text-4xl mb-5' />
            <motion.p
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-[17px] text-black"
            >
                {data?.DescriptionShort}
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='text-[17px] text-black'>
                <QuoteForm locale={locale}/>
            </motion.div>
        </div>
    )
}
export default QuoteSec;