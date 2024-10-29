// import {
//   BackgroundProps,
//   BorderProps,
//   BorderRadiusProps,
//   BoxShadowProps,
//   ColorProps,
//   ColumnBreakpointProps,
//   ColumnItemsProps,
//   DisplayProps,
//   FlexProps,
//   FontProps,
//   HeightProps,
//   MarginProps,
//   PaddingProps,
//   PositionProps,
//   TextProps,
//   WidthProps,
// } from "@uiTypes";
// import React from "react";

// export type UtilityProps<T extends React.ElementType = "div"> = {
//   as: keyof React.JSX.IntrinsicElements | React.ElementType;
// } & BorderProps &
//   BackgroundProps &
//   BorderRadiusProps &
//   BoxShadowProps &
//   ColorProps &
//   ColumnBreakpointProps &
//   DisplayProps &
//   FlexProps &
//   HeightProps &
//   FontProps &
//   MarginProps &
//   TextProps &
//   PositionProps &
//   WidthProps &
//   PaddingProps &
//   ColumnItemsProps & {
//     className?: string;
//     style?: React.CSSProperties;
//   } & React.ComponentPropsWithoutRef<T>;

// export type PickUtilityProps<K extends keyof UtilityProps> = Pick<
//   UtilityProps,
//   K
// > & {
//   className?: string;
//   style?: React.CSSProperties;
// };

// // export type PolymorphicProps<T extends React.ElementType> = UtilityProps<T> &
// //   Omit<React.ComponentPropsWithoutRef<T>, keyof UtilityProps<T>> & {
// //     ref?: React.Ref<React.ElementType>;
// //   };
