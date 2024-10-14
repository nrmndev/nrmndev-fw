import { SizeOptions } from "@uiTypes";

export type BorderRadiusOptions = {
  topLeft?: number;
  topRight?: number;
  bottomRight?: number;
  bottomLeft?: number;
  unit?: "px" | "%" | "rem";
};

export type BorderRadiusProps = {
  borderRadius?: BorderRadiusOptions | SizeOptions;
};
