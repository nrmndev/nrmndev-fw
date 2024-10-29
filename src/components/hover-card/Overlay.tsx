import useHoverCardProvider from "./useHoverCardProvider";
import { UtilityStyledComponent } from "@uiComponents";
import { OverlayComponentProps } from "@uiComponentTypes";

const Overlay = ({ ...utilityProps }: OverlayComponentProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;

  return (
    <UtilityStyledComponent
      as="div"
      {...utilityProps}
      className={"hovercard__overlay"}
    />
  );
};

export default Overlay;
