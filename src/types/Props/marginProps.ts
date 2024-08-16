import { PositionUnionTypes, SizeUnionTypes } from "@uniontypes";

type MarginProps = {
  margin?: SizeUnionTypes | PositionUnionTypes;
};

export default MarginProps;
