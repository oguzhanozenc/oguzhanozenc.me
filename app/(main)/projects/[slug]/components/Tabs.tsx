type TabsProps = {
  children: React.ReactNode;
};

export default function Tabs({ children }: TabsProps) {
  return <div className="w-full">{children}</div>;
}
