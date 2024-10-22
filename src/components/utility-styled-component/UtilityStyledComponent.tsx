import { UtilityStyledComponentProps } from "@uiTypes";
import { propStyleHandler } from "@utils";
import { useMemo } from "react";
import styled from "styled-components";

/**
 * Acts as a wrapper that handles utility props.
 * @returns Component with utility classNames or inlineStyles
 */

const UtilityStyledComponent = (props: UtilityStyledComponentProps) => {
  const {
    as: Component = "a",
    children,
    href,
    src,
    alt,
    target,
    style,
  } = props;

  const memoizedStyles = useMemo(() => {
    return propStyleHandler({ ...props });
  }, [props]);

  const { className, styled } = memoizedStyles;
  //const { className, styled } = propStyleHandler({ ...props });

  const ComponentProps = {
    ...(className ? { className: className } : {}),
    ...(Component === "a" ? { href, target } : {}),
    ...(Component === "img" ? { src, alt } : {}),
    ...(Component === "iframe" ? { src } : {}),
    ...(Component === "video" ? { src } : {}),
    //Add other support
    //...(Component === "form" ? {}: {}),
    //...(Component === "input" ? {}: {}),
    //...(Component === "button" ? {}: {}),
  };

  if (styled) {
    return (
      <StyledComponent
        as={Component}
        {...ComponentProps}
        $ss={styled}
        style={style}
      >
        {children}
      </StyledComponent>
    );
  }
  return (
    <Component {...ComponentProps} style={style}>
      {children}
    </Component>
  );
};

const StyledComponent = styled.div<{ $ss?: string }>`
  ${(props) => {
    if (!props.$ss) {
      return null;
    }
    return props.$ss;
  }}
`;
export default UtilityStyledComponent;
