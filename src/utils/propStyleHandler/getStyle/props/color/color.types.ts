export type ColorOptions =
  | "primary"
  | "secondary"
  | "accent-1"
  | "accent-2"
  | "accent-3"
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
