import {
  BackgroundProps,
  BorderProps,
  BorderRadiusProps,
  BoxShadowProps,
  ColorProps,
  FlexColumnProps,
  FlexProps,
  FontSizeProps,
  MarginProps,
  //OverlayProps,
  PaddingProps,
} from "@uiTypes";
import { default as pTS } from "./asInline";
import propToClass from "./asClassName";

type PropStyleHanlderProps = BorderProps &
  BackgroundProps &
  BorderRadiusProps &
  BoxShadowProps &
  ColorProps &
  FlexProps &
  FontSizeProps &
  MarginProps &
  //OverlayProps &
  PaddingProps & {
    userStyle?: React.CSSProperties;
    flexColumns?: FlexColumnProps;
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
 *   - `inlineStyles` - The styles to be applied inline using the `style` attribute, generated from object-based props. Make sure you destructure or use object return added to your component' style={}
 *   - `classNameStyles` - The class names to be applied to the component, generated from predefined union string props. Make sure you add it to your classNames utility or to your component' className={}
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

export const propStyleHandler = (props: PropStyleHanlderProps = {}) => {
  const {
    border,
    background,
    borderRadius,
    boxShadow,
    color,
    flex,
    fontSize,
    margin,
    padding,
    flexColumns,
    userStyle,
  } = props;
  let className = [];
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
  //Margin classes ie. m-sm m-md...
  if (margin && typeof margin === "string") {
    margin === "zero" ? className.push("m-0") : className.push("p-" + margin);
  }
  //Color class ie. color-primary...
  if (color && typeof color === "string") {
    className.push(propToClass.color(color));
  }

  //FontSize class ie. font-size-sm
  if (fontSize && typeof fontSize === "string") {
    className.push("font-size-" + fontSize);
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

  // const classes = propToClass.flexClasses( flex );
  // classes && className.push(classes);
  // Create the base style object

  let inline: React.CSSProperties = {
    ...userStyle,
    // Inline styles modifiers ie. paddingTop: 10px, marginBottom: 3%.
    ...(typeof padding === "object" ? pTS.padding(padding) : {}),
    ...(typeof margin === "object" ? pTS.margin(margin) : {}),
    ...(typeof background === "object" ? pTS.background(background) : {}),
    ...(typeof border === "object" && !border.value ? pTS.border(border) : {}),
    ...(typeof borderRadius === "object" ? pTS.borderRadius(borderRadius) : {}),
    ...(typeof fontSize === "object" ? pTS.fontSize(fontSize) : {}),
  };

  return { className: className.join(" "), inline };
};
