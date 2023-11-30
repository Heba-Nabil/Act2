"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import PlaceholderImg from "/public/images/act-logo-transperent.svg";

const NextImage = (props) => {
  const { src, alt, width, height, className, ...other } = props;

  const [isLoading, setIsLoading] = useState(true);

  return (
    <Image
      src={src ? src : PlaceholderImg}
      alt={alt}
      width={width}
      height={height}
      className={clsx(className, {
        // "grayscale blur-2xl scale-110": isLoading,
        // "grayscale-0 blur-0 scale-100": !isLoading,
      })}
      onLoadingComplete={() => setIsLoading(false)}
      placeholder="blur"
      blurDataURL={`${PlaceholderImg}`}
      {...other}
    />
  );
};

export default NextImage;
