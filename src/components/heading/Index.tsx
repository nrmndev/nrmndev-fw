import { TextTransform } from "@components/modifiers/textTransform";
import { SpreadClassNameAsProps } from "@utils/SpreadClassNameAsProps";

interface IProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  //maxCharacters?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | "";
  width?: 25 | 33 | 50 | 66 | 75 | 80 | "";
  textTransform?: TextTransform | "";
}
export const Heading = ({
  level,
  children,
  //maxCharacters = "",
  width = "",
  textTransform = "",
}: IProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const classNames = SpreadClassNameAsProps([
    //["", maxCharacters && "width-ch" + maxCharacters.toString()],
    ["", width && "width-" + width.toString()],
    ["", textTransform && "text-" + textTransform],
  ]);

  return <Tag {...classNames}>{children}</Tag>;
};