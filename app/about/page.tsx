import Image from "next/image";
import backgroundImg from "@/public/images/AboutImg2.png";

function AboutPage() {
  return (
    <section className="mt-12 flex items-center justify-center">
      <div className="overflow-hidden">
        <Image
          src={backgroundImg}
          alt="Cover Image"
          className="object-cover"
          fill
        />
      </div>

      <div className=" sm:bg-blue-400/40 rounded-lg bg-black/80 sm:w-150 md:w-250 z-2 flex flex-col flex-wrap gap-2 sm:gap-x-6 items-center justify-center  leading-none tracking-wide  p-8 mt-12">
        <h1 className="text-white text-4xl font-bold sm:text-6xl">About me</h1>
        <p className="sm:text-sky-100 p-5 leading-7 sm:text-2xl text-md  text-white">
          Hi, I’m René, after graduating at the University of Tübingen with a
          Computer Science Bachelor and a passion for building software and .
          I’m currently looking for exciting opportunities where I can
          contribute as a developer and grow as part of a creative and driven
          team.
        </p>

        <p className="sm:text-sky-100 p-5 sm:text-lg text-xs text-white">
          While my main focus is programming, I also have a strong creative
          side, which you’ll see reflected in the artwork featured here. I
          believe that blending logic with creativity leads to better
          problem-solving and more impactful designs — whether in code or on
          canvas. Thanks for visiting my portfolio. If you're interested in
          working together or just want to connect, feel free to reach out!
        </p>
      </div>
    </section>
  );
}
export default AboutPage;
