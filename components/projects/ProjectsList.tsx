import { formatCurrency } from "@/utils/format";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@prisma/client";
import Image from "next/image";

function ProductsList({ projects }: { projects: Project[] }) {
  return (
    <div className="mt-12 grid gap-y-8">
      {projects.map((project) => {
        const { title, tech, profileImage, description } = project;
        const techArray: string[] = tech.split(",");

        const projectId = project.id;
        return (
          <article key={projectId} className="group relative">
            <Link href={`/products/${projectId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent className="p-8 gap-y-4 grid md:grid-cols-3">
                  <div className="relative h-64  md:h-48 md:w-48">
                    <Image
                      src={profileImage}
                      alt={title}
                      fill
                      sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                      priority
                      className="w-full rounded-md object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold capitalize">
                      {title}
                    </h2>
                    <h4 className="text-muted-foreground">{description}</h4>
                  </div>
                  <div className="flex flex-wrap p-8">
                    {techArray.map((t, index) => {
                      return (
                        <p
                          key={index}
                          className="text-muted-foreground text-lg md:ml-auto flex"
                        >
                          {t}
                        </p>
                      );
                    })}
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
export default ProductsList;
