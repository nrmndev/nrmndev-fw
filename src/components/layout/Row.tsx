import { UtilityStyledComponent } from "components/component.barrel.index";
import { RowComponentProps } from "components/component.barrel.types";
import { forwardRef } from "react";

const Row = (
  { ...utilityProps }: RowComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  return (
    <UtilityStyledComponent
      as="div"
      className="row"
      {...utilityProps}
      ref={ref}
    />
  );
};

export default forwardRef(Row);
// as UtilityJSX;
