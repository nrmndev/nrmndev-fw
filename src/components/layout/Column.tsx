import {
  BackgroundProps,
  //BaseProps,
  BorderProps,
  ColumnBreakpointProps,
  FlexProps,
  MarginProps,
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
  MarginProps &
  FlexProps &
  PositionProps;

const Column = ({
  title,
  role,
  name,
  tabIndex,
  ...utilityClasses
}: ColumnComponentProps) => {
  return (
    <UtilityStyledComponent as="div" {...utilityClasses} className="col" />
  );
};

export default Column;
