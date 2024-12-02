import { UtilityComponentProps } from "_uiTypes";

import React from "react";

export type MediaComponentProps = UtilityComponentProps<"div"> & {
  iconPosition?: "top-left" | "left" | "right" | "top-center" | "top-right";
  heading?: React.ReactNode;
  body?: React.ReactNode;
  icon?: React.ReactNode;
};
