import { ColorOptions, OpacityOptions, SizeOptions } from "@uiTypes";
import React from "react";
import { IconType } from "react-icons";
import CenterText from "./CenterText";
import LeftDecoration from "./LeftDecoration";

import RightDecoration from "./RightDecoration";
import { Typography } from "components/typography";
import TextBackdrop from "./TextBackdrop";

type CenterWrapperProps = {
  label: string;
  leftDecoration?: {
    Icon?: IconType;
    color?: ColorOptions | undefined;
  };
  rightDecoration?: {
    Icon?: IconType;
    color?: ColorOptions | undefined;
  };
  textBackdrop?: {
    size?: SizeOptions;
    opacity?: OpacityOptions;
    color?: ColorOptions;
    label: string;
  };
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};
const CenterWrapper = ({
  label,
  leftDecoration,
  rightDecoration,
  textBackdrop,
  as = "h2",
}: CenterWrapperProps) => {
  return (
    <div className="sectionLabel__content">
      {textBackdrop?.label && <TextBackdrop {...textBackdrop} />}
      {leftDecoration?.Icon && (
        <LeftDecoration
          Icon={leftDecoration.Icon}
          color={leftDecoration.color ?? undefined}
        />
      )}
      <Typography as={as} className="sectionLabel__text">
        {label}
      </Typography>
      {/* <CenterText label={label} /> */}
      {rightDecoration?.Icon && (
        <RightDecoration
          Icon={rightDecoration.Icon}
          color={rightDecoration.color ?? undefined}
        />
      )}
    </div>
  );
};

export default CenterWrapper;
