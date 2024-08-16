import { mergePropsAsClassNames } from "@utils";
import React from "react";
import useHoverCardProvider from "./useHoverCardProvider";
import { AnimationProps } from "@proptypes";

export interface IProps
  extends React.HTMLProps<HTMLDivElement>,
    AnimationProps {
  children: React.ReactNode;
}

const Overlay = ({
  children,
  className,
  //animation = "slide-ltr",
  ...rest
}: IProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;

  const classNames = mergePropsAsClassNames([
    ["hovercard__overlay"],
    //[animation ? "animate animate__onhover--" + animation : ""],
    ["", className ?? ""],
  ]);
  return (
    <div {...rest} className={classNames}>
      {children}
    </div>
  );
};

export default Overlay;
