import useHoverCardProvider from "./useHoverCardProvider";
import { UtilityStyledComponent } from "components/component.barrel.index";
import { OverlayComponentProps } from "components/component.barrel.types";
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
