import { UtilityStyledComponent } from "@uiComponents";
import { CardComponentProps } from "@uiComponentTypes";
import { forwardRef } from "react";

const Card = (
  { ...utilityProps }: CardComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  return (
    <UtilityStyledComponent
      as="div"
      className="card"
      ref={ref}
      {...utilityProps}
      padding={utilityProps.padding ?? "sm"}
    />
  );
};

export default forwardRef(Card);
