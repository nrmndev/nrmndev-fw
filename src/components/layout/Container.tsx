import { ContainerComponentProps } from "@uiTypes";
import { UtilityStyledComponent } from "@uiComponents";
import classNames from "classnames";

const Container = ({
  fluid,
  overlay,
  ...utilityProps
}: ContainerComponentProps) => {
  let isOverlay = "";
  if (overlay) {
    const { color: overlayColor, opacity: overlayOpacity = 70 } = overlay;
    isOverlay += overlayColor ? `before:bg-${overlayColor}` : "";
    isOverlay += ` before:opacity-${overlayOpacity}`;
  }

  const combinedClasses = classNames(
    fluid ? "container--fluid" : "container",
    isOverlay ?? ""
  );

  return (
    <UtilityStyledComponent
      as="div"
      {...utilityProps}
      className={combinedClasses}
    />
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
