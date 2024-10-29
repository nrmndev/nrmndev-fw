import { UtilityStyledComponent } from "@uiComponents";
import { RowComponentProps } from "@uiComponentTypes";
import { forwardRef } from "react";

const Row = (
  { ...utilityProps }: RowComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  return (
    <UtilityStyledComponent className={"row"} {...utilityProps} ref={ref} />
  );
};

export default forwardRef(Row);
