import { Label } from "../ui/label";
import { Input } from "../ui/input";

type FormInputNumberProps = {
  defaultValue?: number;
};

export const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor="price" className="capitalize">
        Price (€)
      </Label>
      <Input
        id={"price"}
        type="number"
        name={"price"}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
};

export const ShippingInput = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor="shipping" className="capitalize">
        Shipping (€)
      </Label>
      <Input
        id={"shipping"}
        type="number"
        name={"shipping"}
        min={0}
        defaultValue={defaultValue || 3}
        required
      />
    </div>
  );
};

export const AmountInput = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor="amount" className="capitalize">
        amount
      </Label>
      <Input
        id={"amount"}
        type="number"
        name={"amount"}
        min={0}
        defaultValue={defaultValue || 1}
        required
      />
    </div>
  );
};
