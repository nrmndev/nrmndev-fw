import { BaseProps } from "@uiTypes";
import { AnchorLinkProps, SizeProps, VariantProps } from "@proptypes";
import classNames from "classnames";

interface IProps extends BaseProps, VariantProps, SizeProps {}

type ExtendedIprops = IProps & AnchorLinkProps;

const AsAnchorLink = ({
  variant = "solid",
  size,
  children,
  href = "#",
  target = "_blank",
  ...rest
}: ExtendedIprops) => {
  const className = classNames([["btn", variant, size ?? ""]]);

  return (
    <>
      <a {...rest} href={href} target={target} className={className}>
        {children}
      </a>
    </>
  );
};

export default AsAnchorLink;
