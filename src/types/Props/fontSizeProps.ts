/**
 * Represents the available options for font size.
 * Can be a predefined size or a custom size with a value and unit.
 *
 * @typedef {("xs" | "sm" | "md" | "lg" | "xl" | "xxl" | { value: number; unit?: "%" | "px" | "rem" })} FontSizeOptions
 */

export type FontSizeOptions =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | { value: number; unit?: "%" | "px" | "rem" };

/**
 * Props for components that support font size.
 *
 * @typedef {Object} FontSizeProps
 * @property {FontSizeOptions} [fontSize] - The font size option to be applied to the component.
 * Pass the prop to the propStyleHandler({"fontSize"}) util to get className {string} ie. "font-sm" or inline {React.CSSProperties} ie. {font-size: 10%;}
 */

export type FontSizeProps = {
  fontSize?: FontSizeOptions;
};
