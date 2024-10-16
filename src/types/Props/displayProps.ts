export type DisplayOptions =
  | "block"
  | "inline-block"
  | "flex"
  | "grid"
  | "table";

export type DisplayProps = {
  display?: DisplayOptions;
};
