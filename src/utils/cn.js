import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";

// Merge classes
const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export default cn;