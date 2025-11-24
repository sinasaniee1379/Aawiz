import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type ButtonTypes = "button" | "submit";
type InputTypes = "number" | "email" | "phone" | "text" | "password";

export interface ButtonProps {
  type: ButtonTypes;
  classname?: string;
  children: ReactNode;
}

export interface InputProps {
  value?: string;
  register?: UseFormRegisterReturn;
  errors?: string;
  errorClassName?: string;
  title?: string;
  name: string;
  className?: string;
  labelClassName?: string;
  placeholder?: string;
  type: InputTypes;
}
export interface IProduct {
  category?: string;
  description?: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}
