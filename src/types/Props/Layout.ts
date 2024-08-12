import { AlignTypes, JustifyTypes, PositionTypes, SizeTypes } from "@basetypes";

export default interface LayoutProps {
  justifyContent?: JustifyTypes;
  alignItems?: AlignTypes;
  gap?: SizeTypes;
}
export interface PaddingProps {
  padding: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}

export interface SpacingProps {
  padding?: PositionTypes;
  margin?: PositionTypes;
}
