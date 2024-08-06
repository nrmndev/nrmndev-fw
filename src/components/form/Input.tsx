import React from "react";

interface IProps extends React.HTMLProps<HTMLInputElement> {
  type: "number" | "text";
  placeholder: string;
  value: number | string;
}

const FormInput = ({
  type,
  value,
  placeholder = "Please pass placeholder as props",
}: IProps) => {
  return <input type={type} placeholder={placeholder} value={value} />;
};

export default FormInput;
