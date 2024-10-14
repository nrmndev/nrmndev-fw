export type FontStyleOptions =
  | "italic"
  | "normal"
  | "inherit"
  | "oblique"
  | "unset"
  | "inital";

export type FontFamilyOptions = "openSans" | "custom-1" | "custom-2";

export type FontProps = {
  font?: {
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    family?: FontFamilyOptions;
    style?: FontStyleOptions;
  };
};
