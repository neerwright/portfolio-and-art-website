"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import SpeachBubble from "./SpeachBubble";

import ReactSpeachBubble from "@/public/images/ReactSpeachBubble.png";
import codePP from "@/public/images/codePP.png";
import artPP from "@/public/images/artPP.png";

import SpeachBubbleContent from "./SpeachBubbleContent";

function CodeArtParalax() {
  return (
    <div className="p-8">
      <ParallaxProvider>
        <div className="relative border-4 border-amber-900">
          <div className="absolute ">
            <SpeachBubble speed={20} mirror={false}>
              <SpeachBubbleContent
                img={ReactSpeachBubble}
                alt="reactbubble"
                start={10}
                end={10}
                position="right-5 top-30"
                height={200}
                width={200}
                inFront={false}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={codePP}
                alt="codePP"
                start={40}
                end={50}
                position="left-10 top-1/14"
                height={500}
                width={500}
                inFront={false}
              ></SpeachBubbleContent>
            </SpeachBubble>
          </div>

          <div className="absolute left-2/10 top-60">
            <SpeachBubble speed={50} mirror={true}>
              <SpeachBubbleContent
                img={ReactSpeachBubble}
                alt="reactbubble"
                start={50}
                end={200}
                position="right-20 top-2/10"
                height={100}
                width={100}
                inFront={true}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={artPP}
                alt="artPP"
                start={80}
                end={100}
                position="left-20 -top-2/10"
                height={800}
                width={800}
                inFront={false}
              ></SpeachBubbleContent>
            </SpeachBubble>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
}
export default CodeArtParalax;
