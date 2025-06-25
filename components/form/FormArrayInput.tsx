"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormInputAddButton, FormInputDeleteButton } from "./Buttons";
import { useState } from "react";

type FormInputProps = {
  name: string;
  type: string;
  label: string;
  accept?: string;
};

function FormArrayInput({ label, name, type, accept }: FormInputProps) {
  const [inputFieldsList, setInputFieldsList] = useState<number[]>([0]);
  const [fieldNumber, setFieldNumber] = useState<number>(1);

  const handleAddInputField = () => {
    setInputFieldsList([...inputFieldsList, fieldNumber]);
    setFieldNumber(fieldNumber + 1);
    console.log(inputFieldsList);
  };

  const handleDelInputField = (id: number) => {
    const arr = inputFieldsList.filter((i) => i !== id);
    console.log(arr);
    setInputFieldsList(arr);
  };

  return (
    <div>
      {inputFieldsList.map((field, index) => (
        <div className="mb-2" key={index}>
          <Label htmlFor={name} className="capitalize">
            {`${label}${field}`}
          </Label>

          <div className="flex flex-row">
            <Input
              id={`${name}${field}`}
              name={`${name}${field}`}
              type={type}
              required
              accept={accept}
            />

            <FormInputDeleteButton
              onClickEvent={handleDelInputField}
              id={Number(field)}
            ></FormInputDeleteButton>
          </div>
        </div>
      ))}

      <FormInputAddButton onClickEvent={handleAddInputField} />
    </div>
  );
}

export default FormArrayInput;
