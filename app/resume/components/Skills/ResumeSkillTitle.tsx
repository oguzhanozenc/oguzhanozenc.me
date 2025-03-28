import { ReactNode } from "react";

export default function ResumeSkillTitle({
  children,
}: {
  children: ReactNode;
}) {
  return <p className="font-semibold text-[0.875rem] my-1 p-0">{children}:</p>;
}
