import { Heading } from "@components";
import React from "react";

export interface IProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

const HoverCardHeading = ({ level, children }: IProps) => {
  return <Heading level={level}>{children}</Heading>;
};

export default HoverCardHeading;
