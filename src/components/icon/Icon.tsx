import { UtilityStyledComponent } from "components/component.barrel.index";
import { ImCogs } from "react-icons/im";
import { IconComponentProps } from "components/component.barrel.types";
import { forwardRef } from "react";
// import styled from "styled-components";

const Icon = (props: IconComponentProps, ref?: React.Ref<HTMLSpanElement>) => {
  const {
    icon: Icon = ImCogs,
    size = "sm",
    variant = "flat",
    template,
    ...utilityProps
  } = props;

  const variantStyle = (variant: "solid" | "outline" | "flat") => {
    switch (variant) {
      case "solid":
        return { backgroundColor: utilityProps.color };
      case "outline":
        return {
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: utilityProps.color,
        };
      case "flat":
        return {
          color: utilityProps.color,
        };
      default:
        return {}; // Fallback style, empty object or any default style
    }
  };
  let variantStyles = {
    size: size,
    ...variantStyle(variant),
    font: { size: size },
  };

  return (
    <UtilityStyledComponent
      as="span"
      {...{ ...variantStyles, ...utilityProps }}
      className={"icon"}
      ref={ref}
    >
      <Icon />
    </UtilityStyledComponent>
  );
};

export default forwardRef(Icon);

// const StyledIcon = styled(Icon)`
//   background: -webkit-gradient(
//     linear,
//     left top,
//     left bottom,
//     from(#f00),
//     to(#333)
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   display: initial; /* reset Font Awesome's display:inline-block */
// `;
