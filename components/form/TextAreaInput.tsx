import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
  required?: boolean;
};

function TextAreaInput({
  name,
  labelText,
  defaultValue,
  required = true,
}: TextAreaInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      {required && (
        <Textarea
          id={name}
          name={name}
          defaultValue={defaultValue}
          rows={5}
          required
          className="leading-loose"
        />
      )}
      {!required && (
        <Textarea
          id={name}
          name={name}
          defaultValue={defaultValue}
          rows={5}
          className="leading-loose"
        />
      )}
    </div>
  );
}

export default TextAreaInput;
