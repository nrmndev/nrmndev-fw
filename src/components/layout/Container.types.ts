import { UtilityComponentProps } from "@uiTypes";

export type ContainerComponentProps = UtilityComponentProps<
  "div" | "section" | "article" | "footer" | "header"
>;
//  &
//   AsProps<"div" | "section" | "article" | "footer" | "header"> &
//   AriaAttributes &
//   HTMLAttributes<"div" | "section" | "article" | "footer" | "header">;

// export type ContainerComponentProps = UtilityPartialProps<
//   | "animation"
//   | "background"
//   | "border"
//   | "flex"
//   | "padding"
//   | "display"
//   | "opacity"
//   // | "color"
//   | "position"
//   | "width"
//   | "height"
//   | "margin"
//   | "children"
//   | "fluid"
//   | "borderRadius"
//   | "boxShadow"
//   | "overlay",
//   "div" | "section" | "article" | "footer" | "header"
// > &
//   TemplateProps;
