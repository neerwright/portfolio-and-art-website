"use client";

import Image from "next/image";

import FormContainer from "./FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "./Buttons";

import { replaceProjectImageAction } from "@/utils/actions";

type ImageArrayUpdateContainerProps = {
  images: string[];
  name: string;
  id: string;
  children?: React.ReactNode;
};

function ImageArrayUpdateContainer(props: ImageArrayUpdateContainerProps) {
  const { images, name, id } = props;

  return (
    <div className="mb-8">
      {images.map((image, index) => (
        <div key={index}>
          <Image
            key={index}
            src={image}
            width={200}
            height={200}
            className="rounded-md object-cover mb-4 w-[200px] h-[200px]"
            alt={name}
          />

          <FormContainer action={replaceProjectImageAction}>
            <ImageInput />
            <SubmitButton size="sm" />
            <input type="hidden" name={`oldImage`} value={image} />
            <input type="hidden" name="id" value={id} />
          </FormContainer>
        </div>
      ))}
    </div>
  );
}
export default ImageArrayUpdateContainer;

/*
function dsds (){
    return (
      <div className="max-w-md mt-4">
        
      </div>
    );
}*/
