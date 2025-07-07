import FormInput from "@/components/form/FormInput";
import { SubmitButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/utils/actions";
import ImageInput from "@/components/form/ImageInput";
import {
  AmountInput,
  PriceInput,
  ShippingInput,
} from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckboxInput from "@/components/form/CheckBoxInput";

function CreateProduct() {
  const name = "Cool Artwork";
  const material = "acrylic paint on canvas";
  const measurement = "10x10";
  // const description = faker.commerce.productDescription();
  const description = "";

  return (
    <section className="mt-12">
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="measurements"
              label="measurements"
              defaultValue={measurement}
            />
            <FormInput
              type="text"
              name="material"
              label="material"
              defaultValue={material}
            />
            <PriceInput />
            <ShippingInput />
            <AmountInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="product description"
            defaultValue={description}
            required={false}
          />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" />
          </div>

          <SubmitButton text="Create Product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProduct;
