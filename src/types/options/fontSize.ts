import SizeOptions from "./size";

type FontSizeOptions =
  | SizeOptions
  | { value: number; unit?: "%" | "px" | "rem" };

export default FontSizeOptions;
