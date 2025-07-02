import DefaultPage from "@/components/projects/customPages/DefaultPage";
import customProjectPageRouter from "@/components/projects/customPages/CustomProjectPageRouter";
import { fetchSingleProject } from "@/utils/actions";

async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const p = await params;
  const product = await fetchSingleProject(p.id);
  const {
    title,
    tech,
    texthighlights,
    imagehighlights,
    video,
    description,
    goals,
    github,
  } = product;

  const customPage = customProjectPageRouter({
    title,
    tech,
    texthighlights,
    imagehighlights,
    video,
    description,
    goals,
    github,
  });

  return (
    <>
      {customPage ? (
        customPage
      ) : (
        <DefaultPage
          title={title}
          tech={tech}
          texthighlights={texthighlights}
          imagehighlights={imagehighlights}
          video={video}
          description={description}
          goals={goals}
          github={github}
        />
      )}
    </>
  );
}
export default ProjectPage;
