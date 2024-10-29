import { Typography } from "@uiComponents";
import { HoverCardHeadingComponentProps } from "@uiComponentTypes";
import useHoverCardProvider from "./useHoverCardProvider";
import { forwardRef } from "react";

const HoverCardHeading = (
  { ...utilityProps }: HoverCardHeadingComponentProps,
  ref?: React.Ref<HTMLHeadingElement>
) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Typography as="h3" {...utilityProps} ref={ref} />;
};

export default forwardRef(HoverCardHeading);
