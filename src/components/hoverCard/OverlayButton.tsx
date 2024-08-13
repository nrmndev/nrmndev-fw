import { Button } from "@components";
import React from "react";
import useHoverCardProvider from "./useHoverCardProvider";

interface IProps {
  children: React.ReactNode;
}
const OverlayButton = ({ children }: IProps) => {
  const isUsedInsideParentHoverCard = useHoverCardProvider();
  isUsedInsideParentHoverCard;
  return (
    <Button variant="primary" as="button">
      {children}
    </Button>
  );
};

export default OverlayButton;
