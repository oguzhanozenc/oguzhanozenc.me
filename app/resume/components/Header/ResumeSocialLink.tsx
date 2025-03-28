import { ReactNode } from "react";

type Props = {
  href: string;
  icon: ReactNode;
  children?: ReactNode;
};

export default function ResumeSocialLink({ href, icon, children }: Props) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm p-2 border border-[#e5e7eb] rounded text-[#373737] hover:bg-[#edebeb] hover:text-black transition-all"
      >
        {icon}
        {children && <span className="ml-1">{children}</span>}
      </a>
    </li>
  );
}
