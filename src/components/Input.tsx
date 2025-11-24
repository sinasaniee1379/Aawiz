import { Field, Input, Label } from "@headlessui/react";
import React from "react";
import { InputProps } from "./types";
import { twMerge } from "tailwind-merge";

const CustomInput = ({
  name,
  type,
  value,
  className,
  errorClassName,
  errors,
  labelClassName,
  placeholder,
  register,
  title,
}: InputProps) => {
  return (
    <Field className={"w-full"}>
      <Label className={twMerge("text-black dark:text-white", labelClassName)}>
        {title}
      </Label>
      <div className="mt-2">
        <Input
          {...register}
          type={type}
          name={name}
          value={value}
          className={twMerge(
            "text-black dark:text-white py-2 px-4 rounded-lg shadow-md",
            className
          )}
          placeholder={placeholder}
        />
        <p
          className={twMerge(
            "text-red-700 dark:text-red-700 mt-1 hidden ",
            errorClassName && "block",
            errorClassName
          )}>
          {errors}
        </p>
      </div>
    </Field>
  );
};

export default CustomInput;
