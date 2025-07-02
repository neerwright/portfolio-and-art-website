import fabric from "@/public/images/Fabric.png";
import Image from "next/image";

function FabricIcon() {
  return (
    <Image
      src={fabric}
      alt="winauto"
      width={300}
      height={300}
      className="max-w-20 object-contain"
    ></Image>
  );
}
export default FabricIcon;
