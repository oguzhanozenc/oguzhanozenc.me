import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function SectionDate({ children }: Props) {
  return <p className="text-[0.9rem]">{children}</p>;
}
