import { ReactNode } from "react";

export default function ResumeSkillGroup({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div
      className="flex flex-row flex-wrap gap-x-[0.25rem] items-center"
      style={{ fontFamily: "var(--font-sfmono)" }}
    >
      {children}
    </div>
  );
}
