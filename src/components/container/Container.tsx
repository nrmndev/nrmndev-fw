import { SpreadClassNameAsProps } from "@utils/SpreadClassNameAsProps";

type IProps = React.HTMLProps<HTMLDivElement> & { fluid?: boolean };

const Container = ({ children, fluid = false, ...props }: IProps) => {
  const classNames = SpreadClassNameAsProps([
    "container",
    fluid ? "fluid" : "",
  ]);
  return (
    <div {...classNames} {...props}>
      {children}
    </div>
  );
};

export default Container;
