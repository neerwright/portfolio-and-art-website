import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { StaticImageData } from "next/image";
import { useParallaxController } from "react-scroll-parallax";

function ParaContent({
  img,
  start,
  end,
  alt,
  height,
  width,
}: {
  img: StaticImageData;
  start: number;
  end: number;
  alt?: string;
  height: number;
  width: number;
  inFront: boolean;
}) {
  const parallaxController = useParallaxController();

  return (
    <Parallax translateY={[start, -end]}>
      <Image
        will-change="transform"
        src={img}
        alt={alt ? alt : ""}
        width={width}
        height={height}
        onLoad={() => parallaxController?.update()}
      />
    </Parallax>
  );
}
export default ParaContent;
