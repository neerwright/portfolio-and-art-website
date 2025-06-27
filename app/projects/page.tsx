import TSIcon from "@/components/icons/TSicon";
import ProjectsContainer from "@/components/projects/ProjectsContainer";

async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) {
  const { search, layout } = await searchParams;
  const l = layout || "grid";
  const s = search || "";
  return (
    <>
      <div className="p-8 flex justify-center ">
        <p className="text-3xl py-3">Projects</p>
      </div>
      <div className="py-2">
        <ProjectsContainer layout={l} search={s} />
      </div>
    </>
  );
}

export default ProjectsPage;
