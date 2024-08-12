import React from "react";

interface IProps
  extends React.HTMLProps<HTMLParagraphElement | HTMLSpanElement> {
  maxCharacters?: number;
  children?: React.ReactNode;
}

const Text = ({ maxCharacters }: IProps) => {
  return <div>Text</div>;
};

export default Text;
