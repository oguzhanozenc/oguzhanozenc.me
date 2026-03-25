import { ReactNode } from "react";

export default function Badge({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 text-xs font-bold text-gray-700 bg-transparent border border-gray-300 rounded-full transition-all duration-300  ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
