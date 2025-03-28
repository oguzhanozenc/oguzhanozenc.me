"use client";

import { ReactNode } from "react";

export default function Avatar({ children }: { children: ReactNode }) {
  return <div className="relative">{children}</div>;
}
