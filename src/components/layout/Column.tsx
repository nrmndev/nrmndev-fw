import { ColumnComponentProps } from "@uiComponentTypes";
import { UtilityStyledComponent } from "@uiComponents";

import { forwardRef } from "react";

const Column = (
  { as = "div", ...utilityProps }: ColumnComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  return (
    <UtilityStyledComponent
      as={as}
      {...utilityProps}
      className="col"
      ref={ref}
    />
  );
};

export default forwardRef(Column);
