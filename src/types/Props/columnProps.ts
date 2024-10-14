export type ColumnOptions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ColumnProps {
  xs?: ColumnOptions;
  sm?: ColumnOptions;
  md?: ColumnOptions;
  lg?: ColumnOptions;
  xl?: ColumnOptions;
  xxl?: ColumnOptions;
}

export type ColumnBreakpointProps = {
  columnBreakpoints?: ColumnProps;
};
