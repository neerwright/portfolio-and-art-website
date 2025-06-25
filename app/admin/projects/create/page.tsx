import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/utils/actions";
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
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create project</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProjectAction}>
          <div className="grid gap-4 md:grid-cols-1 my-4">
            <FormInput
              type="text"
              name="title"
              label="project title"
              defaultValue={title}
            />
            <FormInput
              type="text"
              name="tech"
              label="technologies used"
              defaultValue={tech}
            />
            <FormArrayInput
              type="text"
              name="texthighlights"
              label="Highlights"
            />

            <ImageArrayInput></ImageArrayInput>
            <ImageInput />
          </div>
          <TextAreaInput
            name="texthighlights"
            labelText="product description"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>

          <SubmitButton text="Create Product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProject;
