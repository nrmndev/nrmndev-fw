import {
  BackgroundProps,
  BaseProps,
  BoxShadowProps,
  HeightProps,
  MarginProps,
  PaddingProps,
} from "@uiTypes";

export type CardMediaComponentProps = {
  image: string;
  //title?: string;   //check implementation of title from MUI
} & HeightProps;

export type CardContentComponentProps = PaddingProps & BaseProps;

export type CardComponentProps = BaseProps &
  BackgroundProps &
  BoxShadowProps &
  PaddingProps &
  MarginProps;
