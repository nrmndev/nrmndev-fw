import Overlay from "./Overlay";
import OverlayHeading from "./OverlayHeading";
import HoverCardHeading from "./Heading";
import HoverCardBody from "./Body";
import HoverCardIcon from "./Icon";
import HoverCardContextProvider from "./HoverCardContext";
import { mergePropsAsClassNames } from "@utils";
import { RequireBaseProps, AnimationProps } from "@typekits";

interface IProps extends AnimationProps, RequireBaseProps<"children"> {}

const HoverCard = ({ children, className, animation, ...rest }: IProps) => {
  const classNames = mergePropsAsClassNames([
    ["hovercard"],
    [
      animation
        ? "animate animate__" + animation
        : "animate animate__slideInLeft",
    ],
    ["", className ?? ""],
  ]);
  return (
    <HoverCardContextProvider>
      <div {...rest} className={classNames}>
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
