import { Icon } from "components/component.barrel.index";

import useHoverCardProvider from "./useHoverCardProvider";
import { IconComponentProps } from "components/component.barrel.types";
import { forwardRef } from "react";

const HoverCardIcon = (
  { ...utilityProps }: IconComponentProps,
  ref?: React.Ref<HTMLSpanElement>
) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return (
    <Icon
      variant={utilityProps.variant ?? "outline"}
      {...utilityProps}
      ref={ref}
    />
  );
};

export default forwardRef(HoverCardIcon);
