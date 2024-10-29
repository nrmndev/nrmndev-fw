import { SizeOptions, ValueAndUnitProps } from "@uiTypes";

export type FontStyleOptions =
  | "italic"
  | "normal"
  | "inherit"
  | "oblique"
  | "unset"
  | "inital";

export type FontFamilyOptions =
  | "Metrophobic"
  | "Montserrat"
  | "CustomFont1"
  | "CustomFont2"
  | "CustomFont3";

export type FontWeightOptions =
  | "normal"
  | "bold"
  | "bolder"
  | "lighter"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type FontProps = {
  font?:
    | {
        size?: Omit<SizeOptions, "zero"> | ValueAndUnitProps;
        family?: FontFamilyOptions;
        style?: FontStyleOptions;
        weight?: FontWeightOptions;
        lineHeight?: number;
      }
    | SizeOptions;
};
