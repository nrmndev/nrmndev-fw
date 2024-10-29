import { UtilityStyledComponent } from "@uiComponents";
import { CardContentComponentProps } from "@uiComponentTypes";
import { forwardRef } from "react";

const CardContent = (
  { ...utilityProps }: CardContentComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  return (
    <UtilityStyledComponent
      ref={ref}
      as="div"
      className={"card__content"}
      {...utilityProps}
    />
  );
};

export default forwardRef(CardContent);
