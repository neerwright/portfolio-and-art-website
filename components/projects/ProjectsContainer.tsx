import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchAllProjects } from "@/utils/actions";
import Link from "next/link";
import ProjectsList from "./ProjectsList";
import ProjectsGrid from "./ProjectsGrid";
import ProjectSearch from "./ProjectsSearchBar";

async function ProductsContainer({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) {
  const projects = await fetchAllProjects({ search });
  const totalProjects = projects.length;
  const searchTerm = search ? `&search=${search}` : "";
  return (
    <>
      {/* HEADER */}
      <section>
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4">
            <Button
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/projects?layout=grid${searchTerm}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/projects?layout=list${searchTerm}`}>
                <LuList />
              </Link>
            </Button>
            <ProjectSearch></ProjectSearch>
          </div>
        </div>
      </section>
      {/* PRODUCTS */}
      <div>
        {totalProjects === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProjectsGrid projects={projects} />
        ) : (
          <ProjectsList projects={projects} />
        )}
      </div>
      <Separator className="mt-4 bg-sky-200" />
      <h4 className="font-medium text-lg">
        {totalProjects} project {totalProjects > 1 && "s"}
      </h4>
    </>
  );
}
export default ProductsContainer;
