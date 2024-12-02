import { Typography } from "components/component.barrel.index";
import { TypographyComponentProps } from "components/component.barrel.types";
import useHoverCardProvider from "./useHoverCardProvider";
import { forwardRef } from "react";

const HoverCardHeading = (
  { ...utilityProps }: TypographyComponentProps,
  ref?: React.Ref<HTMLHeadingElement>
) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Typography as="h3" {...utilityProps} ref={ref} />;
};

export default forwardRef(HoverCardHeading);
