import { ReactNode } from "react";

export default function EducationItemInstitution({
  children,
}: {
  children: ReactNode;
}) {
  return <p className="text-[1rem] font-semibold">{children}</p>;
}
