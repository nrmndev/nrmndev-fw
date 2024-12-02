import { GetStyleReturnProps, TransformProps } from "_uiTypes";

export const getTransformStyle = ({
  transform,
}: TransformProps): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof transform === "undefined" || !transform) {
    return { classes: "", inline };
  }
  const transformString =
    Object.entries(transform || {})
      .map(([key, value]) => {
        if (key === "translate" || key === "rotate") {
          const transformValues = Object.entries(value as any)
            .map(([axis, val]: any) => {
              switch (key) {
                case "rotate":
                  return `rotate${axis.toUpperCase()}(${val}deg)`;

                default:
                  return `${key}${axis.toUpperCase()}(${val.value}${
                    val.unit ?? "px"
                  })`;
              }
            })
            .join(" ");

          transform.scale &&
            transformValues.concat(" ", transform.scale.toString());
          //transform.scale && transformString.push(`scale(${transform.scale})`)
          return transformValues;
        }
        return `${key}(${value})`; // for perspective, matrix, etc.
      })
      .join(" ") ?? {};
  //fluid === true && classes.push(`fluid`);
  inline = { transform: transformString };
  return { classes: classes.join(" "), inline };
};

//${key === "rotate" ? "deg":""}
//`${key}${axis.toUpperCase}(${val})`)
