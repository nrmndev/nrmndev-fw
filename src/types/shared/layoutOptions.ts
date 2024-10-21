export type EdgeOptions = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  unit?: "px" | "rem" | "%" | "em";
};

export type JustifyOptions =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "around"
  | "evenly";

export type FlexAlignOptions =
  | "center"
  | "flex-end"
  | "flex-start"
  | "baseline"
  | "stretch";

export type AlignOptions = "left" | "center" | "right";
