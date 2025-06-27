"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormInputAddButton, FormInputDeleteButton } from "./Buttons";
import { useState, useEffect } from "react";

type FormInputProps = {
  name: string;
  type: string;
  label: string;
  accept?: string;
  arrayName: string;
  defaultData?: string[];
};

type InputList = {
  inputIndex?: number;
  title: string;
  data: string;
  imgFile?: any;
};
function FormArrayInput({
  label,
  name,
  type,
  accept,
  arrayName,
  defaultData,
}: FormInputProps) {
  const [inputFieldsList, setInputFieldsList] = useState<InputList[]>([
    { inputIndex: 0, title: "", data: "" },
  ]);

  const [fieldNumber, setFieldNumber] = useState<number>(1);

  useEffect(() => {
    if (defaultData) {
      const defaultValues: InputList[] = [];
      defaultData.map((dataString, index) => {
        const parsedData = JSON.parse(dataString) as InputList;
        defaultValues.push({ ...parsedData, inputIndex: index });

        setInputFieldsList(defaultValues);
      });
    }
  }, []);

  const handleAddInputField = () => {
    setInputFieldsList([
      ...inputFieldsList,
      { inputIndex: fieldNumber, title: "", data: "" },
    ]);
    setFieldNumber(fieldNumber + 1);
    console.log(inputFieldsList);
  };

  const handleDelInputField = (id: number) => {
    const arr = inputFieldsList.filter((item) => item.inputIndex !== id);
    setInputFieldsList(arr);
  };

  const handleInputFieldChange = (e: any, id: number) => {
    console.log(inputFieldsList);

    const { value } = e.target;
    const list = [...inputFieldsList];
    const element = list.find((el) => el.inputIndex === id);
    if (element == null) return;
    element["title"] = value;

    if (type != "text") {
      element["title"] = `${name}-title-${element.inputIndex}`;
    }
    setInputFieldsList(list);
  };

  const handleTextAreaChange = (e: any, id: number) => {
    const { name, value } = e.target;
    const list = [...inputFieldsList];
    const element = list.find((el) => el.inputIndex === id);
    if (element == null) return;
    element["data"] = value;
    setInputFieldsList(list);
  };

  return (
    <div className="">
      <Input
        type="hidden"
        name={arrayName}
        id={arrayName}
        value={JSON.stringify(inputFieldsList)}
      />
      {inputFieldsList.map((element) => (
        <div className="mb-2" key={element.inputIndex}>
          <Label htmlFor={name} className="capitalize">
            {`${label}${element.inputIndex}`}
          </Label>

          <div className="flex flex-row py-2">
            <div className="flex flex-col ">
              <Input
                id={`${name}-title-${element.inputIndex}`}
                name={`${name}-title-${element.inputIndex}`}
                type={type}
                required
                accept={accept}
                defaultValue={element.title}
                onChange={(e) =>
                  handleInputFieldChange(e, Number(element.inputIndex))
                }
              />
              {type === "text" ? (
                <TextA
                  onChangeHandler={handleTextAreaChange}
                  id={Number(element.inputIndex)}
                  defaultValue={element.data}
                />
              ) : (
                ""
              )}
            </div>
            <FormInputDeleteButton
              onClickEvent={handleDelInputField}
              id={Number(element.inputIndex)}
            ></FormInputDeleteButton>
          </div>
        </div>
      ))}

      <FormInputAddButton onClickEvent={handleAddInputField} />
    </div>
  );
}

export default FormArrayInput;

function TextA({
  id,
  onChangeHandler,
  defaultValue,
}: {
  id: number;
  onChangeHandler: any;
  defaultValue: string;
}) {
  return (
    <textarea
      onChange={(e) => onChangeHandler(e, Number(id))}
      data-slot="textarea"
      defaultValue={defaultValue}
      className={
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
      }
    />
  );
}
