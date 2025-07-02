import { Separator } from "@/components/ui/separator";
function ProjectFooter({ techArray }: { techArray: string[] }) {
  return (
    <section className="py-6 mt-5 flex flex-col justify-center items-center">
      <Separator className="bg-sky-300" />
      <div className="flex flex-row gap-3">
        {techArray.map((tech) => {
          return <p> #{tech} </p>;
        })}
      </div>
    </section>
  );
}
export default ProjectFooter;
