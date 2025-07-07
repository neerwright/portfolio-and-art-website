"use server";

import db from "@/utils/db";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import {
  productSchema,
  projectSchema,
  validateWithZodSchema,
  imageSchema,
  reviewSchema,
} from "./schemas";
import { uploadImage, uploadImages } from "@/utils/supabase";
import { revalidatePath } from "next/cache";
import { deleteImage, deleteImages } from "@/utils/supabase";
import { Cart } from "@prisma/client";

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { material: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect("/art");
  }
  return product;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = validateWithZodSchema(productSchema, rawData);
    const file = formData.get("image") as File;

    const validatedFile = validateWithZodSchema(imageSchema, { image: file });

    const fullPath = await uploadImage(validatedFile.image);

    await db.product.create({
      data: {
        ...validatedFields,
        image: fullPath,
        clerkId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/admin/products");
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : "An error occurred",
  };
};

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) {
    throw new Error("You must be logged in to access this route");
  }
  return user;
};

const getAdminUser = async () => {
  const user = await getAuthUser();
  if (user.id !== process.env.ADMIN_USER_ID) redirect("/");
  return user;
};
// refactor createProductAction

export const fetchAdminProducts = async () => {
  await getAdminUser();
  const products = await db.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};

export const deleteProductAction = async (prevState: { productId: string }) => {
  const { productId } = prevState;
  await getAdminUser();

  try {
    const product = await db.product.delete({
      where: {
        id: productId,
      },
    });

    await deleteImage(product.image);
    revalidatePath("/admin/products");
    return { message: "product removed" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchAdminProductDetails = async (productId: string) => {
  await getAdminUser();
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect("/admin/products");
  return product;
};

export const updateProductAction = async (
  prevState: any,
  formData: FormData
) => {
  await getAdminUser();
  try {
    const productId = formData.get("id") as string;
    const rawData = Object.fromEntries(formData);

    const validatedFields = validateWithZodSchema(productSchema, rawData);

    await db.product.update({
      where: {
        id: productId,
      },
      data: {
        ...validatedFields,
      },
    });
    revalidatePath(`/admin/products/${productId}/edit`);
    return { message: "Product updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const updateProductImageAction = async (
  prevState: any,
  formData: FormData
) => {
  await getAuthUser();
  try {
    const image = formData.get("image") as File;
    const productId = formData.get("id") as string;
    const oldImageUrl = formData.get("url") as string;

    const validatedFile = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedFile.image);
    await deleteImage(oldImageUrl);
    await db.product.update({
      where: {
        id: productId,
      },
      data: {
        image: fullPath,
      },
    });
    revalidatePath(`/admin/products/${productId}/edit`);
    return { message: "Product Image updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchFavoriteId = async ({ productId }: { productId: string }) => {
  const user = await getAuthUser();
  const favorite = await db.favorite.findFirst({
    where: {
      productId,
      clerkId: user.id,
    },
    select: {
      id: true,
    },
  });
  return favorite?.id || null;
};

export const toggleFavoriteAction = async (prevState: {
  productId: string;
  favoriteId: string | null;
  pathname: string;
}) => {
  const user = await getAuthUser();
  const { productId, favoriteId, pathname } = prevState;
  try {
    if (favoriteId) {
      await db.favorite.delete({
        where: {
          id: favoriteId,
        },
      });
    } else {
      await db.favorite.create({
        data: {
          productId,
          clerkId: user.id,
        },
      });
    }
    revalidatePath(pathname);
    return { message: favoriteId ? "Removed from Faves" : "Added to Faves" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchUserFavorites = async () => {
  const user = await getAuthUser();
  const favorites = await db.favorite.findMany({
    where: {
      clerkId: user.id,
    },
    include: {
      product: true,
    },
  });
  return favorites;
};

export const createReviewAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);

    const validatedFields = validateWithZodSchema(reviewSchema, rawData);

    await db.review.create({
      data: {
        ...validatedFields,
        clerkId: user.id,
      },
    });
    revalidatePath(`/products/${validatedFields.productId}`);
    return { message: "Review submitted successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchProductReviews = async (productId: string) => {
  const reviews = await db.review.findMany({
    where: {
      productId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return reviews;
};

export const fetchProductReviewsByUser = async () => {
  const user = await getAuthUser();
  const reviews = await db.review.findMany({
    where: {
      clerkId: user.id,
    },
    select: {
      id: true,
      rating: true,
      comment: true,
      product: {
        select: {
          image: true,
          name: true,
        },
      },
    },
  });
  return reviews;
};
export const deleteReviewAction = async (prevState: { reviewId: string }) => {
  const { reviewId } = prevState;
  const user = await getAuthUser();

  try {
    await db.review.delete({
      where: {
        id: reviewId,
        clerkId: user.id,
      },
    });

    revalidatePath("/reviews");
    return { message: "Review deleted successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const findExistingReview = async (userId: string, productId: string) => {
  return db.review.findFirst({
    where: {
      clerkId: userId,
      productId,
    },
  });
};

export const fetchProductRating = async (productId: string) => {
  const result = await db.review.groupBy({
    by: ["productId"],
    _avg: {
      rating: true,
    },
    _count: {
      rating: true,
    },
    where: {
      productId,
    },
  });

  // empty array if no reviews
  return {
    rating: result[0]?._avg.rating?.toFixed(1) ?? 0,
    count: result[0]?._count.rating ?? 0,
  };
};

export const fetchCartItems = async () => {
  const { userId } = await auth();

  const cart = await db.cart.findFirst({
    where: {
      clerkId: userId ?? "",
    },
    select: {
      numItemsInCart: true,
    },
  });
  return cart?.numItemsInCart || 0;
};

const fetchProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

const includeProductClause = {
  cartItems: {
    include: {
      product: true,
    },
  },
};

export const fetchOrCreateCart = async ({
  userId,
  errorOnFailure = false,
}: {
  userId: string;
  errorOnFailure?: boolean;
}) => {
  let cart = await db.cart.findFirst({
    where: {
      clerkId: userId,
    },
    include: includeProductClause,
  });

  if (!cart && errorOnFailure) {
    throw new Error("Cart not found");
  }

  if (!cart) {
    cart = await db.cart.create({
      data: {
        clerkId: userId,
      },
      include: includeProductClause,
    });
  }

  return cart;
};

const updateOrCreateCartItem = async ({
  productId,
  cartId,
  amount,
}: {
  productId: string;
  cartId: string;
  amount: number;
}) => {
  let cartItem = await db.cartItem.findFirst({
    where: {
      productId,
      cartId,
    },
  });

  if (cartItem) {
    cartItem = await db.cartItem.update({
      where: {
        id: cartItem.id,
      },
      data: {
        amount: cartItem.amount + amount,
      },
    });
  } else {
    cartItem = await db.cartItem.create({
      data: { amount, productId, cartId },
    });
  }
};

export const updateCart = async (cart: Cart) => {
  const cartItems = await db.cartItem.findMany({
    where: {
      cartId: cart.id,
    },
    include: {
      product: true, // Include the related product
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  let numItemsInCart = 0;
  let cartTotal = 0;

  for (const item of cartItems) {
    numItemsInCart += item.amount;
    cartTotal += item.amount * item.product.price;
  }
  const tax = cart.taxRate * cartTotal;
  const shipping = cartTotal ? cart.shipping : 0;
  const orderTotal = cartTotal + tax + shipping;

  const currentCart = await db.cart.update({
    where: {
      id: cart.id,
    },

    data: {
      numItemsInCart,
      cartTotal,
      tax,
      orderTotal,
    },
    include: includeProductClause,
  });
  return { currentCart, cartItems };
};

export const addToCartAction = async (prevState: any, formData: FormData) => {
  const user = await getAuthUser();
  try {
    const productId = formData.get("productId") as string;
    const amount = Number(formData.get("amount"));
    await fetchProduct(productId);
    const cart = await fetchOrCreateCart({ userId: user.id });
    await updateOrCreateCartItem({ productId, cartId: cart.id, amount });
    await updateCart(cart);
  } catch (error) {
    return renderError(error);
  }
  redirect("/cart");
};

export const removeCartItemAction = async (
  prevState: any,
  formData: FormData
) => {
  const user = await getAuthUser();
  try {
    const cartItemId = formData.get("id") as string;
    const cart = await fetchOrCreateCart({
      userId: user.id,
      errorOnFailure: true,
    });
    await db.cartItem.delete({
      where: {
        id: cartItemId,
        cartId: cart.id,
      },
    });

    await updateCart(cart);
    revalidatePath("/cart");
    return { message: "Item removed from cart" };
  } catch (error) {
    return renderError(error);
  }
};

export const updateCartItemAction = async ({
  amount,
  cartItemId,
}: {
  amount: number;
  cartItemId: string;
}) => {
  const user = await getAuthUser();

  try {
    const cart = await fetchOrCreateCart({
      userId: user.id,
      errorOnFailure: true,
    });
    await db.cartItem.update({
      where: {
        id: cartItemId,
        cartId: cart.id,
      },
      data: {
        amount,
      },
    });
    await updateCart(cart);
    revalidatePath("/cart");
    return { message: "cart updated" };
  } catch (error) {
    return renderError(error);
  }
};

export const createOrderAction = async (prevState: any, formData: FormData) => {
  const user = await getAuthUser();
  let orderId: null | string = null;
  let cartId: null | string = null;

  try {
    const cart = await fetchOrCreateCart({
      userId: user.id,
      errorOnFailure: true,
    });

    cartId = cart.id;
    await db.order.deleteMany({
      where: {
        clerkId: user.id,
        isPaid: false,
      },
    });

    const order = await db.order.create({
      data: {
        clerkId: user.id,
        products: cart.numItemsInCart,
        orderTotal: cart.orderTotal,
        tax: cart.tax,
        shipping: cart.shipping,
        email: user.emailAddresses[0].emailAddress,
      },
    });
    orderId = order.id;
  } catch (error) {
    return renderError(error);
  }
  redirect(`/checkout?orderId=${orderId}&cartId=${cartId}`);
};
export const fetchUserOrders = async () => {
  const user = await getAuthUser();
  const orders = await db.order.findMany({
    where: {
      clerkId: user.id,
      isPaid: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return orders;
};

export const fetchAdminOrders = async () => {
  const user = await getAdminUser();

  const orders = await db.order.findMany({
    where: {
      isPaid: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return orders;
};

export const fetchAllProjects = async ({ search = "" }: { search: string }) => {
  return db.project.findMany({
    where: {
      OR: [
        { title: { contains: search, mode: "insensitive" } },
        { tech: { contains: search, mode: "insensitive" } },
        { description: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: [
      {
        rank: "desc",
      },
    ],
  });
};

type UnparsedProjectData = {
  title: any;
  tech: any;
  github: any;
  video: any;
  texthighlights: any;
  imagehighlights: any;
  description: any;
  goals: any;
  rank: any;
};
export const createProjectAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();

  try {
    const rawData = Object.fromEntries(formData) as UnparsedProjectData;
    const profileImage = formData.get("profileImage") as File;
    console.log("profileImage");
    console.log(profileImage);
    console.log("profileImage");
    rawData["texthighlights"] = JSON.parse(rawData["texthighlights"]);
    rawData["texthighlights"] = rawData["texthighlights"].map((item: any) => {
      return JSON.stringify({ title: item.title, data: item.data });
    });

    rawData["imagehighlights"] = JSON.parse(rawData["imagehighlights"]);

    const images = rawData["imagehighlights"].map((item: any) => {
      const file = formData.get(item.title) as File;

      return file;
    });

    const validatedImages: File[] = images.map((item: any) => {
      const validatedFile = validateWithZodSchema(imageSchema, {
        image: item,
      });

      return validatedFile.image;
    });

    rawData["rank"] = Number(rawData["rank"]);

    const validatedFields = validateWithZodSchema(projectSchema, rawData);

    const fullPaths = await uploadImages(validatedImages);

    const validatedProfileImage = validateWithZodSchema(imageSchema, {
      image: profileImage,
    });
    const profileImagePath = await uploadImage(validatedProfileImage.image);

    Promise.all([...fullPaths]).then((values) => {
      db_create_project({
        validatedFields: validatedFields,
        fullPaths: values,
        profileImage: profileImagePath,
      });
    });
  } catch (error) {
    return renderError(error);
  }
  redirect("/admin/projects");
};

const db_create_project = async ({
  validatedFields,
  fullPaths,
  profileImage,
}: {
  validatedFields: any;
  fullPaths: any;
  profileImage: string;
}) => {
  await db.project.create({
    data: {
      ...validatedFields,
      imagehighlights: fullPaths,
      profileImage: profileImage,
    },
  });
};

export const fetchAdminProjects = async () => {
  await getAdminUser();
  const projects = await db.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return projects;
};

export const fetchAdminProjectDetails = async (productId: string) => {
  await getAdminUser();
  const project = await db.project.findUnique({
    where: {
      id: productId,
    },
  });
  if (!project) redirect("/admin/products");
  return project;
};

export const updateProjectAction = async (
  prevState: any,
  formData: FormData
) => {
  await getAdminUser();

  try {
    const projectId = formData.get("id") as string;
    const rawData = Object.fromEntries(formData) as UnparsedProjectData;

    rawData["texthighlights"] = JSON.parse(rawData["texthighlights"]);
    rawData["texthighlights"] = rawData["texthighlights"].map((item: any) => {
      return JSON.stringify({ title: item.title, data: item.data });
    });

    rawData["rank"] = Number(rawData.rank);

    const validatedFields = validateWithZodSchema(projectSchema, rawData);
    console.log(validatedFields);

    await db.project.update({
      where: {
        id: projectId,
      },
      data: {
        ...validatedFields,
      },
    });
    revalidatePath(`/admin/projects`);
    return { message: "Product updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const deleteProjectAction = async (prevState: { projectId: string }) => {
  const { projectId } = prevState;
  await getAdminUser();

  try {
    
    const project = await db.project.delete({
      where: {
        id: projectId,
      },
    });
    
    //const project = await fetchAdminProjectDetails(projectId);
    await deleteImages(project.imagehighlights);
    revalidatePath("/admin/projects");
    return { message: "product removed" };
  } catch (error) {
    return renderError(error);
  }
};

export const replaceProjectImageAction = async (
  prevState: any,
  formData: FormData
) => {
  await getAuthUser();
  try {
    const image = formData.get("image") as File;
    const projectId = formData.get("id") as string;
    const oldImageUrl = formData.get("oldImage") as string;

    const validatedFile = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedFile.image);
    await deleteImage(oldImageUrl);

    const project = await fetchAdminProjectDetails(projectId);

    const newImages = project.imagehighlights;
    var index = newImages.indexOf(oldImageUrl);

    if (index !== -1) {
      newImages[index] = fullPath;
    }

    await db.project.update({
      where: {
        id: projectId,
      },
      data: {
        imagehighlights: newImages,
      },
    });
    revalidatePath(`/admin/projects/${projectId}/edit`);
    return { message: "Product Image updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const addAditionalProjectImageAction = async (
  prevState: any,
  formData: FormData
) => {
  await getAuthUser();
  try {
    const projectId = formData.get("id") as string;

    const rawData = Object.fromEntries(formData) as UnparsedProjectData;

    rawData["imagehighlights"] = JSON.parse(rawData["imagehighlights"]);

    const images = rawData["imagehighlights"].map((item: any) => {
      const file = formData.get(item.title) as File;

      return file;
    });

    const validatedImages: File[] = images.map((item: any) => {
      const validatedFile = validateWithZodSchema(imageSchema, {
        image: item,
      });

      return validatedFile.image;
    });

    const fullPaths = await uploadImages(validatedImages);
    Promise.all([...fullPaths]).then((values) => {
      db_add_images_project({
        newImages: values,
        projectId: projectId,
      });
    });

    revalidatePath(`/admin/projects/${projectId}/edit`);
    return { message: "Product Image updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

const db_add_images_project = async ({
  newImages,
  projectId,
}: {
  newImages: string[];
  projectId: string;
}) => {
  await db.project.update({
    where: {
      id: projectId,
    },
    data: {
      imagehighlights: { push: newImages },
    },
  });
};

export const updateProjectProfileImageAction = async (
  prevState: any,
  formData: FormData
) => {
  await getAuthUser();
  try {
    const image = formData.get("image") as File;
    const projectId = formData.get("id") as string;
    const oldImageUrl = formData.get("url") as string;

    const validatedFile = validateWithZodSchema(imageSchema, { image });
    const fullPath = await uploadImage(validatedFile.image);
    await deleteImage(oldImageUrl);
    await db.project.update({
      where: {
        id: projectId,
      },
      data: {
        profileImage: fullPath,
      },
    });
    revalidatePath(`/admin/projects/${projectId}/edit`);
    return { message: "Product Image updated successfully" };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchSingleProject = async (projectId: string) => {
  const project = await db.project.findUnique({
    where: {
      id: projectId,
    },
  });
  if (!project) {
    redirect("/art");
  }
  return project;
};
