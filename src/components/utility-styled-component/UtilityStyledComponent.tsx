import { AsOptionalProps } from "@uiTypes";
import { propStyleHandler, PropStyleHanlderProps } from "@utils";
import styled from "styled-components";

/**
 * Acts as a wrapper that handles utility props.
 * @returns Component with utility classNames or inlineStyles
 */

type UtilityStyledComponentProps = {
  as: React.ElementType;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
} & PropStyleHanlderProps &
  AsOptionalProps & { role?: string; title?: string }; //all props below are to follow

const UtilityStyledComponent = (props: UtilityStyledComponentProps) => {
  const {
    as: Component = "a",
    children,
    style,
    href,
    src,
    alt,
    target,
  } = props;

  const { className, styled } = propStyleHandler({
    ...props,
    userStyle: style,
  });

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
      <StyledComponent as={Component} {...ComponentProps} $ss={styled}>
        {children}
      </StyledComponent>
    );
  }
  return <Component {...ComponentProps}>{children}</Component>;
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
