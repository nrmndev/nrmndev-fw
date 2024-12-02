import { ColumnBreakpointOptions, UtilityComponentProps } from "@uiTypes";

export type ColumnComponentProps = UtilityComponentProps<
  "section" | "article" | "div" | "header" | "footer"
> &
  ColumnBreakpointOptions;

//   export type ColumnComponentProps = UtilityPartialProps<
//   | "animation"
//   | "background"
//   | "borderRadius"
//   | "border"
//   | "padding"
//   | "margin"
//   | "flex"
//   | "position"
//   | "xs"
//   | "md"
//   | "sm"
//   | "lg"
//   | "xl"
//   | "xxl"
//   | "display"
//   //| "columnBreakpoints"
//   | "children"
//   | "gap"
//   | "opacity",
//   "section" | "article" | "div" | "header" | "footer"
// > &
//   TemplateProps;
