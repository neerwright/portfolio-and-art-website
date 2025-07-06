import BreadCrumbs from "@/components/single-product/BreadCrumbs";
import { fetchSingleProduct, findExistingReview } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-product/AddToCart";
import ProductRating from "@/components/single-product/ProductRating";
import ShareButton from "@/components/single-product/ShareButton";
import SubmitReview from "@/components/reviews/SubmitReview";
import ProductReviews from "@/components/reviews/ProductReviews";

import { auth } from "@clerk/nextjs/server";

async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const parama = await params;
  const product = await fetchSingleProduct(parama.id);
  const { name, image, measurements, material, amount, description, price } =
    product;
  const dollarsAmount = formatCurrency(price);

  const { userId } = await auth();
  const reviewDoesNotExist =
    userId && !(await findExistingReview(userId, product.id));

  return (
    <section className="mt-12 p-8 ">
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16 ">
        {/* IMAGE FIRST COL */}
        <div className="relative ">
          <Image
            src={image}
            alt={name}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "70%", height: "auto" }}
            priority
            className="w-full  rounded-md object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={parama.id} />
              <ShareButton name={product.name} productId={parama.id} />
            </div>
          </div>
          <ProductRating productId={parama.id} />
          <div className="flex flex-row mt-2 gap-1">
            <p className="text-xl  text-sky-300">{measurements} cm</p>
            <p className="text-xl text-muted-foreground"> {material}</p>
          </div>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
            {dollarsAmount}
          </p>

          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={parama.id} maxAmount={amount} />
        </div>
      </div>

      <ProductReviews productId={parama.id} />
      {reviewDoesNotExist && <SubmitReview productId={parama.id} />}
    </section>
  );
}
export default SingleProductPage;
