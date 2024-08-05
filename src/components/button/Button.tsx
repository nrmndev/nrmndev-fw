import { MergePropsAsClassNames } from "@utils";

interface IProps extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
  variant: "primary" | "primary-outlined" | "secondary" | "secondary-outlined";
  display?: "block" | "inline-block" | "";
  size?: "small" | "medium" | "large" | "x-large" | "";
  type?: "submit" | "button" | "reset";
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  display = "",
  size = "",
  type = "button",
  children,
  ...rest
}: IProps) => {
  const classNames = MergePropsAsClassNames([
    ["btn", variant, display, size],
    [rest.className ? rest.className : ""],
  ]);

  return (
    <>
      <button {...rest} className={classNames} type={type}>
        {children}
      </button>
    </>
  );
};

export default Button;
