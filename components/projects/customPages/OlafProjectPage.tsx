import { ProjectProps } from "@/utils/types";
import ProjectHeader from "./ProjectHeader";
import ProjectFeatures from "./ProjectFeatures";
import ProjectGoals from "./ProjectGoals";
import ProjectFooter from "./ProjectFooter";
import { Separator } from "@/components/ui/separator";
import { FaGoogleDrive } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function OlafProjectPage({
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
      ></ProjectFeatures>

      <section>
        <Separator className="bg-sky-400"></Separator>
        <div className="felx flex-col ">
          <p className="text-4xl mt-5 items-center justify-center flex">
            Files
          </p>
          <p className="mt-5">
            For this game I composed a little synthwave song, you can listen to:
          </p>

          <iframe
            width="100%"
            height="300"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2122890555&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <div
            style={{
              color: "#cccccc",

              overflow: "hidden",
            }}
          >
            <a
              href="https://soundcloud.com/rene-plattner-300687568"
              title="Rene Plattner"
              target="_blank"
              style={{ color: "#cccccc" }}
            >
              Rene Plattner
            </a>{" "}
            ·{" "}
            <a
              href="https://soundcloud.com/rene-plattner-300687568/olafs-synthwave"
              title="Olaf&#x27;s Synthwave"
              target="_blank"
            >
              Olaf&#x27;s Synthwave
            </a>
          </div>

          <div className="flex flex-col   justify-center items-center mt-5">
            <p>You can play a special version of the game here:</p>
            <Button asChild>
              <Link
                href={
                  "https://drive.google.com/file/d/1F40QXUTa2SodukXMK58GUN9Ux48CBGfx/view?usp=drive_link"
                }
                className="w-fit"
              >
                <FaGoogleDrive />
                Download
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ProjectGoals goals={goals}></ProjectGoals>

      <ProjectFooter techArray={techArray}></ProjectFooter>
    </div>
  );
}
export default OlafProjectPage;
