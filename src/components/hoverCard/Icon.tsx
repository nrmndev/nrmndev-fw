import { Icon } from "@uiComponents";
import { IconComponentProps } from "@uiTypes";
import useHoverCardProvider from "./useHoverCardProvider";

const HoverCardIcon = ({ ...utilityProps }: IconComponentProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Icon variant={utilityProps.variant ?? "outline"} {...utilityProps} />;
};

export default HoverCardIcon;
