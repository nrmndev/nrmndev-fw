import { TypographyComponentProps } from "@uiComponentTypes";

export type TemplateForTypographyKeys =
  | "PrimaryHeadingA"
  | "PrimaryHeadingB"
  | "PrimaryHeadingC"
  | "SecondaryHeadingA"
  | "SecondaryHeadingB"
  | "SecondaryHeadingC"
  | "TertiaryHeadingA"
  | "TertiaryHeadingB"
  | "TertiaryHeadingC"
  | "LargeText"
  | "MediumText"
  | "SmallText"
  | "Title"
  | "Subtitle"
  | "Body"
  | "Footer";

export type TypographyTemplate = {
  [K in TemplateForTypographyKeys]: TypographyComponentProps;
};
