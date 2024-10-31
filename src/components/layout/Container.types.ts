import { UtilityPartialProps } from "@uiTypes";

export type ContainerComponentProps = UtilityPartialProps<
  | "background"
  | "border"
  | "flex"
  | "padding"
  // | "color"
  | "position"
  | "width"
  | "height"
  | "margin"
  | "children"
  | "fluid"
  | "borderRadius"
  | "overlay",
  "div" | "section" | "article" | "footer" | "header"
>;
//  &
//   AsProps<"div" | "section" | "article" | "footer" | "header"> &
//   AriaAttributes &
//   HTMLAttributes<"div" | "section" | "article" | "footer" | "header">;
