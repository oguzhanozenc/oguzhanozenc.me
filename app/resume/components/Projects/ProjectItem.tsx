import { ReactNode } from "react";

export default function ProjectItem({ children }: { children: ReactNode }) {
  return (
    <div className="border border-[#e5e7eb] rounded-md p-2 flex flex-col items-stretch">
      {children}
    </div>
  );
}
