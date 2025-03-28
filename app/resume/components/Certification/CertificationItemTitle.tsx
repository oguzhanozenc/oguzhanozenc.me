import { ReactNode } from "react";

export default function CertificationItemTitle({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p
      className="my-2 text-[0.9rem] text-justify font-bold"
      style={{ fontFamily: "var(--font-sfmono)" }}
    >
      {children}
    </p>
  );
}
