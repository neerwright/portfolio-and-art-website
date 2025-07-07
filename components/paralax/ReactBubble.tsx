
import { Parallax } from "react-scroll-parallax";
import { useParallaxController } from "react-scroll-parallax";
import ReactSpeachBubble from "@/public/images/ReactSpeachBubble.png";
import Image from "next/image";

const ReactBubble = () => {
  const parallaxController = useParallaxController();
  return (
    <>
      <Parallax speed={17}>
        <Image
          src={ReactSpeachBubble}
          alt="speach"
          width={120}
          height={120}
          onLoad={() => parallaxController?.update()}
          className="absolute right-40 top-10"
        />
      </Parallax>
    </>
  );
};

export default ReactBubble;
