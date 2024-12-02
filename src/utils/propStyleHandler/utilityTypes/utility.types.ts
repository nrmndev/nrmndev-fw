import { PropStyleHandlerProps, USXProps, UtilityBaseProps } from "_uiTypes";
import React, { HTMLAttributes } from "react";

export type UtilityProps<T extends React.ElementType = "div"> = {
  as: T | keyof React.JSX.IntrinsicElements;
  ref?: React.Ref<React.ElementRef<T>>;
} & USXProps &
  React.ComponentPropsWithoutRef<T> &
  React.HTMLAttributes<T>;

//WORKING
// export type UtilityProps<T extends React.ElementType = "div"> = {
//   as: keyof React.JSX.IntrinsicElements | React.ElementType;
//   //as: T;
// } & PropStyleHandlerProps &
//   HTMLAttributes<T> &
//   AriaAttributes &
//   React.ComponentPropsWithoutRef<T>;
/**
 *
 * Pick from all the props but omit `className` and `style` and intersect as those,
 * as they should always be present
 *
 * @template K - The keys to pick from `UtilityProps`
 * @returns prop type ie. {color, border, margin, ...}
 */

// export type PickUtilityProps<K extends keyof PropStyleHandlerProps> = Omit<
//   Pick<PropStyleHandlerProps, K>,
//   "className" | "style"
// > &
//   ClassNameAndStyleProps;

type ClassNameAndStyleProps = {
  className?: string;
  style?: React.CSSProperties;
};

export type PickUtilityProps<K extends keyof PropStyleHandlerProps> = Omit<
  Pick<PropStyleHandlerProps, K>,
  "className" | "style"
>;

/**
 * Represents the required props for a utility component.
 *
 * This type combines utility props that are required with additional
 * class name and style properties, and allows for an `as` prop to specify
 * the underlying HTML element. It also extends HTML attributes for the
 * specified element type.
 *
 * @template T - A key of `PropStyleHandlerProps` representing the required
 *               utility properties.
 * @template K - A key of JSX.IntrinsicElements representing the polymhorpic
 *               `as` property and its HTMLAttributes.
 * @example type MyComponentType = UtilityPartialProps<"color"|"margin"|"padding","div"|"section"|"footer">
 *
 * @returns {object} (props) { color, margin, padding, ...HTMLAttributes<K> }
 *
 */

export type UtilityRequiredProps<
  T extends keyof PropStyleHandlerProps,
  K extends keyof PropStyleHandlerProps
> = Required<PickUtilityProps<T> & ClassNameAndStyleProps> & {
  as?: K;
} & HTMLAttributes<K> &
  UtilityBaseProps;

/**
 * Represents the optional props for a utility component.
 *
 * This type combines utility props that are required with additional
 * class name and style properties, and allows for an `as` prop to specify
 * the underlying HTML element. It also extends HTML attributes for the
 * specified element type.
 *
 * @template T - A key of `PropStyleHandlerProps` representing the required
 *               utility properties.
 * @template K - A key of JSX.IntrinsicElements representing the polymhorpic
 *               `as` property and its HTMLAttributes.
 * @example type MyComponentType = UtilityPartialProps<"color"|"margin"|"padding","div"|"section"|"footer">
 * 
 * @returns {object} (props) { color, margin, padding, ...HTMLAttributes<K> }
 * 

 */

export type UtilityPartialProps<
  T extends keyof PropStyleHandlerProps,
  K extends keyof React.JSX.IntrinsicElements
> = Partial<PickUtilityProps<T> & ClassNameAndStyleProps> & {
  as?: K;
  ref?: React.Ref<React.ElementRef<K>>;
} & HTMLAttributes<K> &
  UtilityBaseProps;

//REVISED PropExtending
type BaseIntrinsicProps = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export type UtilityComponentProps<T extends React.ElementType = "div"> =
  USXProps &
    BaseIntrinsicProps & {
      as?: T | keyof React.JSX.IntrinsicElements;
      children?: React.ReactNode;
      name?: string;
    } & HTMLAttributes<T>; //For now add HTMLAttributes

export type UtilityComponentPropsWithRef<T extends React.ElementType = "div"> =
  USXProps &
    BaseIntrinsicProps & {
      as?: T | keyof React.JSX.IntrinsicElements;
      children?: React.ReactNode;
    } & HTMLAttributes<T> & { ref?: React.Ref<T> };

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
