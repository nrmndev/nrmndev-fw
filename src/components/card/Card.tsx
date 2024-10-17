import {
  BackgroundProps,
  BaseProps,
  BoxShadowProps,
  MarginDiscriminatedProps,
  PaddingProps,
} from "@uiTypes";
import { UtilityStyledComponent } from "@uiComponents";
// import React from "react";

type CardComponentProps = {} & BaseProps &
  BackgroundProps &
  BoxShadowProps &
  PaddingProps &
  MarginDiscriminatedProps;

const Card = ({ children, ...rest }: CardComponentProps) => {
  const { padding = "sm" } = rest;
  return (
    <UtilityStyledComponent
      as="div"
      className="card"
      {...rest}
      padding={padding}
    >
      {children}
    </UtilityStyledComponent>
  );
};

export default Card;
