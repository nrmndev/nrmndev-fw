import { UtilityPartialProps } from "@uiTypes";

export type CardComponentProps = UtilityPartialProps<
  "background" | "boxShadow" | "margin" | "padding" | "children",
  "div"
>;
