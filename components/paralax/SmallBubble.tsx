import { Parallax } from "react-scroll-parallax";
import { useParallaxController } from "react-scroll-parallax";
import Image from "next/image";
import { StaticImageData } from "next/image";

function SmallBubble({
  img,
  speed,
  w,
  h,
}: {
  img: StaticImageData;
  speed: number;
  w: number;
  h: number;
}) {
  const parallaxController = useParallaxController();
  return (
    <Parallax speed={speed}>
      <div className=" ">
        <Image
          src={img}
          alt="speach"
          width={w}
          height={h}
          onLoad={() => parallaxController?.update()}
        />
      </div>
    </Parallax>
  );
}
export default SmallBubble;
