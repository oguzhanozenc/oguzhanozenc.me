import { Badge } from "@/components/Badge";

type ProjectStackProps = {
  items: string[];
};

export default function ProjectStack({ items }: ProjectStackProps) {
  if (!items?.length) return null;

  return (
    <div className="mt-4">
      <p className="font-semibold mb-1">Stack:</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((tech, i) => (
          <Badge key={i}>{tech}</Badge>
        ))}
      </ul>
    </div>
  );
}
