import { Prisma } from "@prisma/client";

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  company: string;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type ProjectProps = {
  title: string;
  tech: string;
  texthighlights: string[];
  imagehighlights: string[];
  video: string;
  description: string;
  goals: string;
  github: string;
};
