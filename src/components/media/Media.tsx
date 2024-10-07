import { BaseProps, PaddingProps } from "@uiTypes";
import {
  Icon,
  IconComponentProps,
  Typography,
  TypographyComponentProps,
} from "@uiComponents";
import classNames from "classnames";
import { IconType } from "react-icons";
import { propStyleHandler } from "@utils";

export interface MediaProps extends BaseProps, PaddingProps {
  icon: IconComponentProps & {
    position?: "top-left" | "left" | "right" | "top-center" | "top-right";
  };
  heading: TypographyComponentProps;
  body: Omit<TypographyComponentProps, "as"> & {
    as?: "p" | "span";
  };
}

const Media = ({
  icon,
  heading,
  body,
  padding = "md",
  style,
  ...rest
}: MediaProps) => {
  //Icon props
  const {
    position: iconPosition = "left",
    margin: iconMargin = "sm",
    ...iconProps
  } = icon;
  //Typography as Heading props
  const {
    as: headingAs = "h2",
    color: headingColor = "primary",
    ...headingProps
  } = heading;
  //Typography as Body props
  const { as: bodyAs = "p", color: bodyColor = "black", ...bodyProps } = body;

  //Media Props
  const { className, inline } = propStyleHandler({ padding, userStyle: style });
  const classes = classNames("media", `media__icon-${iconPosition}`, className);

  return (
    <div {...rest} className={classes} style={inline}>
      <Icon {...iconProps} margin={iconMargin} className="media__icon" />
      <div className="media__content ">
        <Typography
          {...headingProps}
          as={headingAs}
          color={headingColor}
          className="media__heading "
        />

        <Typography
          {...bodyProps}
          as={bodyAs}
          color={bodyColor}
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
