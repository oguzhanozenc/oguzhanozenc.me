import { ReactNode } from "react";

export default function ProjectsGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-4 gap-[0.5rem] max-sm:grid-cols-1">
      {children}
    </div>
  );
}
