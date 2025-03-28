import { RecentProjects } from "@/components/RecentProjects/";
import { SectionTitle } from "@/components/SectionTitle/";

export default function RecentProjectsPage() {
  return (
    <section className="flex flex-col container mx-auto py-16 max-sm:py-8 max-sm:px-4 md:px-12 gap-4">
      <SectionTitle>Projects</SectionTitle>
      <RecentProjects />
    </section>
  );
}
