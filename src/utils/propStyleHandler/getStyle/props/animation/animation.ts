import {
  AnimationOptions,
  AnimationProps,
  GetStyleReturnProps,
  HoverProps,
  TransitionOptions,
} from "_uiTypes";

import { getColorStyle } from "../color/color";
import { getBackgroundStyle } from "../background/background";
import { getHoverStyle } from "../hover/hover";

export const getAnimationStyle = <T extends AnimationProps>({
  animation,
}: T): GetStyleReturnProps & { inViewInline?: React.CSSProperties } => {
  let classes: string = "";
  let inline: React.CSSProperties = {};
  let inViewInline: React.CSSProperties = {};
  //console.log(animation?.hover?.start?.opacity);
  if (typeof animation === "undefined") {
    return { classes, inline, inViewInline };
  }

  /*** Hover Styles
   *
   */
  const { hover } = animation;

  let inlineStyles: React.CSSProperties = {};
  let inviewStyles: React.CSSProperties = {};
  let hoverStyles: any = {};
  if (hover) {
    hoverStyles = getHoverStyle({
      hover: hover,
    }) as HoverProps;
  }

  /*** Inview Styles
   *
   */
  //let inViewInlineStyles: React.CSSProperties = {};
  const { inView } = animation;

  if (inView) {
    const { transition } = inView as AnimationOptions;

    const {
      delay = 0,
      duration = 0.25,
      timing = "ease-in",
    } = transition as TransitionOptions;
    inviewStyles = {
      ...(inView.color ? getColorStyle({ color: inView.color }) : {}),
      ...(inView.background
        ? getBackgroundStyle({ background: inView.background })
        : {}),
      ...(inView.opacity || inView.opacity === 0
        ? { opacity: `calc(${inView.opacity}/100)` }
        : {}),
      transition: `all ${duration}s ${timing} ${delay}s`,
    };
  }

  inline = {
    ...inlineStyles,
  };
  //const {end} = hover as AnimationSettings;
  //classes += `animation-${animation.hover?.start?.opacity}`;

  return {
    classes,
    inline,
    hoverInline: hoverStyles.hoverInline,
    inViewInline: inviewStyles,
  };
};

// const handleOpacity = (value: number): React.CSSProperties => {
//   return { opacity: `calc(${value}/100)` };
// };
