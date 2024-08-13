import { NavLinkProps, SizeProps, VariantProps } from "@proptypes";
import { MergePropsAsClassNames } from "@utils";
import { NavLink } from "react-router-dom";

interface IProps
  extends Omit<React.HTMLProps<HTMLAnchorElement>, "href" | "size">,
    VariantProps,
    SizeProps {
  children: React.ReactNode;
}

type ExtendedIProps = IProps & NavLinkProps;

const AsNavLink = ({
  variant = "primary",
  size = "",
  children,
  to = "/",
  ...rest
}: ExtendedIProps) => {
  const classNames = MergePropsAsClassNames([
    ["btn", variant, size],
    [rest.className ? rest.className : ""],
  ]);

  return (
    <NavLink to={to} className={classNames} {...rest}>
      {children}
    </NavLink>
  );
};

export default AsNavLink;
