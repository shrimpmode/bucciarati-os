"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

export type ApplicationIconProps = {
  src: string | StaticImageData;
  alt: string;
  onClick?: () => void;
};

export const ApplicationIcon = (props: ApplicationIconProps) => {
  const { src, alt, onClick } = props;
  const [animationClass, setAnimationClass] = useState("");

  const handleClick = () => {
    setAnimationClass("animate-bounce");
    onClick?.();
    setTimeout(() => {
      setAnimationClass("");
    }, 2000);
  };

  return (
    <div className={`${animationClass}`} onClick={handleClick}>
      <Image src={src} alt={alt} height={48} width={48} />
    </div>
  );
};
