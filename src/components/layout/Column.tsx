import { ColumnComponentProps } from "@uiTypes";
import { UtilityStyledComponent } from "@uiComponents";

const Column = ({
  title,
  role,
  name,
  tabIndex,
  ...utilityProps
}: ColumnComponentProps) => {
  return <UtilityStyledComponent as="div" {...utilityProps} className="col" />;
};

export default Column;
