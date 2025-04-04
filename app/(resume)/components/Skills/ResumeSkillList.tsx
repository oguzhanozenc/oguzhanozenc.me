import { ReactNode } from "react";

export default function ResumeSkillList({ children }: { children: ReactNode }) {
  return <ul className="flex flex-wrap m-0 p-0 list-none">{children}</ul>;
}
