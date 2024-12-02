import { UtilityStyledComponent } from "components/component.barrel.index";
import { CardContentComponentProps } from "components/component.barrel.types";
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
