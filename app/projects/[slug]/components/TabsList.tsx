"use client";

type TabsListProps = {
  children: React.ReactNode;
};

export default function TabsList({ children }: TabsListProps) {
  return <div className="flex gap-2 mb-4 flex-wrap">{children}</div>;
}
