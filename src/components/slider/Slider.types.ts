import { UtilityComponentProps } from "_uiTypes";

export type SliderComponentProps = UtilityComponentProps<"div"> & {
  template?: number;
  images: string[];
};
