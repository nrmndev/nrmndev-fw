import { Button } from "components/component.barrel.index";
import useHoverCardProvider from "./useHoverCardProvider";
import { ButtonProps } from "components/component.barrel.types";
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
