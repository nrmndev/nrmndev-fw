import {
  GetStyleReturnProps,
  TransitionOptions,
  TransitionProps,
} from "_uiTypes";

export const getTransitionStyle = <T extends TransitionProps>({
  transition,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};

  if (typeof transition === "undefined") {
    return { classes: classes.join(" "), inline };
  }

  if (transition) {
    const {
      delay = 0,
      duration = 0.25,
      timing = "ease-in",
    } = transition as TransitionOptions;
    inline = { transition: `all ${duration}s ${timing} ${delay}s` };
  }
  const sanizitizedClasses = classes.filter((c) => c !== "");
  return { classes: sanizitizedClasses.join(" "), inline };
};
