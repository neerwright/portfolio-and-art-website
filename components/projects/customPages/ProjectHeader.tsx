import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import TextToIcons from "../TextToIcons";

function ProjectHeader({
  title,
  tech,
  video,
  github,
}: {
  title: string;
  tech: string;
  video: string;
  github: string;
}) {
  return (
    <section className="">
      <div className="flex flex-col justify-center items-center ">
        <p className="sm:text-6xl sm:mt-5 mb-5 text-center  text-3xl  sm:px-3 px-15 font-bold max-w-screen">
          {title}
        </p>
        <div className="flex max-w-100 sm:max-w-screen">
          <TextToIcons techs={tech} />
        </div>
        <iframe
          className="mt-5 "
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <Button asChild className="mt-2 w-full">
          <Link
            className="text
          -sky-400"
            href={github}
          >
            <FaGithub></FaGithub> github
          </Link>
        </Button>
      </div>
    </section>
  );
}
export default ProjectHeader;
