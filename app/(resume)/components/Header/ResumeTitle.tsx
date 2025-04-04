import { ReactNode } from "react";

export default function ResumeTitle({ children }: { children: ReactNode }) {
  return <p className="text-[#333] m-0">{children}</p>;
}
