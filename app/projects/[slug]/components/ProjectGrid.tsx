type ProjectGridProps = {
  children: React.ReactNode;
  columns?: 1 | 2 | 3;
};

export default function ProjectGrid({
  children,
  columns = 2,
}: ProjectGridProps) {
  const gridCols =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
      ? "grid-cols-1 lg:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return <div className={`grid gap-6 m-2 ${gridCols}`}>{children}</div>;
}
