import { ProjectProps } from "@/utils/types";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import TextToIcons from "../TextToIcons";

function DefaultPage({
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
    <div className="p-8 mt-4 flex justify-center items-center flex-col">
      <section className="">
        <div className="">
          <p className="text-6xl mb-5">{title}</p>
          <TextToIcons techs={tech} />
          <iframe
            className="mt-5"
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

      <section className="py-6 mt-5 flex flex-col justify-center items-center">
        <Separator className="bg-sky-300" />
        <p className="mt-5 text-4xl">Key Features</p>
        <div className="mt-5">
          {texthighlights.map((text, index) => {
            const textData = JSON.parse(text);
            let img = null;
            if (imagehighlights.length > index) {
              img = imagehighlights[index];
            }
            if (img != null) {
              return (
                <div key={index} className="flex flex-row">
                  <Image
                    src={img}
                    width={200}
                    height={200}
                    className="rounded-md object-cover mb-4 w-[200px] h-[200px]"
                    alt={title}
                  ></Image>
                  <div className="flex flex-col ml-4">
                    <p className="text-2xl">{textData.title}</p>
                    <p>{textData.data}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>

      <section className="py-6 mt-5 flex flex-col justify-center items-center">
        <Separator className="bg-sky-300" />
        <p className="mt-5 text-4xl">Goals and Motivation</p>
        <p>{goals}</p>
      </section>

      <section className="py-6 mt-5 flex flex-col justify-center items-center">
        <Separator className="bg-sky-300" />
        <div className="flex flex-row gap-3">
          {techArray.map((tech) => {
            return <p> #{tech} </p>;
          })}
        </div>
      </section>
    </div>
  );
}
export default DefaultPage;
