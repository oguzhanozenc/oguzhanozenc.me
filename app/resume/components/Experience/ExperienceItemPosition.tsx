import { ReactNode } from "react";

export default function ExperienceItemPosition({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p
      className="text-[#030712] font-semibold my-1 text-[0.9rem] text-justify"
    >
      {children}
    </p>
  );
}
