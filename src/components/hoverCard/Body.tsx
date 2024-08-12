import React from "react";

export interface IProps {
  children: React.ReactNode;
}
const HoverCardBody = ({ children }: IProps) => {
  return <p>{children}</p>;
};

export default HoverCardBody;
