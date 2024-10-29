import useHoverCardProvider from "./useHoverCardProvider";
import { UtilityStyledComponent } from "@uiComponents";
import { OverlayComponentProps } from "@uiComponentTypes";
import { forwardRef } from "react";

const Overlay = (
  { ...utilityProps }: OverlayComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;

  return (
    <UtilityStyledComponent
      as="div"
      ref={ref}
      {...utilityProps}
      className={"hovercard__overlay"}
    />
  );
};

export default forwardRef(Overlay);
