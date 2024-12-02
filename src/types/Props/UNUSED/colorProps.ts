export type ColorOptions =
  | "primary"
  | "secondary"
  | "accent1"
  | "accent2"
  | "accent3"
  | "black"
  | "dark"
  | "gradient-1"
  | "gradient-2"
  | "gradient-3"
  | "gradient-4"
  | "gradient-5"
  | "light"
  | "white";

export type ColorProps = {
  color?: ColorOptions;
};
