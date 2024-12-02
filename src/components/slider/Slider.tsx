import { UtilityStyledComponent } from "@uiComponents";
import { SliderComponentProps } from "@uiComponentTypes";
import React, { forwardRef, useEffect, useState } from "react";

const Slider = <T extends React.ElementType>(
  { images }: SliderComponentProps,
  ref?: React.Ref<React.ElementRef<T>>
) => {
  console.log(images);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Set up the interval to change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [images.length]);
  // const componentTemplate = useComponentTemplate("typography", template || 0);

  const bannerStyles = {
    width: "100%",
    maxWidth: "100%",
    //...(currentIndex !== i ? { display: "none" } : {})
  };
  return (
    <UtilityStyledComponent as="div" ref={ref} className="slider">
      {images.map((image, i) => {
        return (
          <img
            src={image}
            key={i}
            style={{
              display: currentIndex !== i ? "none" : "block",
              ...bannerStyles,
            }}
          />
        );
      })}
    </UtilityStyledComponent>
  );
};

export default forwardRef(Slider);
