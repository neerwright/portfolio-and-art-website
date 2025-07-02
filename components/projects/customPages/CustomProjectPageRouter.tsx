import OlafProjectPage from "./OlafProjectPage";
import ScootProjectPage from "./ScootProjectPage";
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
    case "Game Jam @Uni Tübingen - Olaf's Room Adventure":
      return (
        <OlafProjectPage
          title={title}
          tech={tech}
          texthighlights={texthighlights}
          imagehighlights={imagehighlights}
          video={video}
          description={description}
          goals={goals}
          github={github}
        ></OlafProjectPage>
      );

    case "Scoot Scoot Fly":
      return (
        <ScootProjectPage
          title={title}
          tech={tech}
          texthighlights={texthighlights}
          imagehighlights={imagehighlights}
          video={video}
          description={description}
          goals={goals}
          github={github}
        ></ScootProjectPage>
      );

    default:
      return false;
  }
}
