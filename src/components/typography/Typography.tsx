import { BaseProps, MarginProps, TypographyProps } from "@uiTypes";
import { propStyleHandler } from "@utils";
import classNames from "classnames";

export interface TypographyComponentProps
  extends BaseProps,
    TypographyProps,
    MarginProps {}
const Typography = ({
  as: Component = "p",
  children,
  color,
  textAlign,
  textTransform,
  fontSize,
  margin,
  ...rest
}: TypographyComponentProps) => {
  const { className, inline } = propStyleHandler({
    userStyle: rest.style,
    color,
    fontSize,
    margin,
  });

  const classes = classNames(
    //color ? "color-" + color : undefined,
    textAlign ? `text-${textAlign}` : undefined,
    textTransform ? `text-${textTransform}` : undefined,
    className,
    rest.className
  );
  return (
    <Component {...rest} style={inline} className={classes}>
      {children}
    </Component>
  );
};

export default Typography;
