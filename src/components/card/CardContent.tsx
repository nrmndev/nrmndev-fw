import { BaseProps, PaddingProps } from "@uiTypes";
import { UtilityStyledComponent } from "components/utility-styled-component";

type CardContentComponentProps = {} & PaddingProps & BaseProps;
const CardContent = (props: CardContentComponentProps) => {
  //const classes = classNames(rest.className, "card__content", `p-${padding}`);

  return (
    <UtilityStyledComponent as="div" className={"card__content"} {...props} />
  );
};

export default CardContent;
