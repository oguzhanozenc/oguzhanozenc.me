import { ReactNode } from "react";

export default function EducationItemCourses({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p
      className="text-[0.7rem] text-[#666]"
      style={{ fontFamily: "var(--font-sfmono)" }}
    >
      {children}
    </p>
  );
}
