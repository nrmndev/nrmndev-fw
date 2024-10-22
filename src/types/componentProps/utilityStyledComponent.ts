import { AsOptionalProps } from "@uiTypes";
import { PropStyleHandlerProps } from "@utils";

export type UtilityStyledComponentProps = {
  as: React.ElementType | React.ComponentType<any>;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
} & PropStyleHandlerProps &
  AsOptionalProps & { role?: string; title?: string }; //all props below are to follow
