"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";



const ScrollInView = ({ children }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // ${isInView ? 'opacity-1' : 'opacity-0'} ${isInView ? 'transform-none' : '-translate-Y-[0px] duration-900 ease-in-out'}

    return (
        <div ref={ref}>
            <span className={`block transition -translate-Y-[200px] duration-900 ${isInView ? 'opacity-1' : 'opacity-0'} ${isInView ? 'transform-none' : 'translate-Y-[200px]'}`}
                style={{
                    transform: isInView ? "none" : "translateY(200px)",
                    // transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}
            >
                {children}
            </span>
        </div>
    )
}
export default ScrollInView;