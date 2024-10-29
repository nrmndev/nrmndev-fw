import { UtilityProps } from "@uiTypes";
import { convertCSSPropToString, propStyleHandler, splitProps } from "@utils";
import { forwardRef, useMemo } from "react";
import styled from "styled-components";
import React from "react";

/***
 *
 * UtilityStyledComponent is Polymorphic Component with Utility Props predefined from UtilityProps
 * This handles the complexity of creating component of repeating yourself by passing utilityProps you want your compontent to have.
 * @params {as, ...props as UtilityProps}
 * @returns Valid JSX Component with utility and IntrinsicAttributes attached to it.
 * Valid JSX Component with classNames, and module css from styled-components (for calculated styles and inline style)
 *
 *
 */

const UtilityStyledComponent = <T extends React.ElementType>(
  { as, style, ...props }: UtilityProps<T>,
  ref?: React.Ref<React.ElementRef<T>>
) => {
  const Component = as || "div";

  const memoizedSplittedProps = useMemo(() => {
    return splitProps(props);
  }, [props]);
  const { utilityProps, intrinsicProps } = memoizedSplittedProps;

  const memoizedStyles = useMemo(() => {
    return propStyleHandler({ ...utilityProps });
  }, [utilityProps]);

  const { className, inlineStyle } = memoizedStyles;
  // const componentProps = {
  //   ...(className ? { className: className } : {}),
  // };

  const CSSString = convertCSSPropToString(inlineStyle);

  const commonProps = {
    style,
    ref,
    className,
    ...intrinsicProps,
  };

  return CSSString !== "" ? (
    <StyledComponent {...commonProps} as={as} $ss={CSSString} />
  ) : (
    <Component {...commonProps} className={className} />
  );
};

const StyledComponent = styled.div<{ $ss?: string }>`
  ${({ $ss }) => $ss}
`;

// Disable automatic class name generation
StyledComponent.displayName = "StyledComponent";
//StyledComponent.styledComponentId = "utilityStyled"; // Custom ID
export default forwardRef(UtilityStyledComponent);

// return (
//   <StyledComponent
//     as={as}
//     style={style}
//     className={className}
//     $ss={CSSString}
//     {...intrinsicProps}
//     ref={ref}
//   >
//     {intrinsicProps.children}
//   </StyledComponent>
// );
// return inlineStyle ? (
//   <StyledComponent
//     as={as}
//     style={style}
//     className={className}
//     $ss={CSSString}
//     {...intrinsicProps}
//     ref={ref}
//   >
//     {intrinsicProps.children}
//   </StyledComponent>
// ) : (
//   <Component
//     style={style}
//     className={className}
//     ref={ref}
//     {...intrinsicProps}
//   >
//     {intrinsicProps.children}
//   </Component>
// );
