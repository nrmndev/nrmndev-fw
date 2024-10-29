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

type As<T extends string, U extends Record<string, any>> = {
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
export type AsImgProps = As<"img", ImgProps>;
export type AsAnchorProps = As<"a", AnchorProps>;

// Create a union type for both
export type AsComponentProps = AsImgProps | AsAnchorProps;
