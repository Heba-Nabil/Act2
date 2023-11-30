"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
// import { cn } from "@/utils";
// import { HomeIcon } from "lucide-react";

const Breadcrumbs = ({ crumbs }) => {
  const pathname = usePathname();


  return (
    <nav
      aria-label="breadcrumb"
      role="presentation"
      className="w-full p-1 text-white bg-[#218d60] -mt-2 md:mt-0"
    >
      <div className="flex items-center justify-end pr-5 md:mr-10 space-x-[1px]">
        {/* <HomeIcon className="w-4 h-4" /> */}
        {crumbs?.map((item, index) => (
          <div key={index} className="flex text-sm md:text-md items-center">
            {index !== 0 && (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1rem"
                width="1rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
            )}

            {index === crumbs.length - 1 ? (
              <p>{item?.title} </p>
            ) : (
              <Link
                href={item.href}
                className="capitalize px-1 hover:underline text-white"
              >
                {item.title}
              </Link>
            )}
          </div>

          // <div key={index} className="flex text-sm md:text-md items-center">
          //   {index !== 0 && (
          //     <svg
          //       stroke="currentColor"
          //       fill="currentColor"
          //       strokeWidth="0"
          //       viewBox="0 0 24 24"
          //       height="1rem"
          //       width="1rem"
          //       xmlns="http://www.w3.org/2000/svg"
          //     >
          //       <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
          //     </svg>
          //   )}
          //   <Link
          //     href={item.href}
          //     className="capitalize px-1 hover:underline"
          //   >
          //     {item.title}
          //   </Link>
          // </div>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
