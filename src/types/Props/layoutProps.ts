import {
  MarginProps,
  PaddingProps,
  AlignOptions,
  JustifyOptions,
  SizeOptions,
} from "@uiTypes";

export type LayoutProps = {
  justifyContent?: JustifyOptions;
  alignItems?: AlignOptions;
};

export type SpacingProps = {
  gap?: SizeOptions;
} & PaddingProps &
  MarginProps;
