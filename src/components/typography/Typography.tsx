import { UtilityStyledComponent } from "@uiComponents";
import { TypographyComponentProps } from "@uiComponentTypes";
import { forwardRef } from "react";

const Typography = <T extends React.ElementType>(
  { as = "p", ...utilityProps }: TypographyComponentProps,
  ref?: React.Ref<React.ElementRef<T>>
) => {
  return <UtilityStyledComponent as={as} {...utilityProps} ref={ref} />;
};

export default forwardRef(Typography);
