import { ProjectProps } from "@/utils/types";

function TestPage({
  title,
  tech,
  texthighlights,
  imagehighlights,
  video,
  description,
  goals,
  github,
}: ProjectProps) {
  return <div className="p-8">{title}</div>;
}
export default TestPage;
