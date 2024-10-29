import { UtilityStyledComponent } from "@uiComponents";
import { RowComponentProps } from "@uiComponentTypes";

const Row = ({ ...utilityProps }: RowComponentProps) => {
  return <UtilityStyledComponent className={"row"} {...utilityProps} />;
};

export default Row;
