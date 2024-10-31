import { UtilityProps } from "@uiTypes";
import { convertCSSPropToString, propStyleHandler, splitProps } from "@utils";
import { forwardRef, useMemo } from "react";
import styled from "styled-components";
import React from "react";

/***
 * `UtilityStyledComponent` is a polymorphic component that provides utility-based styling
 * and flexibility. It allows you to extend and customize styling and intrinsic attributes
 * through `UtilityProps`, offering a structured approach to manage utility and intrinsic properties
 * without repeating style definitions.
 *
 * This component dynamically applies utility-based classes and inline styles
 * generated from `UtilityProps`, supporting both styled-components CSS and standard inline styles.
 *
 * @template T - The type of the component or element to render, defaulting to "div".
 *
 * @param {Object} props - The props for the component.
 * @param {T | "div"} [props.as] - The element type or component to render, e.g., "div", "button", "a", or custom component.
 * @param {React.CSSProperties} [props.style] - Inline styles to apply to the component.
 * @param {UtilityProps<T>} props - Additional utility props and intrinsic attributes
 *                                  passed to `UtilityStyledComponent`.
 * @param {React.Ref<React.ElementRef<T>>} [ref] - A forwarded ref to the underlying DOM element or component.
 *
 * @returns {JSX.Element} - A valid JSX element with merged utility props, intrinsic attributes,
 *                          and either calculated class names or inline styles.
 *                          If utility-based styles are required, renders a styled-component.
 *
 * This component automatically:
 * - Splits and memoizes utility and intrinsic props.
 * - Handles className and inline style generation for utility-based props.
 * - Renders a `StyledComponent` if inline styles are present; otherwise, it renders the specified element.
 */
const UtilityStyledComponent = <T extends React.ElementType = "div">(
  { as: Component, style, ...props }: UtilityProps<T>,
  ref?: React.Ref<React.ElementRef<T>>
) => {
  //const Component = as || "div";

  // Split props into utilityProps and intrinsicProps
  const { utilityProps, intrinsicProps } = useMemo(() => {
    return splitProps(props);
  }, [props]);
  //const { utilityProps, intrinsicProps } = memoizedSplittedProps;

  // Handle utilityProps, returning className and inlineStyle for styling
  const { className, inlineStyle } = useMemo(() => {
    return propStyleHandler({ ...utilityProps });
  }, [utilityProps]);
  //const { className, inlineStyle } = memoizedPropStyleHandler;

  // Convert inline styles to a `CSS-friendly` string for styled-components
  const CSSString = convertCSSPropToString(inlineStyle);

  //Apply common properties for the component including classNames from propStyleHandler and intrinsicProps from splitProps
  const commonProps = {
    style,
    ref,
    ...(className ? { className } : {}),
    ...intrinsicProps,
  };

  // Conditionally render a styled-component or a standard JSX element
  return CSSString !== "" ? (
    <StyledComponent
      {...commonProps}
      $ss={CSSString}
      as={Component as React.ElementType}
      ref={ref}
    />
  ) : (
    <Component {...commonProps} ref={ref} />
  );
};

const StyledComponent = styled.div<{ $ss?: string }>`
  ${({ $ss }) => {
    return $ss;
  }}
`;

// Disable automatic class name generation
//StyledComponent.displayName = "StyledComponent";
//StyledComponent.styledComponentId = "utilityStyled"; // Custom ID

/* Custom components may not automatically inherit the same set of HTMLAttributes unless explicitly defined.
 * This is because custom components have their own defined prop types, which may not include all the HTML attributes by default.
 * Defined function signature to apply props and ref
 */
export default forwardRef(UtilityStyledComponent);
