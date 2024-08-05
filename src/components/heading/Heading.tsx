import { TextTransform } from "@typekits";
import { MergePropsAsClassNames } from "@utils";

interface IProps extends React.HTMLProps<HTMLHeadingElement>, TextTransform {
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
  ...rest
}: //maxCharacters = "",
IProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const classNames = MergePropsAsClassNames([
    ["", width && "width-" + width.toString()],
    ["", textTransform && "text-" + textTransform],
    [rest.className ? rest.className : ""],
    //["", maxCharacters && "width-ch" + maxCharacters.toString()],
  ]);

  return <Tag className={classNames}>{children}</Tag>;
};

export default Heading;
