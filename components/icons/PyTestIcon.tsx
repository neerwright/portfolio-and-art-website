import test from "@/public/images/pytest1.png";
import Image from "next/image";

function PyTestIcon() {
  return (
    <Image
      src={test}
      alt="winauto"
      width={480}
      height={480}
      className="max-w-30 object-contain"
    ></Image>
  );
}
export default PyTestIcon;
