import ProductsContainer from "@/components/products/ProductsContainer";
import ProjectSearch from "@/components/projects/ProjectsSearchBar";

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) {
  const { search, layout } = await searchParams;
  const l = layout || "grid";
  const s = search || "";
  return (
    <div className="p-8">
      <ProductsContainer layout={l} search={s} />
    </div>
  );
}
export default ProductsPage;
