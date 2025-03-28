"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

type ProjectCardProps = {
  title: string;
  slug: string;
  featuredText: string;
  featuredimg: string;
  featuredimgMobile: string;
  enableHover?: boolean;
  maxLength?: number;
};

export default function ProjectCard({
  title,
  slug,
  featuredText,
  featuredimg,
  featuredimgMobile,
  enableHover = true,
  maxLength = 150,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const isHovered = enableHover && hovered;

  function truncateText(text: string, max: number): string {
    if (text.length <= max) return text;
    const trimmed = text.slice(0, max);
    const lastSpace = trimmed.lastIndexOf(" ");
    return trimmed.slice(0, lastSpace) + "...";
  }

  return (
    <div
      className={clsx(
        "relative w-full h-[14rem] flex flex-col items-stretch text-justify bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out",
        isHovered && "transform -translate-y-[5px]"
      )}
      style={{
        boxShadow: isHovered
          ? "#0a0a0a0f 0 1.2px 1.2px, #0a0a0a0a 0 5px 10px"
          : undefined,
      }}
      onMouseEnter={() => enableHover && setHovered(true)}
      onMouseLeave={() => enableHover && setHovered(false)}
    >
      <Link href={`/projects/${slug}`} className="h-full w-full">
        <div className="relative flex flex-col justify-between h-full p-5 text-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

          <p
            className={clsx(
              "text-sm leading-5 transition-opacity duration-300 ease-in-out ",
              isHovered ? "opacity-0" : "opacity-100"
            )}
          >
            {truncateText(featuredText, maxLength)}
          </p>

          <div
            className={clsx(
              "relative grid grid-cols-[75%_25%] w-full h-[10rem] transition-all duration-300 ease-in-out",
              isHovered
                ? "clip-path-[inset(0_0_0_0)] transform -translate-y-[45%] opacity-100"
                : "opacity-100"
            )}
          >
            <div className="col-span-1">
              <Image
                src={featuredimg}
                alt={title}
                width={500}
                height={300}
                className="w-full h-auto object-cover rounded-lg transition-all duration-300"
                priority
              />
            </div>

            <div className="col-span-1 flex justify-end">
              <Image
                src={featuredimgMobile}
                alt={`${title} mobile`}
                width={120}
                height={120}
                className="h-auto w-auto max-w-[80px] md:max-w-[100px] rounded-lg transition-all duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
