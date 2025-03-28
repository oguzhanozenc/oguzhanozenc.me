import { ReactNode } from "react";

export default function ResumeLocation({ children }: { children: ReactNode }) {
  return (
    <div className="text-[0.75rem] text-[#666] font-mono">
      <p className="hover:underline transition-all duration-300">{children}</p>
    </div>
  );
}
