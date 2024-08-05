import { SpreadClassNameAsProps } from "@utils/SpreadClassNameAsProps";

interface IProps {
  variant: "primary" | "primary-outlined" | "secondary" | "secondary-outlined";
  display?: "block" | "inline-block" | "";
  size?: "small" | "medium" | "large" | "x-large" | "";
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  display = "",
  size = "",
  children,
}: IProps) => {
  const classNames = SpreadClassNameAsProps(["btn", variant, display, size]);

  return (
    <>
      <button {...classNames}>{children}</button>
    </>
  );
};

export default Button;
