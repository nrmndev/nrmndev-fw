import { BaseProps } from "@typekits";
import { NavLinkProps, SizeProps, VariantProps } from "@proptypes";
import { mergePropsAsClassNames } from "@utils";
import { NavLink } from "react-router-dom";

interface IProps extends BaseProps, VariantProps, SizeProps {}

type ExtendedIProps = IProps & NavLinkProps;

const AsNavLink = ({
  variant = "primary",
  size,
  children,
  to = "/",
  ...rest
}: ExtendedIProps) => {
  const classNames = mergePropsAsClassNames([
    ["btn", variant, size ?? ""],
    [rest.className ?? ""],
  ]);

  return (
    <NavLink to={to} className={classNames} {...rest}>
      {children}
    </NavLink>
  );
};

export default AsNavLink;
