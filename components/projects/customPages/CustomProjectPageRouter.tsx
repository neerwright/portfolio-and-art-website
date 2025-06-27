import TestPage from "./TestPage";
import { ProjectProps } from "@/utils/types";
export default function CustomProjectPageRouter({
  title,
  tech,
  texthighlights,
  imagehighlights,
  video,
  description,
  goals,
  github,
}: ProjectProps) {
  switch (title) {
    case "TTest Project":
      return <TestPage title={title}
        tech={tech}
        texthighlights={texthighlights}
        imagehighlights={imagehighlights}
        video={video}
        description={description}
        goals={goals}
        github={github}></TestPage>;
    default:
      return false;
  }
}
