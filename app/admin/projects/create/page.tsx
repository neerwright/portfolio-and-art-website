import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProjectAction } from "@/utils/actions";

import TextAreaInput from "@/components/form/TextAreaInput";

import FormArrayInput from "@/components/form/FormArrayInput";
import ImageInput from "@/components/form/ImageInput";
import { Separator } from "@/components/ui/separator";

function CreateProject() {
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
              arrayName="texthighlights"
            />

            <FormArrayInput
              label="image highlights"
              name="imagehighlights"
              type="file"
              accept="image/*"
              arrayName="imagehighlights"
            ></FormArrayInput>
          </div>
          <TextAreaInput name="description" labelText="project description" />
          <TextAreaInput name="goals" labelText="goals" />

          <FormInput type="number" name="rank" label="Rank" />

          <Separator />
          <p className="py-2 text-2xl">Profile Image</p>
          <ImageInput name="profileImage"></ImageInput>
          <SubmitButton text="Create Project" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProject;
