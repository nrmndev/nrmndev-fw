import Overlay from "./Overlay";
import OverlayHeading from "./OverlayHeading";
import HoverCardHeading from "./Heading";
import HoverCardBody from "./Body";
import HoverCardIcon from "./Icon";
import HoverCardContextProvider from "./HoverCardContext";
import classNames from "classnames";
import { UtilityStyledComponent } from "components/component.barrel.index";
import { HoverCardComponentProps } from "components/component.barrel.types";

const HoverCard = ({ animation, ...utilityProps }: HoverCardComponentProps) => {
  const className = classNames(
    "hovercard",
    animation ? "animate animate__" + animation : "animate animate__slideInLeft"
  );
  return (
    <HoverCardContextProvider>
      <UtilityStyledComponent
        as="div"
        {...utilityProps}
        className={className}
      />
    </HoverCardContextProvider>
  );
};

HoverCard.Body = HoverCardBody;
HoverCard.Heading = HoverCardHeading;
HoverCard.Icon = HoverCardIcon;
HoverCard.Overlay = Overlay;
HoverCard.OverlayHeading = OverlayHeading;
export default HoverCard;
