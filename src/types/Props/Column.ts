import {
  AlignUnionTypes,
  ColumnUnionTypes,
  JustifyUnionTypes,
} from "@uniontypes";

export interface ColumnProps {
  xs?: ColumnUnionTypes;
  sm?: ColumnUnionTypes;
  md?: ColumnUnionTypes;
  lg?: ColumnUnionTypes;
  xl?: ColumnUnionTypes;
  xxl?: ColumnUnionTypes;
  justifySelf?: JustifyUnionTypes;
  alignSelf?: AlignUnionTypes;
}

export type ColumnTypes = {
  xs?: ColumnUnionTypes;
  sm?: ColumnUnionTypes;
  md?: ColumnUnionTypes;
  lg?: ColumnUnionTypes;
  xl?: ColumnUnionTypes;
  xxl?: ColumnUnionTypes;
};

export type ColumnBreakpointProps = {
  columnBreakpoints?: ColumnTypes;
};

export default ColumnTypes;
