import {
  BackgroundProps,
  //BaseProps,
  BorderProps,
  ColumnBreakpointProps,
  FlexProps,
  MarginDiscriminatedProps,
  PositionProps,
  SpacingProps,
} from "@uiTypes";

import { UtilityStyledComponent } from "@uiComponents";

export type ColumnComponentProps = {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  title?: string;
  role?: string;
  name?: string;
  tabIndex?: number;
} & BackgroundProps &
  BorderProps &
  ColumnBreakpointProps &
  SpacingProps &
  MarginDiscriminatedProps &
  FlexProps &
  PositionProps;

const Column = ({
  style: userStyle,
  children,
  title,
  role,
  name,
  tabIndex,
  ...utilityClasses
}: ColumnComponentProps) => {
  return (
    <UtilityStyledComponent as="div" {...utilityClasses} className="col">
      {children}
    </UtilityStyledComponent>
  );
};

export default Column;
