import { ReactNode } from "react";

type ButtonTypes = "button" | "submit";

export interface ButtonProps {
  type: ButtonTypes;
  classname?: string;
  children: ReactNode;
}
