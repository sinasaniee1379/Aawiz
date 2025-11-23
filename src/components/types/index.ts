type ButtonTypes = "button" | "submit";

export interface ButtonProps {
  type: ButtonTypes;
  title: string;
  classname?: string;
}
