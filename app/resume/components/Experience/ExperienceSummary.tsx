import { ReactNode } from "react";

export default function ExperienceSummary({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <span className="text-sm leading-snug block">{children}</span>
    </div>
  );
}
