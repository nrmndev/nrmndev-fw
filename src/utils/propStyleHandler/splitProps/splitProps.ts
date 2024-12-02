import { UtilityProps } from "_uiTypes";

/**
 * Splits props into two return values: `utilityProps` and `intrinsicProps`.
 * This function simplifies the handling of `UtilityTypeComponent` by allowing it to receive only `UtilityProps`
 * while enabling the optional passing of `intrinsicProps`.
 *
 * @template T - A generic type that extends `React.ElementType`, which may include types like
 *               `AriaAttributes`, `EventHandlers`, etc.
 * @param {UtilityProps | ComponentProps} props - The props to be split into utility and intrinsic properties.
 *
 * @returns {{ utilityProps: UtilityProps, intrinsicProps: object }} An object containing:
 *          - `utilityProps`: Props that are of type `UtilityProps`.
 *          - `intrinsicProps`: Remaining intrinsic properties passed to the component.
 */
export const splitProps = <T extends React.ElementType>(
  props: React.ComponentPropsWithoutRef<T>
) => {
  const utilityProps: Partial<any> = {};
  const intrinsicProps: Record<string, any> = {};
  //console.log(props);
  Object.entries(props).forEach(([key, value]) => {
    if (isUtilityKey(key)) {
      utilityProps[key] = value as UtilityProps[typeof key];
    } else {
      intrinsicProps[key] = value as keyof JSX.IntrinsicElements;
    }
  });
  //console.log(`utilityProps:` + JSON.stringify(utilityProps));
  return { utilityProps: utilityProps as UtilityProps, intrinsicProps };
};

/**
 *
 * Please make sure to declare/add keys of UtilityProps here in order for splitProps to handle automatic prop implementation
 * otherwise, it will be added as intrinsicProps.
 *
 */
export const KeyOfUtilityProps = [
  "background",
  "border",
  "borderRadius",
  "boxShadow",
  "className",
  "color",
  "columnBreakpoints",
  "columnItems",
  "display",
  "flex",
  "fluid",
  "font",
  "gap",
  "height",
  "hover",
  "lg",
  "margin",
  "md",
  "mdColumns",
  "opacity",
  "overlay",
  "padding",
  "position",
  "rounded",
  "size",
  "sm",
  "smColumns",
  "style",
  "text",
  "width",
  "xl",
  "xs",
  "xsColumns",
  "xxl",
  "xxlColumns",
  "animation",
  "translate",
  "transition",
  //"transform",
]; //Don't put `style`, `as` here

//Templating exclusion
const KeysAreUtilities = [
  ...KeyOfUtilityProps,
  "body",
  "heading",
  "icon",
  "iconSize",

  "borderColor",
  "borderStyle",
  "borderWidth",
  // "animation",
  // "translate",
  // "transition",
  // "transform",
  // "typography",
  // "decor",
  // "variant",
  "usx",
]; //"borderColor", "borderStyle", "borderWidth"];
/***
 * Check if prop passed is key of UtilityProps,
 * @returns boolean
 */
export const isUtilityKey = (key: unknown): key is keyof UtilityProps => {
  return !!KeysAreUtilities.some((k) => k === key);
};
