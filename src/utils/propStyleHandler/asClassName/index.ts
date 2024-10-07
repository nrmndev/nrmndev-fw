import {
  AlignContentOptions,
  AlignItemsOptions,
  FlexDirectionOptions,
  FlexProps,
  FlexWrapOptions,
  JustifyContentOptions,
} from "@uiTypes";
import { flexClasses } from "./flex";

// type Flex = {
//   flexDirection?: FlexDirectionOptions;
//   justifyContent?: JustifyContentOptions;
//   alignItems?: AlignItemsOptions;
//   alignContent?: AlignContentOptions;
//   flexWrap?: FlexWrapOptions;
// };

interface Prop extends FlexProps {}
const propToClass = ({ flex }: Prop): string[] => {
  let className = [];
  flex && className.push(flexClasses(flex));

  className && className;
  return [""];
};

export default propToClass;
