import EmptyList from "@/components/global/EmptyList";
import { fetchAdminProducts } from "@/utils/actions";
import Link from "next/link";

import { formatCurrency } from "@/utils/format";
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
import { deleteProductAction } from "@/utils/actions";

async function ProjectItemsPage() {
  const items = await fetchAdminProjects();
  if (items.length === 0) return <EmptyList />;
  return (
    <section>
      <Table>
        <TableCaption className="capitalize">
          total products : {items.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => {
            const { id: projectId, name, company, price } = item;
            return (
              <TableRow key={projectId}>
                <TableCell>
                  <Link
                    href={`/projects/${projectId}`}
                    className="underline text-muted-foreground tracking-wide capitalize"
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{company}</TableCell>
                <TableCell>{formatCurrency(price)}</TableCell>
                <TableCell className="flex items-center gap-x-2">
                  <Link href={`/admin/products/${projectId}/edit`}>
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
