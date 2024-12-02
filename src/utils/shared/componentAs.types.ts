export type AsProps<
  T extends React.ReactElement | keyof React.JSX.IntrinsicElements
> = {
  as?: T;
};

export type AsOptionalProps = {
  src?: string;
  alt?: string;
  href?: string;
  target?: "_blank" | "_parent" | "_top" | "_self";
  rel?: "noreferrer" | "referrer";
};

// export type ComponentAsProps<
//   T extends string,
//   U extends Record<string, any>
// > = {
//   as?: T; // Enforce that 'as' is one of the provided types
// } & {
//   [K in keyof U]: K extends "as" ? U[K] : U[K] extends undefined ? never : U[K];
// };

import { LinkProps } from "react-scroll";
import { ComponentType } from "react";

// Extend with polymorphic support for `as` prop
export type ComponentAsProps<
  T extends ComponentType<any> | string,
  U extends Record<string, any>
> = {
  as?: T;
} & (T extends typeof import("react-scroll").Link
  ? LinkProps // Apply `LinkProps` when `as` is `Link` from `react-scroll`
  : U);
// Define the properties specific to images and anchors
type ImgProps = {
  src: string;
  alt?: string;
};

type AnchorProps = {
  href: string;
  target?: "_blank" | "_parent" | "_top" | "_self";
  rel?: "noreferrer" | "referrer";
};

export type AsTypography = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};

// Use the utility type to define specific prop types
export type AsImgProps = ComponentAsProps<"img", ImgProps>;
export type AsAnchorProps = ComponentAsProps<"a", AnchorProps>;
//export type AsTypography = As<""
// Create a union type for both
export type AsComponentProps = AsImgProps | AsAnchorProps;
