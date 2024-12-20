import { Typography } from "components/component.barrel.index";
import useHoverCardProvider from "./useHoverCardProvider";
import { TypographyComponentProps } from "components/component.barrel.types";
import React, { forwardRef } from "react";

const OverlayHeading = <T extends React.ElementType>(
  { as = "h3", ...utilityStyledComponent }: TypographyComponentProps,
  ref?: React.Ref<React.ElementRef<T>>
) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Typography as={as} {...utilityStyledComponent} ref={ref} />;
};

export default forwardRef(OverlayHeading);
