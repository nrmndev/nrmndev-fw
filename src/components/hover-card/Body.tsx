import { UtilityStyledComponent } from "@uiComponents";
import { HoverCardBodyComponentProps } from "@uiComponentTypes";
import useHoverCardProvider from "./useHoverCardProvider";

const HoverCardBody = ({ ...utilityProps }: HoverCardBodyComponentProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <UtilityStyledComponent as="p" {...utilityProps} />;
};

export default HoverCardBody;
