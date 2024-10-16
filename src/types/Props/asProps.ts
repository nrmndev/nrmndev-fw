/**
 * 
 * WORKING VERSION 1

// export type AsImgProps = {
//   as?: "img";
//   src: string;
//   alt?: string;
//   href?: never;
//   target?: never;
//   rel?: never;
// };

// export type AsAnchorProps = {
//   as?: "a";
//   href: string;
//   target?: "_blank" | "_parent" | "_top" | "_self";
//   rel?: "noreferrer" | "referrer";
//   alt?: never;
//   src?: never;
// };

// export type AsProps = AsImgProps | AsAnchorProps | { as: "div" };

// AsInput number, text, email, password...
// AsVideo... {src}
// AsAudio... {src}
// AsIframe... {src}
 */

// AsOptionalProps is needed for UtilityComponentProps to accept what's supposed to be for
// the dedicated element
export type AsOptionalProps = {
  src?: string;
  alt?: string;
  href?: string;
  target?: "_blank" | "_parent" | "_top" | "_self";
  rel?: "noreferrer" | "referrer";
};

type AsProps<T extends string, U extends Record<string, any>> = {
  as?: T; // Enforce that 'as' is one of the provided types
} & {
  [K in keyof U]: K extends "as" ? U[K] : U[K] extends undefined ? never : U[K];
};

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

// Use the utility type to define specific prop types
export type AsImgProps = AsProps<"img", ImgProps>;
export type AsAnchorProps = AsProps<"a", AnchorProps>;

// Create a union type for both
export type AsComponentProps = AsImgProps | AsAnchorProps;
