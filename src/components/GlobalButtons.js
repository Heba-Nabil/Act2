import cn from "@/utils/cn";
import Link from "next/link";

export const Buttons = ({ link, children, className, ...other }) => {
  return (
    <button
      className={cn(" text-white bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] border border-white hover:bg-none hover:bg-white hover:text-primary hover:border hover:border-primary w-full rounded-[34px]  p-3", className)}
      {...other}
    >
      {children}
    </button>
  );
};
export const GlobalLinks = ({ link, children, className, ...other }) => {
  return (
    <Link
      href={link}
      className={cn("font-SemiboldFont cursor-pointer  whitespace-nowrap inline-flex items-center justify-center px-10 py-2 border border-white rounded-[24px] shadow-sm text-base font-medium text-white bg-gradient-to-r from-[#1f5534] via-[#287344] to-[#18d28d] hover:bg-none hover:bg-white hover:text-primary hover:border hover:border-primary", className)}
      {...other}
    >
      {children}
    </Link>
  );
};
