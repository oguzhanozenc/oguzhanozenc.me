import { ReactNode } from "react";

export default function ResumeName({ children }: { children: ReactNode }) {
  return (
    <h1
      className="text-[1.5rem] font-bold m-0"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {children}
    </h1>
  );
}
