import { Typography } from "@uiComponents";
import React from "react";
import useHoverCardProvider from "./useHoverCardProvider";

export interface IProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const OverlayHeading = ({ children }: IProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <Typography as="h3">{children}</Typography>;
};

export default OverlayHeading;
