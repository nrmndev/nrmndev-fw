import { SizeOptions } from "@uiTypes";

type ButtonSize = SizeOptions;
type ButtonVariant =
  | "flat"
  | "solid-primary"
  | "solid-secondary"
  | "solid-accent-1"
  | "solid-accent-2"
  | "solid-accent-3"
  | "solid-dark"
  | "solid-white"
  | "solid-black"
  | "solid-light"
  | "outline-primary"
  | "outline-secondary"
  | "outline-accent-1"
  | "outline-accent-2"
  | "outline-accent-3"
  | "outline-dark"
  | "outline-white"
  | "outline-black"
  | "outline-light";

export type ButtonProps = {
  size?: ButtonSize;
  variant?: ButtonVariant;
};
