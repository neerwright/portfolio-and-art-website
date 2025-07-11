"use client";

import { IoReload } from "react-icons/io5";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaPenSquare } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdRemoveCircle } from "react-icons/io";
import { handleFormFunction } from "@/utils/types";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({
  className = "",
  text = "submit",
  size = "lg",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={cn("capitalize", className)}
      size={size}
    >
      {pending ? (
        <>
          <IoReload className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

type actionType = "edit" | "delete";
export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <FaPenSquare />;
      case "delete":
        return <FaTrashAlt />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? <IoReload className=" animate-spin" /> : renderIcon()}
    </Button>
  );
};

export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="p-2 cursor-pointer"
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};

export const FormInputAddButton = ({
  onClickEvent,
}: {
  onClickEvent: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Button
      type="button"
      onClick={onClickEvent}
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer"
      asChild
    >
      <IoIosAddCircle />
    </Button>
  );
};

export const FormInputDeleteButton = ({
  onClickEvent,
  id,
}: {
  onClickEvent: handleFormFunction;
  id: number;
}) => {
  return (
    <Button
      type="button"
      onClick={() => onClickEvent(id)}
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer"
      asChild
    >
      <IoMdRemoveCircle />
    </Button>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className=" p-2 cursor-pointer"
    >
      {pending ? (
        <IoReload className=" animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};

export const ProductSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button type="button" size="default" className="mt-8">
        Please Sign In
      </Button>
    </SignInButton>
  );
};
