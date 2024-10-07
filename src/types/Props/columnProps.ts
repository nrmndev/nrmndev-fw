import { ColumnOptions } from "types/options";

export interface ColumnProps {
  xs?: ColumnOptions;
  sm?: ColumnOptions;
  md?: ColumnOptions;
  lg?: ColumnOptions;
  xl?: ColumnOptions;
  xxl?: ColumnOptions;
}

// export type ColumnTypes = {
//   xs?: ColumnOptions;
//   sm?: ColumnOptions;
//   md?: ColumnOptions;
//   lg?: ColumnOptions;
//   xl?: ColumnOptions;
//   xxl?: ColumnOptions;
// };

export type ColumnBreakpointProps = {
  columnBreakpoints?: ColumnProps;
};

export default ColumnProps;
