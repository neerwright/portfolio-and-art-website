import { Separator } from "@/components/ui/separator";

function ProjectGoals({ goals }: { goals: string }) {
  return (
    <section className="py-6 mt-5 flex flex-col justify-center items-center">
      <Separator className="bg-sky-300" />
      <p className="mt-5 text-4xl">Goals and Motivation</p>
      <p>{goals}</p>
    </section>
  );
}
export default ProjectGoals;
