import { BaseProps, PaddingProps } from "@uiTypes";
import classNames from "classnames";
import React from "react";

type CardContentComponentProps = {} & PaddingProps & BaseProps;
const CardContent = ({
  children,
  padding = "xs",
  ...rest
}: CardContentComponentProps) => {
  const classes = classNames(rest.className, "card__content", `p-${padding}`);
  return <div className={classes}>{children}</div>;
};

export default CardContent;
