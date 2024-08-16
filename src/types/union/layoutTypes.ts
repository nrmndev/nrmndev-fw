import SizeTypes from "./sizeTypes";

export type JustifyUnionTypes =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "around"
  | "evenly";

export type AlignUnionTypes =
  | "center"
  | "flex-end"
  | "flex-start"
  | "baseline"
  | "stretch";

export type PositionUnionTypes = {
  top?: SizeTypes;
  right?: SizeTypes;
  bottom?: SizeTypes;
  left?: SizeTypes;
};
