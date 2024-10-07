import { BaseProps, TextTransformProps } from "@uiTypes";
import classNames from "classnames";

export interface IProps extends BaseProps, TextTransformProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  width?: 25 | 33 | 50 | 66 | 75 | 80 | "";
  //maxCharacters?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | "";
}
const Heading = ({
  children,
  level,
  textTransform,
  width,
  ...rest
}: //maxCharacters = "",
IProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const className = classNames(
    width ? "width-" + width.toString() : "",
    textTransform ? "text-" + textTransform : ""
    //["", maxCharacters && "width-ch" + maxCharacters.toString()],
  );

  return (
    <Tag {...rest} className={className}>
      {children}
    </Tag>
  );
};

export default Heading;
