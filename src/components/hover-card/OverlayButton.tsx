import { Button } from "@uiComponents";
import useHoverCardProvider from "./useHoverCardProvider";
import { ButtonProps } from "@uiComponentTypes";
import { forwardRef } from "react";

const OverlayButton = (
  { ...utilityProps }: ButtonProps,
  ref?: React.Ref<HTMLButtonElement>
) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Button {...utilityProps} ref={ref} />;
};

export default forwardRef(OverlayButton);
