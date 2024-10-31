import { UtilityPartialProps } from "@uiTypes";

export type TypographyComponentProps = UtilityPartialProps<
  "color" | "text" | "margin" | "font" | "children",
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
>;
