import {
  AlignUnionTypes,
  JustifyUnionTypes,
  PositionUnionTypes,
  SizeUnionTypes,
} from "@uniontypes";

export default interface LayoutProps {
  justifyContent?: JustifyUnionTypes;
  alignItems?: AlignUnionTypes;
  gap?: SizeUnionTypes;
}
export interface PaddingProps {
  padding: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export interface SpacingProps {
  padding?: PositionUnionTypes | SizeUnionTypes;
  margin?: PositionUnionTypes | SizeUnionTypes;
}
