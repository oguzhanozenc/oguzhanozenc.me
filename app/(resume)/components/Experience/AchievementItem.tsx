import { ReactNode } from "react";
import TextBlock from "@/app/(resume)/components/Common/TextBlock";

export default function AchievementItem({ children }: { children: ReactNode }) {
  return (
    <div className="text-sm text-[#444] leading-snug mb-1">
      <TextBlock>
        <span className="font-semibold text-[#111827] mr-1">Achievements:</span>
        {children}
      </TextBlock>
    </div>
  );
}
