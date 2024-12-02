import { MediaComponentProps } from "components/component.barrel.types";
import { UtilityStyledComponent } from "components/component.barrel.index";
import { forwardRef } from "react";

const Media = (
  {
    icon,
    iconPosition = "left",
    heading,
    body,
    ...utilityProps
  }: MediaComponentProps,
  ref?: React.Ref<HTMLDivElement>
) => {
  //Icon props
  // const {
  //   position: iconPosition = "left",
  //   color: iconColor = mainColor ? mainColor : "primary",
  //   ...iconProps
  // } = icon;
  //Typography as Heading props
  // const {
  //   as: headingAs = "h2",
  //   color: headingColor = mainColor ? mainColor : "primary",
  //   ...headingProps
  // } = heading;

  //const componentTemplate = useComponentTemplate("media", template || 0);

  //left right topleft topcenter topright
  return (
    <UtilityStyledComponent
      as="div"
      {...utilityProps}
      className={`media media__icon-${iconPosition} `}
      ref={ref}
    >
      <div className="media__icon">{icon && icon}</div>
      <div className="media__content">
        {heading && heading}
        {body && body}
        {/* {Heading}
        <Heading/> */}
        {/* <Body /> */}
      </div>
    </UtilityStyledComponent>
  );
};

export default forwardRef(Media);
