import { BaseProps, FlexColumnProps, FlexProps, PositionProps } from "@uiTypes";
import { UtilityStyledComponent } from "@uiComponents";

export interface IPropsRow
  extends BaseProps,
    FlexColumnProps,
    FlexProps,
    PositionProps {}

const Row = ({ ...rest }: IPropsRow) => {
  return <UtilityStyledComponent as="div" className={"row"} {...rest} />;
};

export default Row;
