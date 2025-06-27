import Link from "next/link";
import { fetchCartItems } from "@/utils/actions";

import ShopBagIcon from "@/components/icons/ShopBagIcon";

async function CartButton() {
  const numItemsInCart = await fetchCartItems();

  return (
    <div className="flex justify-start items-center relative ">
      <Link href="/cart">
        <div className=" bg-stone-950 relative ">
          <ShopBagIcon color={"rgb(108,188,228)"}></ShopBagIcon>

          <span className="absolute top-1 right-1 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
            {numItemsInCart}
          </span>
        </div>
      </Link>
    </div>
  );
}
export default CartButton;
