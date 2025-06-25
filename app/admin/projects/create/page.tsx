import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction, doNothing } from "@/utils/actions";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { faker } from "@faker-js/faker";
import CheckboxInput from "@/components/form/CheckBoxInput";
import FormArrayInput from "@/components/form/FormArrayInput";

function CreateProject() {
  const title = "my project";
  const tech = "React,Next.js";
  const texthighlights = "";
  return (
    <section className="p-9">
      <h1 className="text-2xl font-semibold mb-8 capitalize">create project</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={doNothing}>
          <div className="grid gap-4 md:grid-cols-1 my-4">
            <FormInput type="text" name="title" label="project title" />
            <FormInput type="text" name="tech" label="technologies used" />
            <FormInput type="text" name="github" label="github link" />
            <FormInput type="text" name="video" label="youtube video link" />

            <FormArrayInput
              type="text"
              name="texthighlights"
              label="Highlights"
            />

            <FormArrayInput
              label="image highlights"
              name="imagehighlights"
              type="file"
              accept="image/*"
            ></FormArrayInput>
          </div>
          <TextAreaInput name="description" labelText="project description" />
          <TextAreaInput name="goals" labelText="goals" />

          <SubmitButton text="Create Project" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProject;
