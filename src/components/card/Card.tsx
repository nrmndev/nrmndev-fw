import { UtilityStyledComponent } from "components/component.barrel.index";
import { CardComponentProps } from "components/component.barrel.types";

import { forwardRef } from "react";

const Card = (
  { ...utilityProps }: CardComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  return (
    <UtilityStyledComponent
      as="div"
      className="card"
      ref={ref}
      {...utilityProps}
      padding={utilityProps.usx?.padding ?? "sm"}
    />
  );
};

export default forwardRef(Card);
