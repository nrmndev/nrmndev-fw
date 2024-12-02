import { UtilityStyledComponent } from "components/component.barrel.index";
import { TypographyComponentProps } from "components/component.barrel.types";
import { forwardRef } from "react";

const Typography = <T extends React.ElementType>(
  { as = "p", ...utilityProps }: TypographyComponentProps,
  ref?: React.Ref<React.ElementRef<T>>
) => {
  //const componentTemplate = useComponentTemplate("typography", template || 0);
  return <UtilityStyledComponent as={as} {...utilityProps} ref={ref} />;
};

export default forwardRef(Typography);
