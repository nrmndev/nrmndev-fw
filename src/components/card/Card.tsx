import {
  BackgroundProps,
  BaseProps,
  BoxShadowProps,
  MarginProps,
  PaddingProps,
} from "@uiTypes";
import { propStyleHandler } from "@utils";
import classNames from "classnames";
// import React from "react";

interface CardComponentProps
  extends BaseProps,
    BackgroundProps,
    BoxShadowProps,
    PaddingProps,
    MarginProps {}

const Card = ({
  margin,
  padding = "sm",
  background,
  boxShadow,
  children,
  ...rest
}: CardComponentProps) => {
  const { className, inline } = propStyleHandler({
    boxShadow,
    margin,
    padding,
    userStyle: rest.style,
    background,
  });
  const classes = classNames("card", className);
  return (
    <div {...rest} className={classes} style={inline}>
      {children}
    </div>
  );
};

export default Card;
