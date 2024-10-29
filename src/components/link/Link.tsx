import { UtilityStyledComponent } from "@uiComponents";

export type LinkComponentProps = {};
const AsAnchorLink = ({ ...rest }: LinkComponentProps) => {
  return <UtilityStyledComponent as="a" {...rest} />;
};

export default AsAnchorLink;
