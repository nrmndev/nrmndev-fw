import React from "react";
import Overlay from "./Overlay";
import OverlayHeading from "./OverlayHeading";
import HoverCardHeading from "./Heading";
import HoverCardBody from "./Body";
import HoverCardIcon from "./Icon";
import HoverCardContextProvider from "./HoverCardContext";
import { MergePropsAsClassNames } from "@utils";
import { AnimationProps } from "@proptypes";

interface IProps extends React.HTMLProps<HTMLDivElement>, AnimationProps {
  children: React.ReactNode;
}

const HoverCard = ({ children, className, animation, ...rest }: IProps) => {
  const classNames = MergePropsAsClassNames([
    ["hovercard"],
    [
      animation
        ? "animate animate__" + animation
        : "animate animate__slideInLeft",
    ],
    ["", className ? className : ""],
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
