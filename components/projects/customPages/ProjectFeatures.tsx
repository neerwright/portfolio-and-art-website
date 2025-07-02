import Image from "next/image";
import { Separator } from "@/components/ui/separator";

function ProjectFeatures({
  texthighlights,
  imagehighlights,
  title,
}: {
  texthighlights: string[];
  imagehighlights: string[];
  title: string;
}) {
  return (
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
                  width={500}
                  height={500}
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
  );
}
export default ProjectFeatures;
