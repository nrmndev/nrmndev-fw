import type { TextTransform } from "types/Index";
import { SpreadClassNameAsProps } from "@utils/SpreadClassNameAsProps";

interface IProps extends TextTransform {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  width?: 25 | 33 | 50 | 66 | 75 | 80 | "";
  //maxCharacters?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | "";
}
const Heading = ({
  children,
  level,
  textTransform = "",
  width = "",
}: //maxCharacters = "",
IProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const classNames = SpreadClassNameAsProps([
    //["", maxCharacters && "width-ch" + maxCharacters.toString()],
    ["", width && "width-" + width.toString()],
    ["", textTransform && "text-" + textTransform],
  ]);

  return <Tag {...classNames}>{children}</Tag>;
};

export default Heading;
