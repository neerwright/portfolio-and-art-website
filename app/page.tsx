import CodeArtParalax from "@/components/paralax/CodeArtParalax";

import Image from "next/image";
import HeroCarousel, {
  artImageLink,
  projectImageLink,
} from "@/components/home/HeroCarousel";
import { fetchAllProjects, fetchFeaturedProducts } from "@/utils/actions";
import backgroundImg from "@/public/images/Cali.png";
import TextParalax from "@/components/paralax/TextParalax";

async function HomePage() {
  const projects = await fetchAllProjects({ search: "" });
  const featuredArt = await fetchFeaturedProducts();

  const items: (projectImageLink | artImageLink)[] = [];
  projects.map((project) => {
    const { profileImage, id } = project;
    items.push({ profileImage, id, link: "projects" });
  });

  featuredArt.map((art) => {
    const { image, id } = art;
    items.push({ image, id, link: "art" });
  });

  return (
    <div className="relative bg-sky-100  ">
      <div className="absolute">
        <div className="flex items-center justify-center">
          <h1 className="sm:text-9xl font-bold text-6xl p-8 mt-20 leading-10   gap-2 sm:gap-x-6">
            Welcome
          </h1>
        </div>

        <div className="p-1 static ">
          <h2 className="tracking-wider text-4xl font-bold sm:text-6xl p-1 leading-20 md:mt-7 sm:mt-20 text-center">
            My Coding Projects and Art
          </h2>
          <HeroCarousel items={items}></HeroCarousel>
        </div>
      </div>

      <div className="absolute top-230">
        <div className="relative w-screen h-170 ">
          <CodeArtParalax></CodeArtParalax>
        </div>

        <div className="relative mt-20 md:mt-50 w-screen h-screen">
          <div className="overflow-hidden  ">
            <Image
              src={backgroundImg}
              alt="Cover Image"
              className="object-cover"
              fill
              unoptimized
            />
          </div>
          <TextParalax
            title={"After Graduation"}
            text={`I started out wanting to create video games, which taught me
                        how to think critically, work creatively, and learn fast. Now, I’m
                        looking for a more stable and impactful role where I can grow,
                        adapt quickly, and contribute meaningfully to a team. Feel free to
                        explore my work — I’m ready to help build something great.`}
          ></TextParalax>

          <div className="absolute top-100">
            <TextParalax
              title={"contact me"}
              text={`I started out wanting to create video games, which taught me
                        how to think critically, work creatively, and learn fast. Now, I’m
                        looking for a more stable and impactful role where I can grow,
                        adapt quickly, and contribute meaningfully to a team. Feel free to
                        explore my work — I’m ready to help build something great.`}
            ></TextParalax>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
