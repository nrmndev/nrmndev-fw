import useHoverCardProvider from "./useHoverCardProvider";
import { BaseProps } from "@typekits";

export interface IProps extends Required<Pick<BaseProps, "children">> {}

const HoverCardBody = ({ children }: IProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <p>{children}</p>;
};

export default HoverCardBody;
