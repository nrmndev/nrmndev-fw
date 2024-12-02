import { UtilityComponentProps } from "_uiTypes";

export type ComponentAsTypographyProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};
export type TypographyComponentProps = UtilityComponentProps<
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
>; //& {custom: string};
// export type TypographyComponentProps = UtilityPartialProps<
//   "color" | "text" | "margin" | "font" | "children" | "display",
//   "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"
// > & {
//   template?: number;
// };
