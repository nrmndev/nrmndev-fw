import { TextTransform } from "@components/modifiers/textTransform";

interface IProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  maxCharacters?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80;
  textTransform?: TextTransform;
}
export const Heading = ({
  level,
  children,
  maxCharacters,
  textTransform,
}: IProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const classNames: string[] = [];
  maxCharacters && classNames.push(`width-ch` + maxCharacters);
  textTransform && classNames.push(`text-` + textTransform);

  const props = {
    ...(classNames.length > 0 && { className: classNames.join(" ") }),
  };
  //   maxCharacters && classNames.push(`width-ch` + maxCharacters);
  //   textTransform && classNames.push(`text-` + textTransform);

  return <Tag {...props}>{children}</Tag>;
};
