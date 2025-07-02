import AjaxIcon from "../icons/AjaxIcon";
import BlenderIcon from "../icons/BlenderIcon";
import BootstrapIcon from "../icons/BootstrapIcon";
import CSharpIcon from "../icons/CSharpIcon";
import CSSIcon from "../icons/CSSIcon";
import DjangoIcon from "../icons/DjangoIcon";
import FabricIcon from "../icons/FabricIcon";
import GitLabIcon from "../icons/GitLabIcon";
import JSIcon from "../icons/JSIcon";
import NextIcon from "../icons/NextIcon";
import ParamikoIcon from "../icons/ParamikoIcon";
import PyTestIcon from "../icons/PyTestIcon";
import PythonIcon from "../icons/PythonIcon";
import PyWinAuto from "../icons/PyWinAuto";
import ReactIcon from "../icons/ReactIcon";
import SeleniumIcon from "../icons/SeleniumIcon";
import SphinxIcon from "../icons/SphinxIcon";
import TailwindIcon from "../icons/TailwindIcon";
import TkinterIcon from "../icons/TkinterIcon";
import TSIcon from "../icons/TSicon";
import UnityIcon from "../icons/UnityIcon";

function TextToIcons({ techs }: { techs: string }) {
  const techArray: string[] = techs.split(",");
  console.log(techArray);
  return (
    <div className="flex flex-row flex-wrap p-1 gap-2">
      {techArray.map((tech, index) => {
        {
          console.log(tech);
        }
        return (
          <div key={index}>
            <MatchIcons tech={tech}></MatchIcons>
          </div>
        );
      })}
    </div>
  );
}
export default TextToIcons;

function MatchIcons({ tech }: { tech: string }) {
  switch (tech.toLowerCase()) {
    case "next.js":
      return <NextIcon></NextIcon>;
      break;
    case "react":
      return <ReactIcon></ReactIcon>;
      break;
    case "typescript":
      return <TSIcon />;
      break;
    case "tkinter":
      return <TkinterIcon />;
      break;

    case "python":
      return (
        <div className="flex">
          <PythonIcon />
        </div>
      );
      break;
    case "pywinauto":
      return <PyWinAuto />;
      break;
    case "fabric":
      return <FabricIcon />;
      break;
    case "paramiko":
      return <ParamikoIcon />;
      break;
    case "pytest":
      return <PyTestIcon />;
      break;
    case "gitlab-cd/ci":
      return <GitLabIcon />;
      break;

    case "bootstrap":
      return <BootstrapIcon />;
      break;

    case "django":
      return <DjangoIcon />;
      break;

    case "ajax":
      return <AjaxIcon />;
      break;

    case "js":
      return <JSIcon />;
      break;

    case "sphinx":
      return <SphinxIcon />;
      break;
    case "js":
      return <JSIcon />;
      break;
    case "selenium":
      return <SeleniumIcon />;
      break;
    case "tkinter":
      return <TkinterIcon />;
      break;

    case "unity":
      return <UnityIcon />;
      break;

    case "blender":
      return <BlenderIcon />;
      break;

    case "c#":
      return <CSharpIcon />;
      break;

    case "css":
      return <CSSIcon />;
      break;
    case "tailwind":
      return <TailwindIcon />;
      break;

    default:
      console.log(`no Icon found for ${tech}.`);
      return <></>;
  }
}
