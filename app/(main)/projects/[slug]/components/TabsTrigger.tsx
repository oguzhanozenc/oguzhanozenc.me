import clsx from "clsx";

type TabsTriggerProps = {
  value: string;
  activeTab: string;
  setActiveTab: (value: string) => void;
  children: React.ReactNode;
};

export default function TabsTrigger({
  value,
  children,
  activeTab,
  setActiveTab,
}: TabsTriggerProps) {
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={clsx(
        "px-4 py-2 text-sm font-medium rounded-md transition-colors",
        activeTab === value
          ? "bg-black text-white"
          : "bg-white text-black border border-gray-200 hover:bg-gray-100"
      )}
      aria-selected={activeTab === value}
      role="tab"
    >
      {children}
    </button>
  );
}
