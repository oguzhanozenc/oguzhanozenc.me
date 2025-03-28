import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function TextBlock({ children }: Props) {
  return (
    <p
      className="text-[0.9rem] text-justify leading-relaxed"
      style={{ fontFamily: "var(--font-sfmono)" }}
    >
      {children}
    </p>
  );
}
