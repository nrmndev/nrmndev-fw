import { ColumnUnionTypes } from "@uniontypes";

export interface ColumnProps {
  xs?: ColumnUnionTypes;
  sm?: ColumnUnionTypes;
  md?: ColumnUnionTypes;
  lg?: ColumnUnionTypes;
  xl?: ColumnUnionTypes;
  xxl?: ColumnUnionTypes;
}

// export type ColumnTypes = {
//   xs?: ColumnUnionTypes;
//   sm?: ColumnUnionTypes;
//   md?: ColumnUnionTypes;
//   lg?: ColumnUnionTypes;
//   xl?: ColumnUnionTypes;
//   xxl?: ColumnUnionTypes;
// };

export type ColumnBreakpointProps = {
  columnBreakpoints?: ColumnProps;
};

export default ColumnProps;
