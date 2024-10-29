import { PickUtilityProps } from "@uiTypes";

export type CardMediaComponentProps = PickUtilityProps<
  "height" | "background"
> & { image: string };
