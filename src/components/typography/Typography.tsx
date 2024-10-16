import {
  BaseProps,
  TextAlignProps,
  TextDecorationProps,
  TextTransformProps,
  TypographyProps,
  MarginDiscriminatedProps,
} from "@uiTypes";

import { UtilityStyledComponent } from "@uiComponents";

export type TypographyComponentProps = BaseProps &
  TypographyProps &
  TextDecorationProps &
  TextTransformProps &
  TextAlignProps &
  MarginDiscriminatedProps;

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
