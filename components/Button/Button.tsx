import { ReactNode } from "react";
import clsx from "clsx";
import "@/styles/Button.css";

type Variant = "default" | "outline" | "secondary" | "pulsating";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  children?: ReactNode;
  loadingChildren?: ReactNode;
  onClick?: () => void;
  variant?: Variant | Variant[];
  size?: Size;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "default",
  size = "md",
  className = "",
  disabled = false,
  isLoading = false,
}: ButtonProps) {
  const variantArray = Array.isArray(variant) ? variant : [variant];

  const combinedClass = clsx(
    "btn",
    variantArray.map((v) => `btn--${v}`),
    `btn--${size}`,
    className,
    disabled && "btn--disabled"
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClass}
      disabled={disabled || isLoading}
    >
      {children}
    </button>
  );
}
