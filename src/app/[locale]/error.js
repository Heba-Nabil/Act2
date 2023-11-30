"use client";

import Link from "next/link"
import { useContext } from "react";
import { ResourcesContext } from "@/contexts/DataContext";


const Error = ({ error, reset }) => {
    const { useTranslate } = useContext(ResourcesContext)
    return (
        <section className='relative h-[100vh] overflow-hidden bg-[#e3e3e3] py-20 flex justify-center'>
            <div className="container px-10 lg:px-20 pb-10 mx-auto text-center flex items-center justify-center">
                <div>
                    <h2 className="mb-2 text-[50px] font-bold leading-none text-primary sm:text-[80px] md:text-[100px]">
                        500
                    </h2>
                    <h4 className="mb-3 text-[22px] font-semibold leading-tight">
                        Oops! Something went wrong
                    </h4>
                    <p className="mb-8 text-lg">
                        Internal Server Error
                    </p>
                    <Link
                        href="/"
                        className="cursor-pointer whitespace-nowrap inline-flex items-center justify-center px-10 py-2 border border-transparent rounded-[24px] shadow-sm text-base font-medium text-white bg-primary hover:bg-white hover:text-primary hover:border-primary"
                    >
                        {useTranslate('backtoHomePage')}
                    </Link>
                </div>
            </div>
        </section>
    )
}
export default Error;