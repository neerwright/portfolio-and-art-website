import FormArrayInput from "@/components/form/FormArrayInput";
import FormContainer from "@/components/form/FormContainer";
import ImageArrayInput from "@/components/form/ImageArrayImput";
import HeroCarousel from "@/components/home/HeroCarousel";
import { Button } from "@/components/ui/button";
import { doNothing } from "@/utils/actions";
import Link from "next/link";

function ProjectsPage() {
  return (
    <div className="p-8 flex justify-center">
      <h1 className="max-w-xl font-bold text-2xl  sm:text-5xl">Projects</h1>
      <FormContainer action={doNothing}>
        <FormArrayInput label="input" name="hello" type="text"></FormArrayInput>
        <FormArrayInput
          label="input"
          name="hello"
          type="file"
          accept="image/*"
        ></FormArrayInput>
      </FormContainer>
    </div>
  );
}
export default ProjectsPage;
