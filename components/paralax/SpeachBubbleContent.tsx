import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { StaticImageData } from "next/image";
import { useParallaxController } from "react-scroll-parallax";

function SpeachBubbleContent({
  img,
  speed,
  position,
  alt,
  height,
  width,
}: {
  img: StaticImageData;
  speed: number;
  position: string;
  alt?: string;
  height: number;
  width: number;
}) {
  const parallaxController = useParallaxController();
  return (
    <div className={`absolute ${position}`}>
      <Parallax speed={speed}>
        <Image
          src={img}
          alt={alt ? alt : ""}
          width={width}
          height={height}
          onLoad={() => parallaxController?.update()}
        />
      </Parallax>
    </div>
  );
}
export default SpeachBubbleContent;
