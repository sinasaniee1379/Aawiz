import React from "react";
import { ButtonProps } from "./types";
import { twMerge } from "tailwind-merge";

const Button = ({ classname, children, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className={twMerge(
        `
        text-white 
        bg-blue-500 
        hover:bg-blue-700
        dark:bg-blue-600
        dark:hover:bg-blue-800
        dark:text-gray-100
        rounded-lg 
        py-3 
        transition-all 
        duration-500
        `,
        classname
      )}>
      {children}
    </button>
  );
};

export default Button;
