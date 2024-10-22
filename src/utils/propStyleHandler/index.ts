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
  FontProps,
  HeightProps,
  MarginProps,
  PaddingProps,
  PositionProps,
  TextProps,
  WidthProps,
} from "@uiTypes";

import { getStyle } from "./getStyle";

export type PropStyleHandlerProps = BorderProps &
  BackgroundProps &
  BorderRadiusProps &
  BoxShadowProps &
  ColorProps &
  ColumnBreakpointProps &
  DisplayProps &
  FlexProps &
  HeightProps &
  FontProps &
  MarginProps &
  TextProps &
  PositionProps &
  WidthProps &
  PaddingProps &
  FlexColumnProps & {
    style?: React.CSSProperties;
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

export const propStyleHandler = (props: PropStyleHandlerProps) => {
  //Initialize variable
  let styleAsClassNames: string[] = [];
  let styleAsInlineStyle: React.CSSProperties = {};

  // Helper function to process style
  const processStyle = (getStyleFn: Function, prop: any) => {
    //console.log(`processStyle prop:` + JSON.stringify(prop));
    const { classes, inline } = getStyleFn(prop);
    classes && styleAsClassNames.push(classes);
    inline && Object.assign(styleAsInlineStyle, inline);
  };

  //User-defined ClassNames
  const { className: userDefinedClassNames } = props;
  userDefinedClassNames && styleAsClassNames.push(userDefinedClassNames);

  //Utility handle for Padding
  if (props.padding) processStyle(getStyle.padding, { padding: props.padding });

  //Utility handle for Color
  if (props.color) processStyle(getStyle.color, { color: props.color });

  //Utility handle for Text
  const textProps = {
    align: props.text?.align,
    decoration: props.text?.decoration,
    transform: props.text?.transform,
  };
  if (textProps) processStyle(getStyle.text, { text: textProps });

  //Utility handle for FontSize
  if (props.font) processStyle(getStyle.font, { font: props.font });

  //Utility handle for Background classes
  if (props.background)
    processStyle(getStyle.background, { background: props.background });

  //Utility handle for BorderRadius
  if (props.borderRadius)
    processStyle(getStyle.borderRadius, { borderRadius: props.borderRadius });

  //Utility handle for Border
  if (props.border) processStyle(getStyle.border, { border: props.border });

  //Utility handle for Margin
  /**Discriminating Union Margin classes */
  if (props.margin) processStyle(getStyle.margin, { margin: props.margin });

  //Utility handle for Height
  if (props.height) processStyle(getStyle.height, { height: props.height });

  //Utility handle for Width
  if (props.width) processStyle(getStyle.width, { width: props.width });

  //Utility handle for Display
  if (props.display) processStyle(getStyle.display, props.display);

  //Utility handle for BoxShadow

  const { boxShadow } = props;
  boxShadow && styleAsClassNames.push(boxShadow);

  //Utility handle for FlexColumns
  const flexColumnProps = {
    xsColumns: props.xsColumns,
    smColumns: props.smColumns,
    mdColumns: props.mdColumns,
    lgColumns: props.lgColumns,
    xlColumns: props.xlColumns,
    xxlColumns: props.xxlColumns,
  };
  if (flexColumnProps)
    processStyle(getStyle.flexColumns, { flexColumns: flexColumnProps });

  //Utility handle for Responsive Column BreakPoints
  const columnBreakPointProps = {
    xs: props.xs,
    sm: props.sm,
    md: props.md,
    lg: props.lg,
    xl: props.xl,
    xxl: props.xxl,
  };
  if (columnBreakPointProps)
    processStyle(getStyle.columnBreakPoint, columnBreakPointProps);

  //Utility handle for Flex
  if (props.flex) processStyle(getStyle.flex, { flex: props.flex });

  //Utility handle for Flex
  if (props.position)
    processStyle(getStyle.position, { position: props.position });

  //User-defined styles
  const { style: userStyle } = props;
  Object.assign(styleAsInlineStyle, convertCSSPropToString(userStyle));

  //CONVERT React.CSSProperties into a CSS-friendly string literal
  let styled: string | undefined =
    convertCSSPropToString(styleAsInlineStyle) ?? undefined;

  //console.log(styleAsInlineStyle);
  //Sanitize classes by removing spaces and undefined.
  const sanitizedstyleAsClassNames = styleAsClassNames.filter((c) => c !== "");
  return {
    className: sanitizedstyleAsClassNames.join(" "),
    styled,
  };
};

const convertCSSPropToString = (cssProp?: React.CSSProperties) => {
  if (!cssProp) return;
  return Object.entries(cssProp)
    .map(([key, value]) => {
      const cssKey = key.replace(
        /[A-Z]/g,
        (match) => `-${match.toLowerCase()}`
      ); // Convert camelCase to kebab-case
      return `${cssKey}: ${value};`;
    })
    .join(" ");
};
