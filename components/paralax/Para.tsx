"use client";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
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
import ParaContainer from "./ParaContainer";
import ParaContent from "./ParaContent";
import { useEffect, useRef } from "react";

function Para() {
  const BubbleImgRef = useRef<HTMLDivElement>(null);
  const BoundingBoxRef = useRef<HTMLDivElement>(null);
  const BubbleMirrorImgRef = useRef<HTMLDivElement>(null);
  const BoundingMirrorBoxRef = useRef<HTMLDivElement>(null);

  /*

---------------------------------------
    */

  useEffect(() => {
    onWindowResize();
    window.addEventListener("resize", onWindowResize);
    setInterval(onWindowResize, 1000);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  const onWindowResize = () => {
    if (BubbleImgRef) {
      const rect = BubbleImgRef?.current?.getBoundingClientRect();
      if (BubbleImgRef) {
        if (BoundingBoxRef.current && rect) {
          if (BoundingBoxRef.current.style) {
            BoundingBoxRef.current.style.height = `${rect.height}px`;
            BoundingBoxRef.current.style.width = `${rect.width}px`;
            console.log(rect.height);
            //BoundingBoxRef.current.style.top = `${rect.top}px`;
            //BoundingBoxRef.current.style.left = `${rect.left}px`;
          }
        }

        if (BubbleMirrorImgRef) {
          const rect = BubbleMirrorImgRef?.current?.getBoundingClientRect();
          if (BubbleMirrorImgRef) {
            if (BoundingMirrorBoxRef.current && rect) {
              if (BoundingMirrorBoxRef.current.style) {
                BoundingMirrorBoxRef.current.style.height = `${rect.height}px`;
                BoundingMirrorBoxRef.current.style.width = `${rect.width}px`;
                //BoundingMirrorBoxRef.current.style.top = `${rect.top}px`;
                //BoundingMirrorBoxRef.current.style.left = `${rect.left}px`;
              }
            }
            /*
            const aspect = rect.height / rect.width;

            const leftMult = 0.24;
            BoundingBoxRef.current.style.height = `${
              rect.height * aspect * 1.15
            }px`;
            BoundingBoxRef.current.style.width = `${
              rect.width * aspect * 1.23
            }px`;

            BoundingBoxRef.current.style.top = `${
              rect.height * aspect * 0.07
            }px`;
            BoundingBoxRef.current.style.left = `${
              rect.width * aspect * leftMult
            }px`;
            */
          }
        }
      }
    }
  };
  /*

---------------------------------------
    */

  return (
    <ParallaxProvider>
      <Parallax speed={20} className="relative">
        <div
          className="absolute
         border-9 border-b-emerald-900"
          ref={BubbleImgRef}
        >
          <ParaContainer mirror={false}></ParaContainer>
        </div>

        <div
          className="relative border-4 border-amber-400  overflow-hidden"
          ref={BoundingBoxRef}
        >
          <div className="absolute left-50">
            <ParaContent
              img={codePP}
              alt="codePP"
              start={60}
              end={70}
              height={500}
              width={500}
              inFront={false}
            ></ParaContent>
          </div>
        </div>
      </Parallax>

      {/*--------------------- */}

      <Parallax speed={40} className="relative">
        <div
          className="absolute
         border-9 border-b-emerald-900"
          ref={BubbleMirrorImgRef}
        >
          <ParaContainer mirror={true}></ParaContainer>
        </div>

        <div
          className="absolute border-4 border-amber-800  overflow-hidden"
          ref={BoundingMirrorBoxRef}
        >
          <div className="absolute right-20">
            <ParaContent
              img={artPP}
              alt="artPP"
              start={60}
              end={70}
              height={500}
              width={500}
              inFront={false}
            ></ParaContent>
          </div>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
}
export default Para;
