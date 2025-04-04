type ProjectCardProps = {
  title?: string;
  children: React.ReactNode;
};

export default function ProjectCard({ title, children }: ProjectCardProps) {
  return (
    <div className="bg-white border border-[rgb(230,230,230)] rounded-[0.75rem] p-6 text-justify">
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
}
