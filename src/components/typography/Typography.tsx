import { TypographyComponentProps } from "@uiTypes";

import { UtilityStyledComponent } from "@uiComponents";

const Typography = ({
  as = "p",
  ...utilityProps
}: TypographyComponentProps) => {
  return <UtilityStyledComponent as={as} {...utilityProps} />;
};

export default Typography;
