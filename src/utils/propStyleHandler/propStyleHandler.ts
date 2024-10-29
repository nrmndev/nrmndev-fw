import { PropStyleHandlerProps } from "@uiTypes";
import { getStyle } from "@utils";
import React from "react";

/**
 * Handles component props related to styles, generating both inline styles for object values and class names for predefined union strings.
 *
 * @property {BackgroundProps} background - Background-related properties. Object values (e.g., `{ width: 2, color: "black" }`) will generate inline styles. Predefined union strings will generate class names.
 * @property {BorderProps} border - Border-related properties. Object values (e.g., `{ width: 2, color: "black" }`) will generate inline styles. Predefined union strings will generate class names.
 * @property {BorderRadiusProps} borderRadius - Border-radius properties. Object values will be converted to inline styles, while predefined union values will generate class names.
 * @property {ColorProps} color - Color properties, such as text or background color. If an object is passed (e.g., `{ value: "#fff" }`), it returns an inline style. Predefined union strings like `"primary"` return class names.
 * @property {FontSizeProps} fontSize - Font size properties. Object values (e.g., `{ value: 16, unit: "px" }`) return inline styles, whereas predefined union strings (`"sm" | "md" | "lg"`) return class names.
 * @property {PaddingProps} padding - Padding properties. If an object is passed (e.g., `{ top: 10, bottom: 10 }`), it returns inline styles. Predefined strings like `"sm" | "md" | "lg"` return class names.
 * @property {MarginProps} margin - Margin properties. Object values generate inline styles, and predefined union strings generate class names.
 * @property {React.CSSProperties} [userStyle] - Optional user-defined inline styles, allowing further customization of the component's styles.
 *
 * @param {UtilityProps} props - The collection of style-related props passed into the component.
 * @returns {object} An object containing two objects:
 *   - `inline` - Computed style returned as React.CSSProperties
 *   - `className` - String literal from predefined classes generated by getStyle
 *
 * @example
 * const {classes,stylesInString} = propStyleHandler({
 *   border: { width: 2, color: "black" }, // inline styles
 *   borderRadius: "rounded", // class name
 *   fontSize: { value: 16, unit: "px" }, // inline style
 *   padding: "sm", // class name
 *   margin: "lg", // class name
 * });
 *
 * // Result:
 * // {
 * //   classes: "borderRadius-rounded p-sm m-lg"
 * //   inlineStyle: {borderWidth: "2px", borderColor: "black", fontSize: "16px", display: 'block'},
 * // }
 */

export const propStyleHandler = (props: PropStyleHandlerProps) => {
  //console.log(props.className);
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

  //Utility handle for Background classes
  if (props.background)
    processStyle(getStyle.background, { background: props.background });
  //Utility handle for BorderRadius
  if (props.borderRadius)
    processStyle(getStyle.borderRadius, { borderRadius: props.borderRadius });
  //Utility handle for Responsive Column BreakPoints
  if (props.sm || props.xs || props.md || props.lg || props.xs || props.xxl)
    processStyle(getStyle.columnBreakPoint, {
      xs: props.xs,
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      xxl: props.xxl,
    });
  // if (props.columnBreakpoints) {
  //   const { xs, sm, md, lg, xl, xxl } = props.columnBreakpoints;
  //   processStyle(getStyle.columnBreakPoint, {
  //     xs,
  //     sm,
  //     md,
  //     lg,
  //     xl,
  //     xxl,
  //   });
  // }
  //Utility handle for Border
  if (props.border) processStyle(getStyle.border, { border: props.border });
  //Utility handle for Color
  if (props.color) processStyle(getStyle.color, { color: props.color });
  //Utility handle for Display
  if (props.display) processStyle(getStyle.display, props.display);
  //Utility handle for Flex
  if (props.flex) processStyle(getStyle.flex, { flex: props.flex });
  //Utility handle for FlexColumns
  if (props.columnItems) processStyle(getStyle.columnItems, props.columnItems);
  //Utility handle for FontSize
  // if (props.font) processStyle(getStyle.font, { font: props.font });

  //Utility handle for Width
  if (props.width) processStyle(getStyle.width, { width: props.width });
  // //Utility handle for Height
  if (props.height) processStyle(getStyle.height, { height: props.height });
  //Utility handle for Margin
  if (props.margin) processStyle(getStyle.margin, { margin: props.margin });
  //Utility handle for Opacity
  if (props.opacity) processStyle(getStyle.opacity, { opacity: props.opacity });
  //Utility handle for Overlay
  //Utility handle for Gap
  if (props.gap) processStyle(getStyle.gap, { opacity: props.gap });
  //Utility handle for Padding
  if (props.padding) processStyle(getStyle.padding, { padding: props.padding });
  //Utility handle for Position
  if (props.position)
    processStyle(getStyle.position, { position: props.position });
  //Utility handle for Text

  if (props.text)
    processStyle(getStyle.text, {
      text: {
        align: props.text?.align,
        decoration: props.text?.decoration,
        transform: props.text?.transform,
      },
    });

  //Utility handle for BoxShadow
  const { boxShadow } = props;
  boxShadow && styleAsClassNames.push(boxShadow);

  //Sanitize classes by removing spaces and undefined.
  const sanitizedstyleAsClassNames = styleAsClassNames.filter((c) => c !== "");
  //console.log(sanitizedstyleAsClassNames);
  return {
    className: sanitizedstyleAsClassNames.join(" "),
    inlineStyle: styleAsInlineStyle,
  };
};
