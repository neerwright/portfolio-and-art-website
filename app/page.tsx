import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import LoadingContainer from "@/components/global/LoadingContainer";
import { Suspense } from "react";
import CodeArtParalax from "@/components/paralax/CodeArtParalax";
import MainSpeachBubble from "@/public/images/MainSpeachBubble.png";
import Image from "next/image";
import HeroCarousel, { imageLink } from "@/components/home/HeroCarousel";
import { fetchAllProjects } from "@/utils/actions";

async function HomePage() {
  const projects = await fetchAllProjects({ search: "" });
  let items: imageLink[] = [];
  projects.map((project) => {
    const { profileImage, id } = project;
    items.push({ profileImage, id });
  });

  return (
    <div className=" bg-sky-100  ">
      <div className="flex items-center justify-center">
        <h1 className="text-9xl font-bold sm:text-6xl p-8 mt-12 leading-10   gap-2 sm:gap-x-6">
          Welcome
        </h1>
      </div>

      <div className="relative mt-10 w-screen h-screen ">
        <CodeArtParalax></CodeArtParalax>
      </div>

      <div className="p-9 flex flex-wrap items-center justify-center bg-gray-550 md:mt-30 mt-3">
        <h2 className="text-4xl font-bold sm:text-6xl p-8 mt-12 leading-10 ">
          My Coding Projects and Art
        </h2>
        <HeroCarousel items={items}></HeroCarousel>
      </div>
      <div className="flex flex-wrap items-center justify-center bg-gray-950 w-screen">
        <p className="flex flex-wrap break-all text-sky-50">
          {" "}
          dddddddddddddddddddddddnnnnnnnnnndddddddddddddddddddddddddddddddddddddddnnnnnnnnnnddddddddddddddddddd{" "}
          dddddddddddddddddddnnnnnnnnnnddddddddddddddddddd
          dddddddddddddddddddnnnnnnnnnnddddddddddddddddddd
          dddddddddddddddddddnnnnnnnnnnddddddddddddddddddd
          dddddddddddddddddddnnnnnnnnnnddddddddddddddddddd
          dddddddddddddddddddnnnnnnnnnnddddddddddddddddddd
          dddddddddddddddddddnnnnnnnnnnddddddddddddddddddd
          dddddddddddddddddddnnnnnnnnnnddddddddddddddddddd
          dddddddddddddddddddnnnnnnnnnnddddddddddddddddddd
          dddddddddddddddddddnnnnnnnnnnddddddddddddddddddd
          dddddddddddddddddddnnnnnnnnnnddddddddddddddddddd
        </p>
      </div>
    </div>
  );
}
export default HomePage;
