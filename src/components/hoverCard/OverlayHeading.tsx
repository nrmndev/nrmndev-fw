import { Heading } from "@uiComponents";
import React from "react";
import useHoverCardProvider from "./useHoverCardProvider";

export interface IProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const OverlayHeading = ({ level, children }: IProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Heading level={level}>{children}</Heading>;
};

export default OverlayHeading;
