import { GetStyleReturnProps, HoverProps, TransitionOptions } from "_uiTypes";

import {
  getBorderStyle,
  getBackgroundStyle,
  getColorStyle,
  getOpacityStyle,
  getTranslateStyle,
} from "_utils";

export const getHoverStyle = <T extends HoverProps>({
  hover,
}: T): GetStyleReturnProps => {
  let classes: string[] = [];
  let inline: React.CSSProperties = {};
  let hoverInline: React.CSSProperties = {};
  if (!hover || typeof hover !== "object")
    return { classes: classes.join(""), inline };

  const { background, color, border, opacity, translate, transition } = hover;

  //Background
  let inlineBackground = {};
  if (background) {
    const { inline } = getBackgroundStyle({
      background: background,
    });
    inlineBackground = inline ? inline : inlineBackground;
  }

  //Color
  let inlineColor = {};
  if (color) {
    const { inline } = getColorStyle({
      color: color,
    });
    inlineColor = inline ? inline : inlineColor;
  }

  //Color
  let inlineOpacity = {};
  if (opacity) {
    const { inline } = getOpacityStyle({
      opacity: opacity,
    });
    inlineOpacity = inline ? inline : inlineOpacity;
  }

  //Translate
  let inlineTranslate = {};
  if (translate) {
    const { inline } = getTranslateStyle({
      translate: translate,
    });
    inlineTranslate = inline ? inline : inlineTranslate;
  }

  //Transition
  let inlineTransition = {};
  if (transition) {
    const {
      delay = 0,
      duration = 0.25,
      timing = "ease-in",
    } = transition as TransitionOptions;
    inlineTransition = { transition: `all ${duration}s ${timing} ${delay}s` };
  }

  // let inlineColor = {};
  // if (color) {
  //   const { inline } = getColorStyle({
  //     color: color,
  //   });
  //   //inlineBorder == inline ? `&:hover {${convertCSSPropToString(inline)}}` : ``;
  //   inlineColor = inline ? inline : {};
  // }

  //Classname approach
  //color && classes.push(`h:c-${color}`);

  //background && classes.push(`h:bg-${background}`);

  //Border
  let inlineBorder = {};
  if (border) {
    const { inline } = getBorderStyle({ border: border });
    //inlineBorder == inline ? `&:hover {${convertCSSPropToString(inline)}}` : ``;
    inlineBorder = inline ? inline : inlineBorder;
  }

  // TODO
  // animation &&
  //   animation.length > 0 &&
  //   animation.map((a) => classes.push(`h:a-${a}`));

  hoverInline = {
    ...(inlineBorder ?? {}),
    ...(inlineBackground ?? {}),
    ...(inlineColor ?? {}),
    ...(inlineOpacity ?? {}),
    ...(inlineTranslate ?? {}),
    ...(inlineTransition ?? {}),

    //transition: "all .25s ease-in",
  };

  return { classes: classes.join(" "), inline, hoverInline: hoverInline };
};
