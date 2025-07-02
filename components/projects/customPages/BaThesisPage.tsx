import { ProjectProps } from "@/utils/types";
import ProjectHeader from "./ProjectHeader";
import ProjectFeatures from "./ProjectFeatures";
import ProjectGoals from "./ProjectGoals";
import ProjectFooter from "./ProjectFooter";

function BaThesisPage({
  title,
  tech,
  texthighlights,
  imagehighlights,
  video,
  description,
  goals,
  github,
}: ProjectProps) {
  const techArray = tech.split(",");
  return (
    <div className="p-8 flex justify-center items-center flex-col mt-12">
      <ProjectHeader
        title={title}
        tech={tech}
        video={video}
        github={github}
      ></ProjectHeader>

      <ProjectFeatures
        texthighlights={texthighlights}
        imagehighlights={imagehighlights}
        title={title}
        width={300}
        height={300}
      ></ProjectFeatures>

      <ProjectGoals goals={goals}></ProjectGoals>

      <ProjectFooter techArray={techArray}></ProjectFooter>
    </div>
  );
}
export default BaThesisPage;
