import { ReactNode } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

type Props = {
  href: string;
  children: ReactNode;
};

export default function ProjectItemTitle({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[1rem] font-semibold text-[#111827] transition-all duration-300 hover:underline"
    >
      {children} <HiOutlineExternalLink className="inline-block" />
    </a>
  );
}
