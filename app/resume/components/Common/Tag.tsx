import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Tag({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-block text-[0.85rem] px-2 py-1 rounded ${className}`}
    >
      {children}
    </span>
  );
}