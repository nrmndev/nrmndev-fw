import {
  BackgroundProps,
  BaseProps,
  BorderRadiusProps,
  ColorProps,
  PaddingProps,
} from "@uiTypes";
import {
  Icon,
  IconComponentProps,
  Typography,
  TypographyComponentProps,
} from "@uiComponents";
import classNames from "classnames";
// import { IconType } from "react-icons";
import { propStyleHandler } from "@utils";

export interface MediaProps
  extends Omit<BaseProps, "children">,
    BackgroundProps,
    BorderRadiusProps,
    ColorProps,
    PaddingProps {
  icon: IconComponentProps & {
    position?: "top-left" | "left" | "right" | "top-center" | "top-right";
  };
  heading: TypographyComponentProps;
  body: TypographyComponentProps;
}

const Media = ({
  icon,
  background,
  borderRadius,
  heading,
  color: mainColor = "black",
  body,
  padding = "md",
  style,
  ...rest
}: MediaProps) => {
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
  //Typography as Body props
  // const {
  //   as: bodyAs = "p",
  //   //  color: bodyColor = mainColor ? mainColor : "black",
  //   ...bodyProps
  // } = body;

  //Media Props
  const { className } = propStyleHandler({
    padding,
    style,
    background,
    borderRadius,
  });
  const classes = classNames("media", `media__icon-${iconPosition}`, className);

  return (
    <div {...rest} className={classes}>
      <Icon {...iconProps} color={iconColor} className="media__icon" />
      <div className="media__content ">
        <Typography
          {...headingProps}
          as={headingAs}
          color={headingColor}
          className="media__heading "
        />

        <Typography
          // {...bodyProps}
          {...body}
          //color={bodyColor}
          className="media__body"
        />
      </div>
    </div>
  );
};

export default Media;

// <div className={classes}>
// <Icon
//   icon={IconToRender}
//   variant="outline"
//   rounded={roundedIcon}
//   className={"media__icon"}
// />
// <div className="media__content">
//   <h4 className="media__heading">{heading}</h4>
//   <p className="media__body">{body}</p>
// </div>
// </div>
