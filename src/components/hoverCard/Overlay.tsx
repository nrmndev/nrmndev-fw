import React from "react";
import useHoverCardProvider from "./useHoverCardProvider";
import { AnimationProps } from "@proptypes";
import classNames from "classnames";

export interface IProps
  extends React.HTMLProps<HTMLDivElement>,
    AnimationProps {
  children: React.ReactNode;
}

const Overlay = ({
  children,
  //animation = "slide-ltr",
  ...rest
}: IProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;

  const className = classNames("hovercard__overlay");
  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
};

export default Overlay;
