import { Typography } from "@uiComponents";
import { HoverCardHeadingComponentProps } from "@uiTypes";
import useHoverCardProvider from "./useHoverCardProvider";

const HoverCardHeading = ({
  ...utilityProps
}: HoverCardHeadingComponentProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Typography as="h3" {...utilityProps} />;
};

export default HoverCardHeading;
