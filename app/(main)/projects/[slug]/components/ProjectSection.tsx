type ProjectSectionProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function ProjectSection({
  title,
  children,
  className = "",
}: ProjectSectionProps) {
  return (
    <section className={`mb-16 ${className}`}>
      {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
      {children}
    </section>
  );
}
