import { ReactNode } from "react";

export default function ResumePhoto({ children }: { children: ReactNode }) {
  return <div className="flex justify-center items-center">{children}</div>;
}
