import { ReactNode } from "react";

export default function EducationItemInstitution({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="text-sm font-semibold text-muted-foreground">{children}</p>
  );
}
