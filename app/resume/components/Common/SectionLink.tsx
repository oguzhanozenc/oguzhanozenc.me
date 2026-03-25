import { ReactNode } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

type Props = {
  href: string;
  children: ReactNode;
};

export default function SectionLink({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black no-underline px-1 rounded hover:underline"
    >
      {children} <HiOutlineExternalLink className="inline-block" />
    </a>
  );
}
