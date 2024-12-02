import { SizeOptions, ValueAndUnitProps } from "_uiTypes";

export type FontStyleOptions = Exclude<
  React.CSSProperties["fontStyle"],
  "-moz-initial"
>;

export type FontFamilyOptions =
  | "Metrophobic"
  | "Montserrat"
  | "CustomFont1"
  | "CustomFont2"
  | "CustomFont3";

export type FontWeightOptions =
  | Exclude<
      React.CSSProperties["textTransform"],
      "-moz-initial" | "full-size-kana"
    >
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type FontAsObjectProps = {
  size?: Exclude<SizeOptions, "zero"> | ValueAndUnitProps;
  family?: FontFamilyOptions;
  style?: FontStyleOptions;
  weight?: FontWeightOptions;
  lineHeight?: number;
};
export type FontProps = {
  font?: FontAsObjectProps | SizeOptions;
};
