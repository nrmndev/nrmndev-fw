import { AlignTypes, ColumnTypes, JustifyTypes } from "@basetypes";

interface ColumnProps {
  xs?: ColumnTypes;
  sm?: ColumnTypes;
  md?: ColumnTypes;
  lg?: ColumnTypes;
  xl?: ColumnTypes;
  xxl?: ColumnTypes;
  justifySelf?: JustifyTypes;
  alignSelf?: AlignTypes;
}

export default ColumnProps;