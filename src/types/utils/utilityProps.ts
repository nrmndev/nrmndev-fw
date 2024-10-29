import { PropStyleHandlerProps } from "@uiTypes";
import React from "react";

export type UtilityProps<T extends React.ElementType = "div"> = {
  as: keyof React.JSX.IntrinsicElements | React.ElementType;
} & PropStyleHandlerProps &
  React.ComponentPropsWithoutRef<T>;

/**
 *
 * Pick from all the props but omit `className` and `style` and intersect as those,
 * as they should always be present
 *
 * @template K - The keys to pick from `UtilityProps`
 * @returns prop type ie. {color, border, margin, ...}
 */
// export type PickUtilityProps<K extends keyof PropStyleHandlerProps> =
//   Pick<PropStyleHandlerProps, K>

export type PickUtilityProps<K extends keyof PropStyleHandlerProps> = Omit<
  Pick<PropStyleHandlerProps, K>,
  "className" | "style"
> & {
  className?: string;
  style?: React.CSSProperties;
};

/**
 *
 * Please make sure to declare/add keys of UtilityProps here in order for splitProps to handle automatic prop implementation
 * otherwise, it will be added as intrinsicProps.
 *
 */
// export const KeyOfUtilityProps = [
//   "background",
//   "border",
//   "borderRadius",
//   "className",
//   "color",
//   "columnItems",
//   "display",
//   "flex",
//   "font",
//   "height",
//   "lg",
//   "margin",
//   "padding",
//   "position",
//   "sm",
//   "style",
//   "text",
//   "width",
//   "xl",
//   "xs",
//   "xxs",
// ];
