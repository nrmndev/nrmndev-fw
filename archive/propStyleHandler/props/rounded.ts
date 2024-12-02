import { GetStyleReturnProps, RoundedProps } from "@uiTypes";

export const getRoundedStyle = ({
  rounded,
}: RoundedProps): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof rounded === "undefined" || !rounded) {
    return { classes: "", inline };
  }

  //fluid === true && classes.push(`fluid`);
  inline = rounded === true ? { borderRadius: "100%" } : {};
  return { classes: classes.join(" "), inline };
};
