import React from "react";

export interface IProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

const Overlay = ({ children, ...rest }: IProps) => {
  return <div {...rest}>{children}</div>;
};

export default Overlay;
