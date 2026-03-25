import { ReactNode } from "react";

export default function EducationItemTitle({
  children,
}: {
  children: ReactNode;
}) {
  return <h4 className="text-base font-medium text-foreground">{children}</h4>;
}
