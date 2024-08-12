import React from "react";
import Overlay from "./Overlay";
import OverlayHeading from "./OverlayHeading";
import HoverCardHeading from "./Heading";
import HoverCardBody from "./Body";

interface IProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

const HoverCard = ({ children, ...rest }: IProps) => {
  return <div {...rest}>{children}</div>;
};

HoverCard.Overlay = Overlay;
HoverCard.OverlayHeading = OverlayHeading;
HoverCard.Heading = HoverCardHeading;
HoverCard.Body = HoverCardBody;
export default HoverCard;
