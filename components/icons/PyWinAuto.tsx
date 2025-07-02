import pywinauto from "@/public/images/pywinauto.jpg";
import Image from "next/image";

function PyWinAuto() {
  return (
    <Image
      src={pywinauto}
      alt="winauto"
      width={100}
      height={100}
      className="max-w-100 w-auto"
    ></Image>
  );
}
export default PyWinAuto;
