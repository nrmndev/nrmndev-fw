// import BorderProps from "types/props/borderProps";

// import {
//   EdgeOptions,
//   BorderIsEdgeOptions,
//   BorderBaseProps,
//   BackgroundAsImageProps,
// } from "@uiTypes";
import { boxShadow } from "./boxShadow";
import { border } from "./border";
import { background } from "./background";
import { padding } from "./padding";
import { margin } from "./margin";
import { fontSize } from "./fontSize";
import { borderRadius } from "./borderRadius";
import { height } from "./height";
import { width } from "./width";
// type BoxShadowOptions = Record<1 | 2 | 3, string>;
// type Border = BorderBaseProps & (BorderIsEdgeOptions & BorderIsEdgeOptions);
// type FontSize = { value: number; unit?: "px" | "%" | "rem" };
// type BorderRadius = {
//   topLeft?: number;
//   topRight?: number;
//   bottomRight?: number;
//   bottomLeft?: number;
//   unit?: "px" | "%" | "rem";
// };

// type Background = BackgroundAsImageProps;
const propToStyle = {
  background,
  border,
  borderRadius,
  boxShadow,
  fontSize,
  width,
  height,
  margin,
  padding,
};

export default propToStyle;

// background: <T extends Background>(
//   background: T
// ): React.CSSProperties | undefined => {
//   if (!background) return;

//   const {
//     attachment = "fixed",
//     image,
//     position = "center",
//     repeat = "no-repeat",
//     size = "cover",
//   } = background;

//   const positionStyle =
//     typeof position === "object"
//       ? `${position.value}/${position.unit}`
//       : position;
//   return {
//     background: `url(${image}) ${repeat} ${positionStyle}/${size} ${attachment}`,
//   };
// },
// border: <T extends Border>(border: T): React.CSSProperties | undefined => {
//   if (!border) return;

//   const {
//     top = 0,
//     right = 0,
//     bottom = 0,
//     left = 0,
//     unit = "px",
//     color = "primary",
//   } = border;

//   return {
//     borderWidth: 0,
//     ...(top ? { borderTop: `${top}${unit}` } : {}),
//     ...(right ? { borderRight: `${right}${unit}` } : {}),
//     ...(bottom ? { borderBottom: `${bottom}${unit}` } : {}),
//     ...(left ? { borderLeft: `${left}${unit}` } : {}),
//     ...(color ? { borderColor: `var(--color-${color})` } : {}),
//     borderStyle: "solid",
//   };
// },

// boxShadow: <T extends keyof BoxShadowOptions>(
//   boxShadow: T
// ): string | undefined => {
//   if (!boxShadow) return;
//   const boxShadowOptions: BoxShadowOptions = {
//     1: "var(--box-shadow-1)",
//     2: "var(--box-shadow-2)",
//     3: "var(--box-shadow-3)",
//   };
//   return boxShadowOptions[boxShadow];
// },
// padding: <T extends EdgeOptions>(
//   padding: T
// ): React.CSSProperties | undefined => {
//   if (!padding) return;
//   const { top = 0, right = 0, bottom = 0, left = 0, unit = "px" } = padding;
//   return {
//     ...(top ? { paddingTop: `${top}${unit}` } : {}),
//     ...(right ? { paddingRight: `${right}${unit}` } : {}),
//     ...(bottom ? { paddingBottom: `${bottom}${unit}` } : {}),
//     ...(left ? { paddingLeft: `${left}${unit}` } : {}),
//   };
// },

// margin: <T extends EdgeOptions>(
//   margin: T
// ): React.CSSProperties | undefined => {
//   if (!margin) return;
//   const { top = 0, right = 0, bottom = 0, left = 0, unit = "px" } = margin;
//   return {
//     ...(top ? { marginTop: `${top}${unit}` } : {}),
//     ...(right ? { marginRight: `${right}${unit}` } : {}),
//     ...(bottom ? { marginBottom: `${bottom}${unit}` } : {}),
//     ...(left ? { marginLeft: `${left}${unit}` } : {}),
//   };
// },

// flex: <T extends Flex>(flex: T): React.CSSProperties | undefined => {
//   if (!flex) return;
//   const {
//     alignContent,
//     alignItems,
//     flexDirection,
//     flexWrap,
//     justifyContent,
//   } = flex;
//   // const {
//   //   top = 0,
//   //   right = 0,
//   //   bottom = 0,
//   //   left = 0,
//   //   unit = "px",
//   //   color = "primary",
//   // } = border;

//   return {
//     // ...(top ? { borderTop: `${top}${unit}` } : {}),
//     // ...(right ? { borderRight: `${right}${unit}` } : {}),
//     // ...(bottom ? { borderBottom: `${bottom}${unit}` } : {}),
//     // ...(left ? { borderLeft: `${left}${unit}` } : {}),
//     // ...(color ? { borderColor: `var(--color-${color})` } : {}),
//     // borderStyle: "solid",
//   };
// },

// fontSize: <T extends FontSize>(
//   fontSize: T
// ): React.CSSProperties | undefined => {
//   if (!fontSize) return;
//   const { value, unit = "px" } = fontSize;

//   return {
//     fontSize: `${value}${unit}`,
//   };
// },

// borderRadius: <T extends BorderRadius>(
//   borderRadius: T
// ): React.CSSProperties | undefined => {
//   if (!borderRadius) return;
//   const {
//     topRight = 0,
//     topLeft = 0,
//     bottomRight = 0,
//     bottomLeft = 0,
//     unit = "px",
//   } = borderRadius;
//   return {
//     ...(topRight ? { borderTopRightRadius: `${topRight}${unit}` } : {}),
//     ...(topLeft ? { borderTopLeftRadius: `${topLeft}${unit}` } : {}),
//     ...(bottomRight
//       ? { borderBottomRightRadius: `${bottomRight}${unit}` }
//       : {}),
//     ...(bottomLeft ? { borderBottomLeftRadius: `${bottomLeft}${unit}` } : {}),
//   };
// },
