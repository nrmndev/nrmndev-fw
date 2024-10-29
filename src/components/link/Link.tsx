import { UtilityStyledComponent } from "@uiComponents";
import { forwardRef } from "react";

export type LinkComponentProps = {};
const AsAnchorLink = (
  { ...rest }: LinkComponentProps,
  ref?: React.Ref<HTMLAnchorElement>
) => {
  return <UtilityStyledComponent as="a" {...rest} ref={ref} />;
};

export default forwardRef(AsAnchorLink);
