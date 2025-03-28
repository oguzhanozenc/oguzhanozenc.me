import { ReactNode } from "react";
import clsx from "clsx";

type SocialLinksProps = {
  children: ReactNode;
  className?: string;
};

export default function SocialLinks({
  children,
  className = "",
}: SocialLinksProps) {
  return (
    <div className={clsx("socialmedia--container", className)}>{children}</div>
  );
}
