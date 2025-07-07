import { ProjectProps } from "@/utils/types";
import ProjectHeader from "./ProjectHeader";
import ProjectFeatures from "./ProjectFeatures";
import ProjectGoals from "./ProjectGoals";
import ProjectFooter from "./ProjectFooter";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGamepad } from "react-icons/fa";

function ScootProjectPage({
  title,
  tech,
  texthighlights,
  imagehighlights,
  video,
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

      <div className="flex flex-col   justify-center items-center mt-5">
        <Button asChild>
          <Link
            href={"https://neerrene.itch.io/scoot-scoot-fly"}
            className="w-fit"
          >
            <FaGamepad />
            play the game here!
          </Link>
        </Button>
      </div>

      <ProjectFeatures
        texthighlights={texthighlights}
        imagehighlights={imagehighlights}
        title={title}
      ></ProjectFeatures>

      <ProjectGoals goals={goals}></ProjectGoals>

      <ProjectFooter techArray={techArray}></ProjectFooter>
    </div>
  );
}
export default ScootProjectPage;
