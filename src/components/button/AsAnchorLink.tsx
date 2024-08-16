import { BaseProps } from "@typekits";
import { AnchorLinkProps, SizeProps, VariantProps } from "@proptypes";
import { mergePropsAsClassNames } from "@utils";

interface IProps extends BaseProps, VariantProps, SizeProps {}

type ExtendedIprops = IProps & AnchorLinkProps;

const AsAnchorLink = ({
  variant = "primary",
  size,
  children,
  href = "#",
  target = "_blank",
  ...rest
}: ExtendedIprops) => {
  const classNames = mergePropsAsClassNames([
    ["btn", variant, size ?? ""],
    [rest.className ?? ""],
  ]);

  return (
    <>
      <a href={href} target={target} className={classNames} {...rest}>
        {children}
      </a>
    </>
  );
};

export default AsAnchorLink;
