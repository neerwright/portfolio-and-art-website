import { Project } from "@prisma/client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import TextToIcons from "./TextToIcons";

function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="pt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const { title, tech, profileImage, description } = project;
        const projectId = project.id;

        return (
          <article key={projectId} className="group relative">
            <Link href={`/projects/${projectId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500 bg-sky-50 lg:max-w-128">
                <CardContent className="">
                  <p className="text-3xl capitalize flex justify-center ">
                    {title}
                  </p>
                  <div className="relative h-64 md:max-w-64 md:h-48 rounded overflow-hidden mx-auto">
                    <Image
                      src={profileImage}
                      alt={title}
                      fill
                      sizes="(max-width:700px) 100vw,(max-width:700px) 50vw,50vw"
                      priority
                      className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500  "
                    />
                  </div>

                  <div className=" flex items-center justify-center flex-col">
                    <p className="text-muted-foreground  mt-2">{description}</p>
                    <Separator className="bg-sky-300" />
                    <div className="mt-3">
                      <TextToIcons techs={tech} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
export default ProjectsGrid;
