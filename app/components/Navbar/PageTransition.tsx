"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-60 animate-pulse text-muted-foreground">
          Loading...
        </div>
      }
    >
      <div
        key={pathname}
        className="animate-fadeIn transition-opacity duration-500 ease-in-out"
      >
        {children}
      </div>
    </Suspense>
  );
}
