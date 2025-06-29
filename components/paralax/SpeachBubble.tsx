import { Parallax } from "react-scroll-parallax";
import { useParallaxController } from "react-scroll-parallax";
import MainSpeachBubble from "@/public/images/MainSpeachBubble.png";
import Image from "next/image";
import FlippedBubble from "@/public/images/FlippedBubbpe.png";
import { useRef, useEffect, useState } from "react";

const SpeachBubble = ({
  speed,
  mirror,
  children,
}: {
  speed: number;
  mirror: boolean;
  children: React.ReactNode;
}) => {
  const parallaxController = useParallaxController();
  let bubble = MainSpeachBubble;
  if (mirror) {
    bubble = FlippedBubble;
  } else {
    bubble = MainSpeachBubble;
  }

  const BubbleImgRef = useRef<HTMLDivElement>(null);
  const BoundingBoxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    /*heightRef?current?.style.height = `${heightRef.current?.offsetHeight}px`;*/
    onWindowResize();
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  const onWindowResize = () => {
    if (BubbleImgRef) {
      let rect = BubbleImgRef?.current?.getBoundingClientRect();
      if (BubbleImgRef) {
        if (BoundingBoxRef.current && rect) {
          if (BoundingBoxRef.current.style) {
            const aspect = rect.height / rect.width;

            const leftMult = mirror ? 0.24 : 0.14;
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
          }
        }
      }
    }
  };

  return (
    <div>
      <Parallax speed={speed}>
        <div ref={BoundingBoxRef} className="absolute overflow-hidden ">
          {children}
        </div>
        <div ref={BubbleImgRef} className=" ">
          <Image
            src={bubble}
            alt="speach"
            width={1000}
            height={1000}
            onLoad={() => parallaxController?.update()}
          />
        </div>
      </Parallax>
    </div>
  );
};

export default SpeachBubble;
