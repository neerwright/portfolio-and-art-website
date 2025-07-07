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
      <div className="p-8 flex justify-center "></div>
      <div className="py-2">
        <ProjectsContainer layout={l} search={s} />
      </div>
    </>
  );
}

export default ProjectsPage;
