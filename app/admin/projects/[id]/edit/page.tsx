import {
  fetchAdminprojectDetails,
  updateprojectAction,
  updateprojectImageAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckBoxInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";

async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await fetchAdminProjectDetails(id);
  const { name, company, description, featured, price } = project;
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">update project</h1>
      <div className="border p-8 rounded-md">
        <ImageInputContainer
          action={updateProjectImageAction}
          name={name}
          image={project.image}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={project.image} />
        </ImageInputContainer>
        <FormContainer action={updateprojectAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="project name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={company}
            />

            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            labelText="project description"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput
              name="featured"
              label="featured"
              defaultChecked={featured}
            />
          </div>
          <SubmitButton text="update project" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditProjectPage;
