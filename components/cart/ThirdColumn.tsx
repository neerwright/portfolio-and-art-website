"use client";
import { useState } from "react";
import SelectProductAmount from "../single-product/SelectProductAmount";
import { Mode } from "../single-product/SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import {
  fetchSingleProduct,
  removeCartItemAction,
  updateCartItemAction,
} from "@/utils/actions";
import { toast } from "sonner";

function ThirdColumn({ quantity, id }: { quantity: number; id: string }) {
  const [amount, setAmount] = useState(quantity);
  const [maxAmount, setMaxAmount] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  const handleAmountChange = async (value: number) => {
    setIsLoading(true);
    toast("Calculating...");
    const art = await fetchSingleProduct(id);
    setMaxAmount(art.amount);
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });
    setAmount(value);
    toast(result.message);
    setIsLoading(false);
  };

  return (
    <div className="md:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={isLoading}
        maxAmount={maxAmount}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4" text="remove" />
      </FormContainer>
    </div>
  );
}
export default ThirdColumn;
