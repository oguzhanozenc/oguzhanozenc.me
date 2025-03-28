"use client";

import clsx from "clsx";
import { ReactNode } from "react";

export default function AvatarBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "absolute top-0 right-0 translate-x-[30%] translate-y-[50%]",
        className
      )}
    >
      <p
        className={clsx(
          "flex items-center px-2 py-1 text-xs font-bold text-green-700",
          "bg-green-100 border border-green-500 rounded-full",
          "transition-all duration-300 hover:text-[#28c780]"
        )}
      >
        {children}
      </p>
    </div>
  );
}
