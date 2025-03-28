import clsx from "clsx";
import { ReactNode } from "react";

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "flex flex-col bg-white rounded-2xl border border-gray-200 shadow-xs px-8 py-16 max-sm:p-4 text-center",
        className
      )}
    >
      {children}
    </div>
  );
}
