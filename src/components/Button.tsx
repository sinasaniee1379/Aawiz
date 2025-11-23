import React from "react";
import { ButtonProps } from "./types";
import { twMerge } from "tailwind-merge";

const Button = ({ classname, title, type }: ButtonProps) => {
  return (
    <button
      className={twMerge("text-white bg-blue-500 rounded-lg py-3", classname)}
      type={type}>
      {title}
    </button>
  );
};

export default Button;
