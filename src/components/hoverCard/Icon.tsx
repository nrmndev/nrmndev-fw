import { Icon } from "@uiComponents";
import { IconType } from "react-icons";
import useHoverCardProvider from "./useHoverCardProvider";

export interface IProps {
  icon: IconType | string;
}

const HoverCardIcon = ({ icon }: IProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Icon icon={icon} variant="primary-alt" rounded />;
};

export default HoverCardIcon;
