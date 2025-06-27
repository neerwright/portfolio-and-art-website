import NextIcon from "../icons/NextIcon";
import ReactIcon from "../icons/ReactIcon";
import TSIcon from "../icons/TSicon";

function TextToIcons({ techs }: { techs: string }) {
  const techArray: string[] = techs.split(",");
  console.log(techArray);
  return (
    <div className="flex flex-row">
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
  console.log("tech");
  console.log(tech);
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
    default:
      console.log(`no Icon found for ${tech}.`);
      return <></>;
  }
}
