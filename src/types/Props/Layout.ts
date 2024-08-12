import { AlignTypes, JustifyTypes } from "@basetypes";

export default interface LayoutProps {
  justifyContent?: JustifyTypes;
  alignItems?: AlignTypes;
}
export interface PaddingProps {
  padding: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}
