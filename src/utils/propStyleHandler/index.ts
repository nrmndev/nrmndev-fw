import {
  BackgroundProps,
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
  ColorProps,
  ColumnBreakpointProps,
  DisplayProps,
  FlexColumnProps,
  FlexProps,
  FontSizeProps,
  HeightProps,
  //OverlayProps,
  PaddingProps,
  TextAlignProps,
  TextDecorationProps,
  TextTransformProps,
  WidthProps,
} from "@uiTypes";
import { default as pTS } from "./asInline";
import { default as propToClass, AllMarginProps } from "./asClassName";
//import { MarginDiscriminatedProps } from "types/props/marginProps";

export type PropStyleHanlderProps = BorderProps &
  BackgroundProps &
  BorderRadiusProps &
  BoxShadowProps &
  ColorProps &
  ColumnBreakpointProps &
  DisplayProps &
  FlexProps &
  HeightProps &
  FontSizeProps &
  AllMarginProps &
  TextDecorationProps &
  TextTransformProps &
  TextAlignProps &
  //OverlayProps &
  WidthProps &
  PaddingProps & {
    userStyle?: React.CSSProperties;
    flexColumns?: FlexColumnProps;
    className?: string;
  };

/**
 * Handles component props related to styles, generating both inline styles for object values and class names for predefined union strings.
 *
 * @typedef {object} PropStyleHanlderProps
 * @property {BackgroundProps} background - Background-related properties. Object values (e.g., `{ width: 2, color: "black" }`) will generate inline styles. Predefined union strings will generate class names.
 * @property {BorderProps} border - Border-related properties. Object values (e.g., `{ width: 2, color: "black" }`) will generate inline styles. Predefined union strings will generate class names.
 * @property {BorderRadiusProps} borderRadius - Border-radius properties. Object values will be converted to inline styles, while predefined union values will generate class names.
 * @property {ColorProps} color - Color properties, such as text or background color. If an object is passed (e.g., `{ value: "#fff" }`), it returns an inline style. Predefined union strings like `"primary"` return class names.
 * @property {FontSizeProps} fontSize - Font size properties. Object values (e.g., `{ value: 16, unit: "px" }`) return inline styles, whereas predefined union strings (`"sm" | "md" | "lg"`) return class names.
 * @property {PaddingProps} padding - Padding properties. If an object is passed (e.g., `{ top: 10, bottom: 10 }`), it returns inline styles. Predefined strings like `"sm" | "md" | "lg"` return class names.
 * @property {MarginProps} margin - Margin properties. Object values generate inline styles, and predefined union strings generate class names.
 * @property {React.CSSProperties} [userStyle] - Optional user-defined inline styles, allowing further customization of the component's styles.
 *
 * @param {PropStyleHanlderProps} props - The collection of style-related props passed into the component.
 * @returns {object} An object containing two objects:
 *   - `styled` - The props that need calculation, (mostly in object form ie. margin={{top:2,unit:"px"}}) will be handled by propToStyle. PropToStyle has a custom methods for each property and will return a css-friendly string literal. This string literal will be added in the variable `{styled}` to be used in your component.
 *   - `className` - The class names to be applied to the component, generated from predefined union string props. Make sure you add it to your classNames utility or to your component' className={}
 *
 * @example
 * const styles = propStyleHandler({
 *   border: { width: 2, color: "black" }, // inline styles
 *   borderRadius: "rounded", // class name
 *   fontSize: { value: 16, unit: "px" }, // inline style
 *   padding: "sm", // class name
 *   margin: "lg", // class name
 *   userStyle: { display: 'block' }, // additional inline style
 * });
 *
 * // Result:
 * // {
 * //   inline: { borderWidth: "2px", borderColor: "black", fontSize: "16px", display: 'block' },
 * //   className: "borderRadius-rounded p-sm m-lg"
 * // }
 */

export const propStyleHandler = (props: PropStyleHanlderProps) => {
  const {
    background,
    border,
    borderRadius,
    boxShadow,
    color,
    display,
    flex,
    flexColumns,
    fontSize,
    hMargin,
    lg,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    md,
    padding,
    sm,
    textAlign,
    textDecoration,
    textTransform,
    height,
    userStyle,
    vMargin,
    width,
    xl,
    xs,
    xxl,
    className: componentClassName,
  } = props;
  let className = [];
  if (componentClassName) {
    className.push(componentClassName.split(" "));
  }
  //Background classes ie. p-sm p-md...
  if (background && typeof background === "string") {
    className.push("bg-" + background);
  }
  //Background classes ie. p-sm p-md...
  if (borderRadius && typeof borderRadius === "string") {
    className.push("br-" + borderRadius);
  }
  //Padding classes ie. p-sm p-md...
  if (padding && typeof padding === "string") {
    padding === "zero" ? className.push("p-0") : className.push("p-" + padding);
  }

  //Discriminating Union Margin classes ie. m-sm | mh-md | mb-xxl ..
  //It will only be the either of three, type safety but has to pass everything to propToClass.margin
  //Implementation detail is in `{propToClass.margin}`
  const allMarginProps = {
    vMargin,
    hMargin,
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
  };

  if (allMarginProps) {
    className.push(propToClass.margin(allMarginProps));
  }
  //Color class ie. color-primary...
  if (color && typeof color === "string") {
    className.push(propToClass.color(color));
  }

  //Column BreakPoints
  if (xl || xs || xxl || md || sm || lg) {
    className.push(propToClass.columnBreakpoints({ xl, xs, xxl, md, sm, lg }));
  }

  //Display
  if (display) {
    className.push(propToClass.display({ display }));
  }
  if (textDecoration) {
    className.push(propToClass.text({ textDecoration }));
  }
  if (textTransform) {
    className.push(propToClass.text({ textTransform }));
  }
  if (textAlign) {
    className.push(propToClass.text({ textAlign }));
  }
  //FontSize class ie. font-size-sm
  if (fontSize && typeof fontSize === "string") {
    className.push("font-" + fontSize);
  }
  //BoxShadow class ie. box-shadow-1
  if (boxShadow && typeof boxShadow === "string") {
    className.push(boxShadow);
  }
  //FlexColumns class ie. sm-flex-3
  if (flexColumns) {
    className.push(propToClass.flexColumns(flexColumns));
  }
  //Border class ie. border-sm
  if (border) {
    className.push(border.style ? `border-${border.style}` : `border-solid`);
    className.push(
      border.color ? `border-color-${border.color}` : `border-color-black`
    );
    border.value && className.push("border-" + border.value);
  }

  if (flex) {
    className.push(propToClass.flex(flex));
  }

  //CONVERT React.CSSProperties into a CSS-friendly string literal
  let userInlineStyle = "";
  if (userStyle) {
    userInlineStyle = Object.entries(userStyle)
      .map(([key, value]) => {
        const cssKey = key.replace(
          /[A-Z]/g,
          (match) => `-${match.toLowerCase()}`
        ); // Convert camelCase to kebab-case
        return `${cssKey}: ${value};`;
      })
      .join(" ");
  }

  let styled: string = `
    ${userInlineStyle ?? ""}
    ${typeof padding === "object" ? pTS.padding(padding) ?? "" : ""}
    ${typeof height === "object" ? pTS.height({ height }) ?? "" : ""}
    ${typeof width === "object" ? pTS.width({ width }) ?? "" : ""}
    
    ${typeof margin === "object" ? pTS.margin(margin) ?? "" : ""}
    ${typeof background === "object" ? pTS.background(background) ?? "" : ""}
     ${
       typeof border === "object" && !border.value
         ? pTS.border(border) ?? ""
         : ""
     }
     ${
       typeof borderRadius === "object"
         ? pTS.borderRadius(borderRadius) ?? ""
         : ""
     }
     ${
       typeof fontSize === "object" ? pTS.fontSize(fontSize) ?? "" : ""
     }`.trim();

  return {
    className: className.join(" ").trim(),
    styled: styled.length > 0 ? styled : undefined,
  };
};

// let inline: React.CSSProperties = {
//   ...userStyle,
//   // Inline styles modifiers ie. paddingTop: 10px, marginBottom: 3%.
//   ...(typeof padding === "object" ? pTS.padding(padding) : {}),
//   ...(typeof margin === "object" ? pTS.margin(margin) : {}),
//   ...(typeof background === "object" ? pTS.background(background) : {}),
//   ...(typeof border === "object" && !border.value ? pTS.border(border) : {}),
//   ...(typeof borderRadius === "object" ? pTS.borderRadius(borderRadius) : {}),
//   ...(typeof fontSize === "object" ? pTS.fontSize(fontSize) : {}),
// };
