import { AnchorLinkComponentProps } from "@uiTypes";
import { UtilityStyledComponent } from "@uiComponents";

const AsAnchorLink = ({ size, ...rest }: AnchorLinkComponentProps) => {
  return (
    <UtilityStyledComponent
      as="a"
      {...rest}
      className={`btn btn-${size ?? ""}`}
    />
  );
};

export default AsAnchorLink;
