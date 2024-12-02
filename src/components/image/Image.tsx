import { UtilityStyledComponent } from "components/component.barrel.index";
import { ImageComponentProps } from "components/component.barrel.types";
import React, { forwardRef } from "react";

const Image = (
  { src, alt = "Image", template, ...utilityProps }: ImageComponentProps,
  ref?: React.Ref<HTMLImageElement>
) => {
  return (
    <UtilityStyledComponent
      as="img"
      {...utilityProps}
      src={src}
      alt={alt}
      ref={ref}
    />
  );
};

export default forwardRef(Image);
