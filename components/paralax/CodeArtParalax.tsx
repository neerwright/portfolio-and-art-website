"use client";
import { ParallaxProvider } from "react-scroll-parallax";
import SpeachBubble from "./SpeachBubble";

import codePP from "@/public/images/codePP.png";
import artPP from "@/public/images/artPP.png";
import reactBubble from "@/public/images/ReactSpeachBubble.png";
import awsBubble from "@/public/images/awsBubble.png";
import dotBubble from "@/public/images/DotBubble.png";
import bulb from "@/public/images/bulb.png";
import coffee from "@/public/images/coffeeFlipped.png";
import docker from "@/public/images/docker.png";
import plane from "@/public/images/plane.png";
import notes from "@/public/images/notes.png";
import canvas from "@/public/images/canvas.png";
import pen from "@/public/images/pencil.png";
import brush from "@/public/images/brush.png";
import plant from "@/public/images/plant1.png";
import plant2 from "@/public/images/plant2.png";

import SpeachBubbleContent from "./SpeachBubbleContent";

function CodeArtParalax() {
  return (
    <div className="p-8">
      <ParallaxProvider>
        <div className="relative">
          <div className="absolute lg:left-30">
            <SpeachBubble speed={5} mirror={false}>
              <SpeachBubbleContent
                img={codePP}
                alt="codePP"
                start={60}
                end={70}
                position="left-20 top-1/14 z-2"
                height={500}
                width={500}
                inFront={false}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={reactBubble}
                alt="reactbubble"
                start={20}
                end={50}
                position="left-1/10 top-10 z-1"
                height={200}
                width={200}
                inFront={false}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={plane}
                alt="reactbubble"
                start={70}
                end={70}
                position="left-8/10 top-80 z-1"
                height={150}
                width={150}
                inFront={false}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={docker}
                alt="reactbubble"
                start={10}
                end={40}
                position="left-7/10 top-10 z-1"
                height={200}
                width={200}
                inFront={false}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={awsBubble}
                alt="aws"
                start={120}
                end={120}
                position="right-2/10 top-40 z-1"
                height={200}
                width={200}
                inFront={false}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={dotBubble}
                alt="dotdotdot"
                start={100}
                end={100}
                position="left-2/50 top-50 z-1"
                height={200}
                width={200}
                inFront={false}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={bulb}
                alt="dotdotdot"
                start={700}
                end={400}
                position="left-25/50 top-75 z-51"
                height={70}
                width={70}
                inFront={false}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={coffee}
                alt="dotdotdot"
                start={100}
                end={100}
                position="left-1/100 top-90 z-1"
                height={130}
                width={130}
                inFront={false}
              ></SpeachBubbleContent>
            </SpeachBubble>
          </div>

          <div className="absolute left-2/10 top-70 lg:left-4/10">
            <SpeachBubble speed={15} mirror={true}>
              <SpeachBubbleContent
                img={artPP}
                alt="artPP"
                start={100}
                end={120}
                position="left-20 -bottom-6/10 z-52"
                height={600}
                width={600}
                inFront={false}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={canvas}
                alt="reactbubble"
                start={200}
                end={200}
                position="left-7/10 top-30 z-1"
                height={200}
                width={200}
                inFront={false}
              ></SpeachBubbleContent>
              <SpeachBubbleContent
                img={pen}
                alt="reactbubble"
                start={100}
                end={20}
                position="left-4/10 top-2/10 z-1"
                height={50}
                width={50}
                inFront={false}
              ></SpeachBubbleContent>

              <SpeachBubbleContent
                img={brush}
                alt="reactbubble"
                start={100}
                end={200}
                position="left-7/10 top-1/10 z-1"
                height={120}
                width={120}
                inFront={false}
              ></SpeachBubbleContent>
              <SpeachBubbleContent
                img={plant2}
                alt="reactbubble"
                start={10}
                end={40}
                position="left-1/10 top-3/10 z-1"
                height={100}
                width={100}
                inFront={false}
              ></SpeachBubbleContent>
              <SpeachBubbleContent
                img={plant}
                alt="reactbubble"
                start={100}
                end={100}
                position="left-2/50 top-70 z-1"
                height={150}
                width={150}
                inFront={false}
              ></SpeachBubbleContent>
              <SpeachBubbleContent
                img={notes}
                alt="reactbubble"
                start={80}
                end={60}
                position="left-28/50 top-90 z-1"
                height={150}
                width={150}
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
