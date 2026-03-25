import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string | null; // optional
  external?: boolean;
  ariaLabel?: string;
  className?: string;
};

const isExternal = (url: string) => /^https?:\/\//i.test(url || "");

export default function ExperienceItemTitle({
  children,
  href,
  external,
  ariaLabel,
  className = "",
}: Props) {
  const base =
    "text-[1rem] font-semibold py-1 my-1 " +
    "text-[#111827] visited:text-[#111827] hover:text-[#111827] " +
    "underline decoration-transparent hover:decoration-current transition-[text-decoration-color] " +
    className;

  const cleanHref = href || undefined;

  if (!cleanHref) {
    return <p className={base}>{children}</p>;
  }

  const out = typeof external === "boolean" ? external : isExternal(cleanHref);

  return out ? (
    <a
      href={cleanHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={base}
    >
      {children}
    </a>
  ) : (
    <Link href={cleanHref} aria-label={ariaLabel} className={base}>
      {children}
    </Link>
  );
}
