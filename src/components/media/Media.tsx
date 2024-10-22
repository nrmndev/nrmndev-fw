import { MediaComponentProps } from "@uiTypes";
import { Icon, Typography, UtilityStyledComponent } from "@uiComponents";

const Media = ({
  icon,
  heading,
  color: mainColor = "black",
  body,
  ...utilityProps
}: MediaComponentProps) => {
  //Icon props
  const {
    position: iconPosition = "left",
    color: iconColor = mainColor ? mainColor : "primary",
    ...iconProps
  } = icon;
  //Typography as Heading props
  const {
    as: headingAs = "h2",
    color: headingColor = mainColor ? mainColor : "primary",
    ...headingProps
  } = heading;

  return (
    <UtilityStyledComponent
      as="div"
      className={`media media__icon-${iconPosition}`}
      {...utilityProps}
    >
      <Icon {...iconProps} color={iconColor} className="media__icon" />
      <div className="media__content">
        <Typography
          {...headingProps}
          as={headingAs}
          color={headingColor}
          className="media__heading"
        />

        <Typography {...body} className="media__body" />
      </div>
    </UtilityStyledComponent>
  );
};

export default Media;
