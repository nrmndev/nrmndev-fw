import { PolymorphicButtonProps, SizeProps, VariantProps } from "@proptypes";
import { mergePropsAsClassNames } from "@utils";
import AsAnchorLink from "./AsAnchorLink";
import AsNavLink from "./AsNavLink";
import { BaseProps } from "@typekits";

interface IProps extends BaseProps, VariantProps, SizeProps {
  display?: "block" | "inline-block";
  as?: "button" | "anchorLink" | "navLink";
}

type ExtendedIProps = IProps & PolymorphicButtonProps;

const Button = ({
  variant = "primary",
  display = undefined,
  size = undefined,
  children,
  as = "button",
  ...rest
}: ExtendedIProps) => {
  const classNames = mergePropsAsClassNames([
    ["btn", variant, display ?? "", size ?? ""],
    [rest.className ?? ""],
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
