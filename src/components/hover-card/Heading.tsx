import { Typography } from "@uiComponents";
import { TypographyComponentProps } from "@uiComponentTypes";
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
