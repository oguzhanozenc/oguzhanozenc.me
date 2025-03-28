"use client";

import { ReactNode, ElementType } from "react";
import clsx from "clsx";

type SectionTitleProps = {
  children: ReactNode;
  size?: "small" | "medium" | "large";
  align?: "left" | "center" | "right";
  as?: ElementType;
  className?: string;
};

export default function SectionTitle({
  children,
  size = "large",
  align = "left",
  as: Tag = "h2",
  className,
}: SectionTitleProps) {
  const sizeClasses = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-4xl",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <Tag
      className={clsx(
        "mb-4 font-semibold text-[#373737] tracking-tight",
        sizeClasses[size],
        alignClasses[align],
        className
      )}
    >
      {children}
    </Tag>
  );
}
