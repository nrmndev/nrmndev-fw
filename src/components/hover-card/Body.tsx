import { UtilityStyledComponent } from "components/component.barrel.index";
import { HoverCardBodyComponentProps } from "components/component.barrel.types";
import useHoverCardProvider from "./useHoverCardProvider";
import { forwardRef } from "react";

const HoverCardBody = (
  { ...utilityProps }: HoverCardBodyComponentProps,
  ref?: React.Ref<HTMLParagraphElement>
) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <UtilityStyledComponent as="p" {...utilityProps} ref={ref} />;
};

export default forwardRef(HoverCardBody);
