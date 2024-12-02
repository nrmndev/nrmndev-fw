import { UtilityStyledComponent } from "components/component.barrel.index";
import classNames from "classnames";
import React, { forwardRef } from "react";
import { ContainerComponentProps } from "components/component.barrel.types";
const Container = (
  {
    as: Component = "div", // Default to 'div'
    className,
    ...utilityProps
  }: ContainerComponentProps,
  ref?: React.Ref<React.ElementRef<"div">>
) => {
  // const { ref: inViewRef, inView } = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  // // Combine the forwarded ref and the ref from useInView
  // const combinedRef = ref
  //   ? (node: HTMLDivElement | null) => {
  //       inViewRef(node); // useInView ref
  //       if (ref) {
  //         if (typeof ref === "function") {
  //           ref(node); // Call function-based refs
  //         } else {
  //           (ref as React.MutableRefObject<HTMLDivElement | null>).current =
  //             node; // Assign to object-based refs
  //         }
  //       }
  //     }
  //   : inViewRef;

  // let isOverlay = "";
  // if (overlay) {
  //   const { color: overlayColor, opacity: overlayOpacity = 70 } = overlay;
  //   isOverlay += overlayColor ? `before:bg-${overlayColor}` : "";
  //   isOverlay += ` before:opacity-${overlayOpacity}`;
  // }

  const combinedClasses = classNames(
    "container",
    //isOverlay ?? "",
    className
    //`fade-in ${inView ? "visible" : ""}`
  );
  //const componentTemplate = useComponentTemplate("container", template || 0);
  return (
    <UtilityStyledComponent
      ref={ref}
      as={Component}
      {...utilityProps}
      className={combinedClasses}
      // style={{
      //   opacity: inView ? 1 : 0,
      //   transition: "opacity 0.5s ease-in-out",
      // }}
    />
  );
};

export default forwardRef(Container);
// as UtilityJSX;

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
