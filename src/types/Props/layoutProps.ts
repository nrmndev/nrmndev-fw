import {
  MarginProps,
  PaddingProps,
  AlignOptions,
  JustifyOptions,
  SizeOptions,
} from "@uiTypes";

export type FlexLayoutProps = {
  justifyContent?: JustifyOptions;
  alignItems?: AlignOptions;
};

export type SpacingProps = {
  gap?: SizeOptions;
} & PaddingProps &
  MarginProps;
