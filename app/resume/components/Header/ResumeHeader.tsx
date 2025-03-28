import { ReactNode } from "react";

export default function ResumeHeader({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-row justify-between items-center flex-wrap-reverse gap-4">
      {children}
    </div>
  );
}
