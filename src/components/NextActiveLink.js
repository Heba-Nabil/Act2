"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cn from "@/utils/cn";

const NextActiveLink = (props) => {
  const { href, className = "", activeClass = "", children, ...other } = props;

  const pathname = usePathname();

  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      const linkPathname = new URL(href, location.href).pathname;
      const activePathname = new URL(pathname, location.href).pathname;

      setActive(linkPathname === activePathname);
    }
  }, [pathname, active]);

  return (
    <Link
      href={href}
      className={cn(className, {
        [activeClass]: active,
      })}
      {...other}
    >
      {children}
    </Link>
  );
};

export default NextActiveLink;
