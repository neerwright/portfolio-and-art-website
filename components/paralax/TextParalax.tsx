"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

function TextParalax({ title, text }: { title: string; text: string }) {
  return (
    <ParallaxProvider>
      <Parallax speed={25}>
        <div className="bg-gray-950/80 w-screen absolute ">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-white text-4xl font-bold tracking-wider py-8 px-2">
              {title}
            </h1>
            <div className="w-7/10  mt-1 mb-4">
              <p className="flex flex-wrap  break-after-auto text-sky-50 text-xl ">
                {text}
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
}
export default TextParalax;
