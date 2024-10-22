import { RowComponentProps } from "@uiTypes";
import { UtilityStyledComponent } from "@uiComponents";

const Row = ({ ...utilityProps }: RowComponentProps) => {
  return (
    <UtilityStyledComponent as="div" className={"row"} {...utilityProps} />
  );
};

export default Row;
