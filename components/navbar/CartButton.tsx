import { Button } from "@/components/ui/button";
import { LuShoppingCart } from "react-icons/lu";
import Link from "next/link";
import { fetchCartItems } from "@/utils/actions";

import { GrShop } from "react-icons/gr";
import bagSVG from "../../public/images/ShoppingBag.svg";
import ShopBagIcon from "@/components/icons/ShopBagIcon";

async function CartButton() {
  const numItemsInCart = await fetchCartItems();

  return (
    <div className="flex justify-center items-center relative ">
      <Link href="/cart">
        <div className=" bg-stone-950 relative size-10">
          <ShopBagIcon></ShopBagIcon>

          <span className="absolute top-1 -right-0.4 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
            {numItemsInCart}
          </span>
        </div>
      </Link>
    </div>
  );
}
export default CartButton;
