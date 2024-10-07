type BaseProps = {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  title?: string;
  role?: string;
  name?: string;
  tabIndex?: number;
  label?: string;
};

export default BaseProps;

export type RequireBaseProps<T extends keyof BaseProps> = Required<
  Pick<BaseProps, T>
> &
  Omit<BaseProps, T>;
