import { BaseProps, TypographyProps } from "@uiTypes";

/**
 * Acts as a wrapper that handles utility props.
 * @returns Component with utility classNames or inlineStyles
 */

type UtilityStyledComponentProps = {} & BaseProps & TypographyProps;
const UtilityStyledComponent = (props: UtilityStyledComponentProps) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default UtilityStyledComponent;
