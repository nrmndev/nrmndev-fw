import { AsProps, PickUtilityProps } from "@uiTypes";

export type TypographyComponentProps = PickUtilityProps<
  "color" | "text" | "margin" | "font" | "children"
> &
  AsProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span">;
