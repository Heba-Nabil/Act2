"use client";

import ProductItem from "./ProductItem";
import ProductDesc from "./ProductDesc";
import { motion } from "framer-motion";

const ProductSec = ({ data, content }) => {

    return (
        <section className='relative overflow-hidden bg-[#e3e3e3] py-20'>
            
            <div className="container px-10 lg:px-20 pb-10 mx-auto">
                <ProductDesc data={data} />
            </div>
            <motion.div
                className="container px-5 lg:px-20 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6"
                initial={{ opacity: 0, y: 310 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
            >

                {content?.map((item, index) => (
                    <ProductItem item={item} key={index} />
                ))}
            </motion.div>
        </section>
    )
}
export default ProductSec;