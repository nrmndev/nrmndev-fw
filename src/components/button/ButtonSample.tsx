import { MouseEventHandlerProps, BaseProps } from "@typekits";

interface IProps
  extends BaseProps,
    Pick<MouseEventHandlerProps<HTMLButtonElement>, "onClick"> {}

const ButtonSample = ({ onClick, children, ...rest }: IProps) => {
  return (
    <button onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default ButtonSample;
