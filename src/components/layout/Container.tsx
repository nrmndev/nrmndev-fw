// import Column from "./Column";
// import Row from "./Row";
import {
  BackgroundProps,
  BaseProps,
  BorderProps,
  BorderRadiusProps,
  FlexProps,
  LayoutProps,
  OverlayProps,
  SpacingProps,
} from "@uiTypes";
import classNames from "classnames";

import { propStyleHandler } from "@utils";

export type ContainerComponentProps = BaseProps &
  BackgroundProps &
  BorderProps &
  BorderRadiusProps &
  FlexProps &
  LayoutProps &
  OverlayProps &
  SpacingProps & { fluid?: boolean };

const Container = ({
  alignItems,
  background,
  border,
  borderRadius,
  children,
  fluid,
  flex,
  gap,
  justifyContent,
  margin,
  overlay,
  padding,
  ...rest
}: ContainerComponentProps) => {
  //console.log(padding);
  // const toChange ([
  //   ["", fluid ? "container--fluid" : "container"],
  //   ["", justifyContent ? "justify-" + justifyContent : ""],
  //   ["", alignItems ? "items-" + alignItems : ""],
  //   ["", gap ? "gap-" + gap : ""],
  // ]);

  const { className, inline } = propStyleHandler({
    userStyle: rest.style,
    background,
    border,
    borderRadius,
    padding,
    margin,
    flex,
  });

  let isOverlay = "";
  if (overlay) {
    const { color: overlayColor, opacity: overlayOpacity = 70 } = overlay;
    isOverlay += overlayColor ? `before:bg-${overlayColor}` : "";
    isOverlay += ` before:opacity-${overlayOpacity}`;
  }

  const combinedClasses = classNames(
    fluid ? "container--fluid" : "container",
    flex ? "flex" : "",
    isOverlay ?? "",
    className,
    rest.className
  );
  return (
    <div {...rest} className={combinedClasses} style={inline}>
      {children}
    </div>
  );
};

// Container.Column = Column;
// Container.Row = Row;
export default Container;