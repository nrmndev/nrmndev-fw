import { AsOptionalProps } from "@uiTypes";
import { propStyleHandler, PropStyleHanlderProps } from "@utils";

/**
 * Acts as a wrapper that handles utility props.
 * @returns Component with utility classNames or inlineStyles
 */

type UtilityStyledComponentProps = {
  as: React.ElementType;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & PropStyleHanlderProps &
  AsOptionalProps;

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

  // if (Component === "a") {
  //   props.href!
  // }
  const { className, inline } = propStyleHandler({
    ...props,
    userStyle: style,
  });

  const ComponentProps = {
    className: className,
    style: inline,
    ...(Component === "a" ? { href, target } : {}),
    ...(Component === "img" ? { src, alt } : {}),
    ...(Component === "iframe" ? { src } : {}),
    ...(Component === "video" ? { src } : {}),
    //Add other support
    //...(Component === "form" ? {}: {}),
    //...(Component === "input" ? {}: {}),
    //...(Component === "button" ? {}: {}),
  };

  return <Component {...ComponentProps}>{children}</Component>;
};

export default UtilityStyledComponent;
