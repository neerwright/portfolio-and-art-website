import { fetchAdminProjectDetails, updateProjectAction } from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckBoxInput";
import ImageInputContainer from "@/components/form/ImageInputContainer";
import FormArrayInput from "@/components/form/FormArrayInput";

async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await fetchAdminProjectDetails(id);
  const {
    title,
    tech,
    texthighlights,
    imagehighlights,
    video,
    description,
    goals,
    github,
  } = project;
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize p-8">
        update project
      </h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={updateProjectAction}>
          <FormInput
            type="tech"
            name="title"
            label="title"
            defaultValue={tech.toString()}
          />
          <FormInput
            type="text"
            name="title"
            label="title"
            defaultValue={title}
          />
          <FormInput
            type="text"
            name="video"
            label="video"
            defaultValue={video}
          />
          <FormInput
            type="text"
            name="github"
            label="github"
            defaultValue={github}
          />
          <TextAreaInput
            name="description"
            labelText="project description"
            defaultValue={description}
          />
          <TextAreaInput
            name="goals"
            labelText="project goals"
            defaultValue={goals}
          />
          <FormArrayInput
            defaultData={texthighlights}
            type="text"
            name="texthighlights"
            label="Highlights"
            arrayName="texthighlights"
          />
          <SubmitButton text="update project" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditProjectPage;
