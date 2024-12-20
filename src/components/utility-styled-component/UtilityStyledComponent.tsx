import { UtilityProps } from "_uiTypes";
import { convertCSSPropToString, propStyleHandler, splitProps } from "_utils";
import { forwardRef, useMemo } from "react";
import styled from "styled-components";
import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

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
  { as: Component, className, style, usx, ...restProps }: UtilityProps<T>,
  ref?: React.Ref<React.ElementRef<T>>
) => {
  //console.log(`utility componenet`, props.border);

  /***
   * Sanitize all props, separating intrinsicProps to avoid incompatibility spreading of unrecognized props.
   */
  const { utilityProps, intrinsicProps } = useMemo(() => {
    return splitProps(restProps);
  }, [restProps]);
  //console.log(`utility props`, utilityProps.font);

  // Handle utilityProps, returning className and inlineStyle for styling
  const {
    className: propStyleClassName,
    inlineStyle,
    hoverInlineStyle,
    inviewInlineStyle,
  } = useMemo(() => {
    return propStyleHandler({ ...usx });
  }, [utilityProps]);
  //console.log(inlineStyle);
  // Convert inline styles to a `CSS-friendly` string for styled-components
  const CSSString = convertCSSPropToString(inlineStyle);
  // Convert hover inline styles to a `CSS-friendly` string for styled-components
  const HoverCSSString = convertCSSPropToString(hoverInlineStyle);
  //Apply common properties for the component including classNames from propStyleHandler and intrinsicProps from splitProps
  const combineClassNames = classNames(className, propStyleClassName);
  const commonProps = {
    style,
    ref,
    ...(combineClassNames ? { className: combineClassNames } : {}),
    ...intrinsicProps,
  };

  // console.log(inViewThreshold);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Combine the forwarded ref and the ref from useInView
  const combinedRef = ref
    ? (node: HTMLElement | null) => {
        inViewRef(node); // useInView ref
        if (ref) {
          if (typeof ref === "function") {
            (ref as (instance: HTMLElement | null) => void)(node); // Call function-based refs
          } else {
            (ref as React.MutableRefObject<HTMLElement | null>).current = node; // Assign to object-based refs
          }
        }
      }
    : inViewRef;
  // Conditionally render a styled-component or a standard JSX element
  return (
    <StyledComponent
      {...commonProps}
      $css={CSSString}
      $hcss={HoverCSSString}
      as={Component as React.ElementType}
      ref={combinedRef}
      $inView={inView ? inviewInlineStyle : {}}
      // ref={combinedRef}
      // style={{
      //   opacity: inView ? 1 : 0,
      //   transition: "opacity 0.5s ease-in-out",
      // }}
    />
  );
};

const StyledComponent = styled.div<{
  $css?: string;
  $hcss?: string;
  $inView?: string;
}>`
  /* Apply $ss as standard styles */
  ${({ $css }) => {
    return $css;
  }};
  /* Apply $inView as standard styles */
  ${({ $inView }) => {
    return $inView;
  }};
  /* Apply $is as hover styles */
  &:hover {
    ${({ $hcss }) => {
      return $hcss;
    }};
  }
`;

// Disable automatic class name generation
//StyledComponent.displayName = "StyledComponent";
//StyledComponent.styledComponentId = "utilityStyled"; // Custom ID

/* Custom components may not automatically inherit the same set of HTMLAttributes unless explicitly defined.
 * This is because custom components have their own defined prop types, which may not include all the HTML attributes by default.
 * Defined function signature to apply props and ref
 */
export default forwardRef(UtilityStyledComponent);
