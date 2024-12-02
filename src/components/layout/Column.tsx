import { ColumnComponentProps } from "components/component.barrel.types";
import { UtilityStyledComponent } from "components/component.barrel.index";

import { forwardRef } from "react";

const Column = (
  { as = "div", ...utilityProps }: ColumnComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  // const componentTemplate = useComponentTemplate("column", template || 0);
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
