// import Column from "./Column";
// import Row from "./Row";
import {
  BackgroundProps,
  BaseProps,
  BorderProps,
  BorderRadiusProps,
  FlexProps,
  OverlayProps,
  PaddingProps,
  MarginDiscriminatedProps,
  PositionProps,
  WidthProps,
  HeightProps,
} from "@uiTypes";
import classNames from "classnames";

import { UtilityStyledComponent } from "components/utility-styled-component";

export type ContainerComponentProps = BaseProps &
  BackgroundProps &
  BorderProps &
  BorderRadiusProps &
  FlexProps &
  OverlayProps &
  PaddingProps &
  PositionProps &
  WidthProps &
  HeightProps &
  MarginDiscriminatedProps & { fluid?: boolean };

const Container = ({ fluid, overlay, ...rest }: ContainerComponentProps) => {
  let isOverlay = "";
  if (overlay) {
    const { color: overlayColor, opacity: overlayOpacity = 70 } = overlay;
    isOverlay += overlayColor ? `before:bg-${overlayColor}` : "";
    isOverlay += ` before:opacity-${overlayOpacity}`;
  }

  const combinedClasses = classNames(
    fluid ? "container--fluid" : "container",
    isOverlay ?? "",

    rest.className
  );

  return (
    <UtilityStyledComponent as="div" {...rest} className={combinedClasses} />
  );
};

export default Container;

// const Container = ({
//   alignItems,
//   background,
//   border,
//   borderRadius,
//   children,
//   fluid,
//   flex,
//   //gap,
//   justifyContent,
//   margin,
//   marginBottom,
//   marginLeft,
//   marginRight,
//   marginTop,
//   vMargin,
//   hMargin,
//   overlay,
//   padding,
//   ...rest
// }: ContainerComponentProps) => {
//   //console.log(padding);
//   // const toChange ([
//   //   ["", fluid ? "container--fluid" : "container"],
//   //   ["", justifyContent ? "justify-" + justifyContent : ""],
//   //   ["", alignItems ? "items-" + alignItems : ""],
//   //   ["", gap ? "gap-" + gap : ""],
//   // ]);
//   const allMarginProps = {
//     vMargin,
//     hMargin,
//     margin,
//     marginBottom,
//     marginLeft,
//     marginRight,
//     marginTop,
//   };
//   const { className, inline } = propStyleHandler({
//     userStyle: rest.style,
//     background,
//     border,
//     borderRadius,
//     padding,
//     ...allMarginProps,
//     flex,
//   });

//   let isOverlay = "";
//   if (overlay) {
//     const { color: overlayColor, opacity: overlayOpacity = 70 } = overlay;
//     isOverlay += overlayColor ? `before:bg-${overlayColor}` : "";
//     isOverlay += ` before:opacity-${overlayOpacity}`;
//   }

//   const combinedClasses = classNames(
//     fluid ? "container--fluid" : "container",
//     flex ? "flex" : "",
//     isOverlay ?? "",
//     className,
//     rest.className
//   );

//   return (
//     <div {...rest} className={combinedClasses} style={inline}>
//       {children}
//     </div>
//   );
// };
