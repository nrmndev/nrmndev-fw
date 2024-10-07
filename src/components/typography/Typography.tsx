import { BaseProps, ColorProps, TypographyProps } from "@uiTypes";
import { propStyleHandler } from "@utils";
import classNames from "classnames";
import React from "react";

export interface TypographyComponentProps
  extends BaseProps,
    ColorProps,
    TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children?: React.ReactNode;
}
const Typography = ({
  as: Component = "p",
  children,
  color,
  textAlign,
  textTransform,
  ...rest
}: TypographyComponentProps) => {
  const { className, inline } = propStyleHandler({
    userStyle: rest.style,
  });

  const classes = classNames(
    color ? "color-" + color : undefined,
    textAlign ? `text-${textAlign}` : undefined,
    textTransform ? `text-${textTransform}` : undefined,
    className,
    rest.className
  );
  return (
    <Component {...rest} style={inline} className={classes}>
      {children}
    </Component>
  );
};

export default Typography;
