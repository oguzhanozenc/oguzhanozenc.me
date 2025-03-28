"use client";

type TabsPanelProps = {
  value: string;
  activeTab: string;
  children: React.ReactNode;
};

export default function TabsPanel({
  value,
  activeTab,
  children,
}: TabsPanelProps) {
  return activeTab === value ? <div role="tabpanel">{children}</div> : null;
}
