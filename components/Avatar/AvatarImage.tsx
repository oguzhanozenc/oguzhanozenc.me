"use client";

import clsx from "clsx";
import Image from "next/image";

type AvatarImageProps = {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
  className?: string;
};

export default function AvatarImage({
  src,
  alt,
  size = "medium",
  className,
}: AvatarImageProps) {
  const wrapperSizes = {
    small: "max-sm:w-[160px] sm:w-32 md:w-36 lg:w-40",
    medium: "max-sm:w-[200px] sm:w-40 md:w-48 lg:w-[280px]",
    large: "max-sm:w-[240px] sm:w-48 md:w-56 lg:w-[320px]",
  };

  return (
    <div
      className={clsx(
        "relative text-center p-4 rounded-full shadow-lg bg-white overflow-hidden",
        "bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,180,170,0.13)_0,rgba(0,180,170,0)_50%,rgba(0,180,170,0)_100%)]",
        wrapperSizes[size],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={250}
        height={250}
        className={clsx(
          "rounded-full object-cover aspect-square bg-[#f3f3f1]",
          "shadow-[rgba(10,10,10,0.06)_0px_1.2px_1.2px_0px,rgba(10,10,10,0.04)_0px_5px_10px_0px]",
          "transition-all duration-300 ease-in-out"
        )}
        priority
      />
    </div>
  );
}
