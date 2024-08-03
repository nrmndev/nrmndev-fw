import { SpreadClassNameAsProps } from "../../utilities/SpreadClassNameAsProps";

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
  // const classNames: string[] = ["btn"];
  // classNames.push(`btn--` + variant);
  // display && classNames.push(`btn--` + display);
  // size && classNames.push(`btn--` + size);
  // const props = {
  //   ...(classNames.length > 0 && { className: classNames.join(" ") }),
  // };

  const classNames = SpreadClassNameAsProps(["btn", variant, display, size]);
  //console.log(props);
  return (
    <>
      <button {...classNames}>{children}</button>
    </>
  );
};

export default Button;
