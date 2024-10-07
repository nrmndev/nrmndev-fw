import { MarginProps, PaddingProps } from "@uiTypes";
import { AlignOptions, JustifyOptions, SizeOptions } from "types/options";

export default interface LayoutProps {
  justifyContent?: JustifyOptions;
  alignItems?: AlignOptions;
}

export interface SpacingProps extends PaddingProps, MarginProps {
  gap?: SizeOptions;
}
