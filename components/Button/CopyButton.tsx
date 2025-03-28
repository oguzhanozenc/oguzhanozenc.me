"use client";

import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import Button from "@/components/Button/Button";

type CopyButtonProps = {
  copyText: string;
  label?: string;
  className?: string;
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "pulsating"
    | ("default" | "outline" | "secondary" | "pulsating")[];
  size?: "sm" | "md" | "lg";
};

export default function CopyButton({
  copyText,
  label = "Copy",
  className = "",
  variant = "default",
  size = "md",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  // Dynamically set icon size based on the 'size' prop
  const iconSize = size === "sm" ? 16 : size === "lg" ? 24 : 18;
  const textSize =
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base";

  return (
    <Button
      onClick={handleCopy}
      variant={variant}
      size={size}
      className={className}
    >
      <span
        className={`flex items-center gap-2 ${textSize} ${
          copied ? "copied-animation" : ""
        }`}
      >
        {copied ? (
          <>
            <LuCopyCheck className="text-green-500" size={iconSize} />
            Copied!
          </>
        ) : (
          <>
            <LuCopy size={iconSize} />
            {label}
          </>
        )}
      </span>
    </Button>
  );
}
