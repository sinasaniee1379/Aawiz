import React from "react";
import { ButtonProps } from "./types";
import { twMerge } from "tailwind-merge";

const Button = ({ classname, children, type }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "text-white bg-blue-500 rounded-lg py-3 hover:bg-blue-700 transition-all duration-500",
        classname
      )}
      type={type}>
      {children}
    </button>
  );
};

export default Button;
