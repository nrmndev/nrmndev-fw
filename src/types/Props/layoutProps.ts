import { BorderSpacingProps, MarginProps, PaddingProps } from "@typekits";
import {
  AlignUnionTypes,
  JustifyUnionTypes,
  SizeUnionTypes,
} from "@uniontypes";

export default interface LayoutProps {
  justifyContent?: JustifyUnionTypes;
  alignItems?: AlignUnionTypes;
}

export interface SpacingProps
  extends PaddingProps,
    MarginProps,
    BorderSpacingProps {
  gap?: SizeUnionTypes;
}
