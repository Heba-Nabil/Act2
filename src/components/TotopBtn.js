"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

const TotopBtn = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    // This function will scroll the window to the top 
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

    return (
        <div className="fixed bottom-3 right-3 z-10">
            {showButton && (
                <button onClick={scrollToTop} className="back-to-top bg-primary p-3 rounded-full">
                    <ArrowUpIcon className="w-5 h-5 stroke-white fill-white z-10" />
                </button>
            )}
        </div>

    )
}
export default TotopBtn;