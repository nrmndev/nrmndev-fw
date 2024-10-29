import { ColumnComponentProps } from "@uiComponentTypes";
import { UtilityStyledComponent } from "@uiComponents";

const Column = ({ ...utilityProps }: ColumnComponentProps) => {
  return <UtilityStyledComponent as="div" {...utilityProps} className="col" />;
};

export default Column;
