import { Typography } from "@uiComponents";
import useHoverCardProvider from "./useHoverCardProvider";
import { BaseProps } from "@uiTypes";

export interface IProps extends Required<Pick<BaseProps, "children">> {}

const HoverCardHeading = ({ children }: IProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Typography as="h3">{children}</Typography>;
};

export default HoverCardHeading;
