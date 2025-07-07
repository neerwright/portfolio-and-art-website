import {
  fetchAdminProjectDetails,
  updateProjectAction,
  addAditionalProjectImageAction,
  updateProjectProfileImageAction,
} from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";

import TextAreaInput from "@/components/form/TextAreaInput";
import { SubmitButton } from "@/components/form/Buttons";

import FormArrayInput from "@/components/form/FormArrayInput";
import ImageArrayUpdateContainer from "@/components/form/ImageArrayUpdateContainer";
import { Separator } from "@/components/ui/separator";
import ImageInputContainer from "@/components/form/ImageInputContainer";

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
    rank,
    texthighlights,
    imagehighlights,
    video,
    description,
    goals,
    github,
  } = project;
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-8 capitalize p-8 mt-10">
        update project
      </h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={updateProjectAction}>
          <input type="hidden" name="id" value={id} />
          <FormInput
            type="text"
            name="title"
            label="title"
            defaultValue={title}
          />
          <FormInput
            type="tech"
            name="tech"
            label="tech"
            defaultValue={tech.toString()}
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
          <FormInput
            type="number"
            name="rank"
            label="rank"
            defaultValue={rank}
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

        <section className="py-8">
          <p className="text-3xl py-2">Update Images</p>
          <ImageArrayUpdateContainer
            images={imagehighlights}
            name="imagehighlights"
            id={id}
          />
        </section>

        <section className="py-8">
          <p className="text-3xl py-2">Add new Images</p>
          <FormContainer action={addAditionalProjectImageAction}>
            <input type="hidden" name="id" value={id} />
            <FormArrayInput
              label="image highlights"
              name="imagehighlights"
              type="file"
              accept="image/*"
              arrayName="imagehighlights"
            ></FormArrayInput>
            <SubmitButton text="add images" className="mt-8" />
          </FormContainer>
        </section>
      </div>

      <Separator />
      <section className="py-8">
        <p className="py-2 text-2xl">Profile Image</p>
        <ImageInputContainer
          action={updateProjectProfileImageAction}
          name="profileImage"
          image={project.profileImage}
          text="update image"
        >
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={project.profileImage} />
        </ImageInputContainer>
      </section>
    </section>
  );
}
export default EditProjectPage;
