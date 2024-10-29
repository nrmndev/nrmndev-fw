import { Button } from "@uiComponents";
import useHoverCardProvider from "./useHoverCardProvider";
import { ButtonProps } from "@uiComponentTypes";

const OverlayButton = ({ ...utilityProps }: ButtonProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Button {...utilityProps} />;
};

export default OverlayButton;
