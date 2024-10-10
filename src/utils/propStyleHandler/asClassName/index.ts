import {
  FlexColumnProps,
  // AlignContentOptions,
  // AlignItemsOptions,
  // FlexDirectionOptions,
  // FlexWrapOptions,
  // JustifyContentOptions,
  FlexProps,
} from "@uiTypes";
import { flexClasses } from "./flex";
import flexColumns from "./flexColumns";

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

propToClass.flexColumns = flexColumns;
export default propToClass;
