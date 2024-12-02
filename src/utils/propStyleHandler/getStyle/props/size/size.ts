import { SizeProps, ValueAndUnitProps, GetStyleReturnProps } from "_uiTypes";
import { typeCheckers } from "_utils";

//Size Prop is styled in form of width and height
export const getSizeStyle = <T extends SizeProps>({
  size,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof size === "undefined") {
    return { classes: "", inline };
  }

  if (typeof size === "string") {
    inline = {
      width: `calc(var(--spacing-${size})*3)`,
      height: `calc(var(--spacing-${size})*3)`,
    };
    return { classes: "", inline };
    //classes.push(`font-${font}`);
  }

  if (typeof size === "object") {
    let valueOfSize: string = "";
    if (size) {
      if (typeCheckers.valueAndUnitProps(size)) {
        const { value, unit = "px" } = size as ValueAndUnitProps;
        valueOfSize = `${value}${unit}`;
        inline = {
          padding: valueOfSize,
        };
      }
    }
  }

  return { classes: classes.join(" "), inline };
};
