import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { StaticImageData } from "next/image";
import { useParallaxController } from "react-scroll-parallax";

function SpeachBubbleContent({
  img,
  start,
  end,
  position,
  alt,
  height,
  width,
  inFront,
}: {
  img: StaticImageData;
  start: number;
  end: number;
  position: string;
  alt?: string;
  height: number;
  width: number;
  inFront: boolean;
}) {
  const parallaxController = useParallaxController();
  const cssPosition = inFront ? "fixed" : "absolute";
  return (
    <div className={`${cssPosition}  ${position}`}>
      <Parallax translateY={[start, -end]}>
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
