import ProductsContainer from "@/components/products/ProductsContainer";

async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) {
  const { search, layout } = await searchParams;
  const l = layout || "grid";
  const s = search || "";
  return (
    <>
      <ProductsContainer layout={l} search={s} />
    </>
  );
}
export default ProductsPage;
