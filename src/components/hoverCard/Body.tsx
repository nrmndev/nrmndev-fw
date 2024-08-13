import React from "react";
import useHoverCardProvider from "./useHoverCardProvider";

export interface IProps {
  children: React.ReactNode;
}
const HoverCardBody = ({ children }: IProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return <p>{children}</p>;
};

export default HoverCardBody;
