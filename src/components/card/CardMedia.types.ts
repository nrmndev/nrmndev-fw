import { UtilityPartialProps } from "@uiTypes";

export type CardMediaComponentProps = UtilityPartialProps<
  "height" | "background",
  "div"
> & { image: string };
