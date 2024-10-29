import { Icon } from "@uiComponents";

import useHoverCardProvider from "./useHoverCardProvider";
import { IconComponentProps } from "@uiComponentTypes";

const HoverCardIcon = ({ ...utilityProps }: IconComponentProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Icon variant={utilityProps.variant ?? "outline"} {...utilityProps} />;
};

export default HoverCardIcon;
