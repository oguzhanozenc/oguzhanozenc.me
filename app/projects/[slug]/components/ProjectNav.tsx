import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { RiArrowGoBackFill, RiArrowRightUpLine } from "react-icons/ri";

type ProjectNavProps = {
  slug: string;
  projects: Array<{ slug: string }>;
};

export default function ProjectNav({ slug, projects }: ProjectNavProps) {
  const router = useRouter();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject =
    projects.length > 1 ? projects[(currentIndex + 1) % projects.length] : null;

  return (
    <div className="flex flex-wrap flex-row justify-between items-start sm:items-center gap-4 mb-12">
      <Button
        onClick={() =>
          history.length > 1 ? router.back() : router.push("/projects")
        }
      >
        <RiArrowGoBackFill /> Go Back
      </Button>

      {nextProject && (
        <Button onClick={() => router.push(`/projects/${nextProject.slug}`)}>
          Next Project <RiArrowRightUpLine />
        </Button>
      )}
    </div>
  );
}
