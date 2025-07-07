import { Parallax } from "react-scroll-parallax";
import { useParallaxController } from "react-scroll-parallax";
import MainSpeachBubble from "@/public/images/MainSpeachBubble.png";
import Image from "next/image";
import FlippedBubble from "@/public/images/FlippedBubbpe.png";
import { useRef, useEffect } from "react";

const ParaContainer = ({ mirror }: { mirror: boolean }) => {
  const parallaxController = useParallaxController();

  let bubble = MainSpeachBubble;
  let text: string = "";
  let position: string = "";

  if (mirror) {
    bubble = FlippedBubble;
    text = "<art>";
    position = "right-20 -botom-30";
  } else {
    bubble = MainSpeachBubble;
    text = "<code>";
    position = "left-10";
  }

  return (
    <Image
      src={bubble}
      alt="speach"
      width={1000}
      height={1000}
      onLoad={() => parallaxController?.update()}
    />
  );
};

export default ParaContainer;
