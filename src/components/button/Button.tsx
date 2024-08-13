import { PolymorphicButtonProps, SizeProps, VariantProps } from "@proptypes";
import { MergePropsAsClassNames } from "@utils";
import AsAnchorLink from "./AsAnchorLink";
import AsNavLink from "./AsNavLink";

interface IProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, "size">,
    VariantProps,
    SizeProps {
  display?: "block" | "inline-block" | "";
  children: React.ReactNode;
  as?: "button" | "anchorLink" | "navLink";
}

type ExtendedIProps = IProps & PolymorphicButtonProps;

const Button = ({
  variant = "primary",
  display = "",
  size = "",
  children,
  as = "button",
  ...rest
}: ExtendedIProps) => {
  const classNames = MergePropsAsClassNames([
    ["btn", variant, display, size],
    [rest.className ? rest.className : ""],
  ]);

  const { href, to, target, type } = rest;

  switch (as) {
    case "button":
      return (
        <button {...rest} className={classNames} type={type ? type : "button"}>
          {children}
        </button>
      );
    case "anchorLink":
      return (
        <AsAnchorLink href={href!} target={target ? target : "_blank"}>
          {children}
        </AsAnchorLink>
      );
    case "navLink":
      return <AsNavLink to={to ? to : "/404"}>{children}</AsNavLink>;
  }
};

export default Button;
