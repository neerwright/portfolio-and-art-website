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
          <div>
            <SpeachBubble speed={20} mirror={false}>
              <SpeachBubbleContent
                img={ReactSpeachBubble}
                alt="reactbubble"
                speed={14}
                position="right-10 top-10"
                height={100}
                width={100}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={codePP}
                alt="codePP"
                speed={60}
                position="left-10 -top-1"
                height={400}
                width={400}
              ></SpeachBubbleContent>
            </SpeachBubble>
          </div>

          <div className="absolute right-20 top-1/2">
            <SpeachBubble speed={60} mirror={true}>
              <SpeachBubbleContent
                img={ReactSpeachBubble}
                alt="reactbubble"
                speed={80}
                position="right-20 top-20"
                height={100}
                width={100}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={artPP}
                alt="artPP"
                speed={60}
                position="left-10 -top-1"
                height={400}
                width={400}
              ></SpeachBubbleContent>
            </SpeachBubble>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
}
export default CodeArtParalax;
