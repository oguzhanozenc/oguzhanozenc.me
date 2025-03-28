import { ReactNode } from "react";

export default function ExperienceItemTitle({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="text-[1rem] font-semibold text-[#111827] py-1 my-1">
      {children}
    </p>
  );
}
