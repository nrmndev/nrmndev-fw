import { AnchorLinkProps, SizeProps, VariantProps } from "@proptypes";
import { MergePropsAsClassNames } from "@utils";

interface IProps
  extends Omit<React.HTMLProps<HTMLAnchorElement>, "href" | "size">,
    VariantProps,
    SizeProps {
  children: React.ReactNode;
}

type ExtendedIprops = IProps & AnchorLinkProps;

const AsAnchorLink = ({
  variant = "primary",
  size = "",
  children,
  href = "#",
  target = "_blank",
  ...rest
}: ExtendedIprops) => {
  const classNames = MergePropsAsClassNames([
    ["btn", variant, size],
    [rest.className ? rest.className : ""],
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
