import { ReactNode } from "react";

export default function ResumeSocialLinks({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ul className="flex flex-wrap items-center gap-1 mt-2 p-0 list-none">
      {children}
    </ul>
  );
}
