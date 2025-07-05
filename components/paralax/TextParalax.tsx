"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { StaticImageData } from "next/image";
import { useParallaxController } from "react-scroll-parallax";

function TextParalax({ title, text }: { title: string; text: string }) {
  return (
    <ParallaxProvider>
      <Parallax translateY={[-700, -1000]}>
        <div className="bg-gray-950/80 w-screen flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold tracking-wider py-8 px-2">
            {title}
          </h1>
          <div className="w-7/10  mt-1 mb-4">
            <p className="flex flex-wrap  break-after-auto text-sky-50 text-xl ">
              {text}
            </p>
          </div>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
}
export default TextParalax;
