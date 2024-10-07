import Overlay from "./Overlay";
import OverlayHeading from "./OverlayHeading";
import HoverCardHeading from "./Heading";
import HoverCardBody from "./Body";
import HoverCardIcon from "./Icon";
import HoverCardContextProvider from "./HoverCardContext";
import { RequireBaseProps, AnimationProps } from "@uiTypes";
import classNames from "classnames";

interface IProps extends AnimationProps, RequireBaseProps<"children"> {}

const HoverCard = ({ children, animation, ...rest }: IProps) => {
  const className = classNames(
    "hovercard",
    animation ? "animate animate__" + animation : "animate animate__slideInLeft"
  );
  return (
    <HoverCardContextProvider>
      <div {...rest} className={className}>
        {children}
      </div>
    </HoverCardContextProvider>
  );
};

HoverCard.Body = HoverCardBody;
HoverCard.Heading = HoverCardHeading;
HoverCard.Icon = HoverCardIcon;
HoverCard.Overlay = Overlay;
HoverCard.OverlayHeading = OverlayHeading;
export default HoverCard;
