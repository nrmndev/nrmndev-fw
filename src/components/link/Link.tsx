import { BaseProps } from "@uiTypes";
import { AnchorLinkProps, SizeProps } from "@proptypes";
import classNames from "classnames";

interface IProps extends BaseProps, SizeProps {}

type ExtendedIprops = IProps & AnchorLinkProps;

const AsAnchorLink = ({
  size,
  children,
  href = "#",
  target = "_blank",
  ...rest
}: ExtendedIprops) => {
  const className = classNames("btn", size ?? "");

  return (
    <>
      <a {...rest} href={href} target={target} className={className}>
        {children}
      </a>
    </>
  );
};

export default AsAnchorLink;
