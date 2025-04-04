import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ResumeSectionTitle({ children }: Props) {
  return (
    <h2
      className="text-[1.25rem] text-black p-0 mt-6 mb-2 font-bold"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {children}
    </h2>
  );
}
