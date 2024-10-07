import { Heading } from "@uiComponents";
import useHoverCardProvider from "./useHoverCardProvider";
import { BaseProps } from "@uiTypes";

export interface IProps extends Required<Pick<BaseProps, "children">> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const HoverCardHeading = ({ level, children }: IProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Heading level={level}>{children}</Heading>;
};

export default HoverCardHeading;
