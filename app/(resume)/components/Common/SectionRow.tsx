import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SectionRow({ children }: Props) {
  return (
    <div className="flex flex-wrap justify-between items-center my-1 text-[0.9rem]">
      {children}
    </div>
  );
}
