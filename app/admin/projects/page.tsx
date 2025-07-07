import EmptyList from "@/components/global/EmptyList";
import { fetchAdminProjects, deleteProjectAction } from "@/utils/actions";
import Link from "next/link";


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import FormContainer from "@/components/form/FormContainer";
import { IconButton } from "@/components/form/Buttons";

async function ProjectItemsPage() {
  const items = await fetchAdminProjects();
  if (items.length === 0) return <EmptyList />;
  return (
    <section className="p-10">
      <Table>
        <TableCaption className="capitalize">
          total products : {items.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Project Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => {
            const { id: projectId, title } = item;
            return (
              <TableRow key={projectId}>
                <TableCell>
                  <Link
                    href={`/projects/${projectId}`}
                    className="underline text-muted-foreground tracking-wide capitalize"
                  >
                    {title}
                  </Link>
                </TableCell>
                <TableCell className="flex items-center gap-x-2">
                  <Link href={`/admin/projects/${projectId}/edit`}>
                    <IconButton actionType="edit"></IconButton>
                  </Link>
                  <DeleteProject projectId={projectId} />
                </TableCell>
                <TableCell className="flex items-center gap-x-2"></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}

export default ProjectItemsPage;

function DeleteProject({ projectId }: { projectId: string }) {
  //const prevState = { productId: productId };
  const deleteProject = deleteProjectAction.bind(null, { projectId });
  return (
    <FormContainer action={deleteProject}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}
