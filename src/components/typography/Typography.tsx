import { ChildrenProps } from "@uiTypes";
import { UtilityStyledComponent } from "@uiComponents";
import { TypographyComponentProps } from "@uiComponentTypes";

const Typography = ({
  as = "p",
  ...utilityProps
}: TypographyComponentProps & { className?: string } & ChildrenProps) => {
  return <UtilityStyledComponent as={as} {...utilityProps} />;
};

export default Typography;
