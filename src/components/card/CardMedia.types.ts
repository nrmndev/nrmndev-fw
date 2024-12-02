import { UtilityPartialProps } from "_uiTypes";

export type CardMediaComponentProps = UtilityPartialProps<
  "height" | "background",
  "div"
> & { image: string };
