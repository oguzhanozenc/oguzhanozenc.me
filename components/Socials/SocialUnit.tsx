import { ReactNode } from "react";

type SocialUnitProps = {
  href: string;
  children: ReactNode;
  label: string;
};

export default function SocialUnit({ href, children, label }: SocialUnitProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center w-8 h-8 rounded-full bg-white transition-all duration-300 hover:bg-gray-100"
    >
      <p className="text-gray-600 text-base hover:text-black">{children}</p>
    </a>
  );
}
