import { ColumnComponentProps } from "@uiComponentTypes";
import { UtilityStyledComponent } from "@uiComponents";
import { forwardRef } from "react";

const Column = (
  { ...utilityProps }: ColumnComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  return (
    <UtilityStyledComponent
      as="div"
      {...utilityProps}
      className="col"
      ref={ref}
    />
  );
};

export default forwardRef(Column);
