import { UtilityStyledComponent } from "@uiComponents";
import { ImageComponentProps } from "@uiComponentTypes";
import React, { forwardRef } from "react";

const Image = (
  { src, alt = "Image", ...utilityProps }: ImageComponentProps,
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
