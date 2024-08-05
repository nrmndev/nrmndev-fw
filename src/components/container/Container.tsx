import { MergePropsAsClassNames } from "@utils";

type IProps = React.HTMLProps<HTMLDivElement> & { fluid?: boolean };

const Container = ({ children, fluid = false, ...rest }: IProps) => {
  const classNames = MergePropsAsClassNames([
    [rest.className ? rest.className : ""],
    ["", fluid ? "container--fluid" : "container"],
  ]);
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default Container;
