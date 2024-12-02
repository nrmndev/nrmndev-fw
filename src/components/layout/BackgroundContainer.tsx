import { UtilityStyledComponent } from "components/component.barrel.index";
import {
  BackgroundContainerComponentProps,
  BackgroundContainerShape,
} from "components/component.barrel.types";
import { forwardRef, useEffect, useState } from "react";
import classNames from "classnames";

const BackgroundContainer = <T extends React.ElementType>(
  {
    as = "div",
    backgrounds = [],
    usx,
    ...utilityProps
  }: BackgroundContainerComponentProps,
  ref?: React.Ref<React.ElementRef<T>>
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [, setFade] = useState(true); // Toggle for fade-in/out
  // Set up the interval to change the image every 3 seconds
  useEffect(() => {
    setFade(false);
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex: number) => (prevIndex + 1) % backgrounds.length
      );
      setFade(true);
    }, 3000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [backgrounds.length]);
  // const componentTemplate = useComponentTemplate("typography", template || 0);
  // let isOverlay = "";
  // if (overlay) {
  //   const { color: overlayColor, opacity: overlayOpacity = 70 } = overlay;
  //   isOverlay += overlayColor ? `before:bg-${overlayColor}` : "";
  //   isOverlay += ` before:opacity-${overlayOpacity}`;
  // }

  const combinedClasses = classNames();
  //"container",
  //isOverlay ?? ""
  //className
  //`fade-in ${inView ? "visible" : ""}`
  const backgroundStyle: BackgroundContainerShape = {
    background: {
      image: backgrounds[currentIndex],
      size: "cover",
      position: "center",
    },
    //opacity: fade ? 100 : 0,
    //backgroundImage: `url(${backgrounds[currentIndex]})`,
    transition: { timing: "cubic-bezier(.22,.68,0,1.71)", duration: 3 },
    width: { value: 100, unit: "%" },
    height: { value: 100, unit: "vh" }, // Adjust this to fit your layout
    position: { position: "absolute" },

    //backgroundSize: "cover",
    // backgroundPosition: "center",
  };
  const combinedUSX = { ...usx, ...backgroundStyle };
  //const componentTemplate = useComponentTemplate("typography", template || 0);
  return (
    <UtilityStyledComponent
      as={as}
      {...utilityProps}
      usx={combinedUSX}
      // position={{
      //   position: utilityProps?.usx?.position?.position ?? "absolute",
      // }}
      className={combinedClasses}
      //{...{ ...componentTemplate, ...utilityProps }}
      ref={ref}
    />
  );
};

export default forwardRef(BackgroundContainer);
