import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.jpg";

const Logo = ({
  width,
  height,
  className,
  logoImage,
}: {
  width?: number;
  height?: number;
  className?: string;
  logoImage?: string;
}) => {
  return (
    <Image
      src={logoImage || logo}
      alt=""
      width={width || 32}
      height={height || 32}
      className={`w-full h-full object-cover rounded-full ${className}`}
    />
  );
};

export default Logo;
