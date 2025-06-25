import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProjectAction, doNothing } from "@/utils/actions";

import TextAreaInput from "@/components/form/TextAreaInput";

import FormArrayInput from "@/components/form/FormArrayInput";

function CreateProject() {
  const title = "my project";
  const tech = "React,Next.js";
  const texthighlights = "";
  return (
    <section className="p-9">
      <h1 className="text-2xl font-semibold mb-8 capitalize">create project</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProjectAction}>
          <div className="grid gap-4 md:grid-cols-1 my-4">
            <FormInput type="text" name="title" label="project title" />
            <FormInput type="text" name="tech" label="technologies used" />
            <FormInput type="text" name="github" label="github link" />
            <FormInput type="text" name="video" label="youtube video link" />

            <FormArrayInput
              type="text"
              name="texthighlights"
              label="Highlights"
              arrayName="projectText"
            />

            <FormArrayInput
              label="image highlights"
              name="imagehighlights"
              type="file"
              accept="image/*"
              arrayName="projectImages"
            ></FormArrayInput>
          </div>
          <TextAreaInput name="description" labelText="project description" />
          <TextAreaInput name="goals" labelText="goals" />

          <SubmitButton text="Create Project" className="mt-8" />
          <FormInput type="number" name="rank" label="Rank" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProject;
