import { Typography } from "@uiComponents";
import useHoverCardProvider from "./useHoverCardProvider";
import { TypographyComponentProps } from "@uiTypes";

const OverlayHeading = ({
  as = "h3",
  ...utilityStyledComponent
}: TypographyComponentProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Typography as={as} {...utilityStyledComponent} />;
};

export default OverlayHeading;
