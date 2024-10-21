import React from "react";
import UtilityStyledComponent from "./UtilityStyledComponent";
import { PropStyleHandlerProps } from "@utils";

const IntegrationComponentTesting = ({
  ...rest
}: PropStyleHandlerProps & { children?: React.ReactNode }) => {
  return <UtilityStyledComponent as="div" {...rest} />;
};

export default IntegrationComponentTesting;
