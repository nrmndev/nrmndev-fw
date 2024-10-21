import {
  BaseProps,
  MarginProps,
  TextAlignProps,
  TextDecorationProps,
  TextTransformProps,
  TypographyProps,
} from "@uiTypes";

import { UtilityStyledComponent } from "@uiComponents";

export type TypographyComponentProps = BaseProps &
  TypographyProps &
  TextDecorationProps &
  TextTransformProps &
  TextAlignProps &
  MarginProps;

const Typography = ({
  children,
  as = "p",
  ...utilityProps
}: TypographyComponentProps) => {
  return (
    <UtilityStyledComponent as={as} {...utilityProps}>
      {children}
    </UtilityStyledComponent>
  );
};

export default Typography;
