type AboutItemProps = {
  children: React.ReactNode;
  className?: string;
};

export default function AboutItem({
  children,
  className = "",
}: AboutItemProps) {
  return <div className={`flex flex-col gap-1 ${className}`}>{children}</div>;
}
