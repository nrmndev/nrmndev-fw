import { IconBaseProps } from "@typekits";
import { Icon } from "@components";

interface IProps
  extends React.HTMLProps<HTMLDivElement>,
    Omit<IconBaseProps, "rounded"> {
  heading: string;
  body: JSX.Element;
  link?: string;
  target?: "_blank" | "_self" | "_top" | "_parent";
  roundedIcon?: boolean;
}

const Media = ({
  link,
  target = "_self",
  icon: IconToRender,
  roundedIcon = false,
  heading,
  body,
  ...rest
}: IProps) => {
  if (link)
    return (
      <div className={`media ${rest.className ? rest.className : ""}`}>
        <a className="media__link" href={link} target={target}>
          <Icon
            icon={IconToRender}
            variant="primary"
            rounded={roundedIcon}
            className="icon__media"
          />
          <div className="media__content">
            <h4 className="media__heading">{heading}</h4>
            <p className="media__body">{body}</p>
          </div>
        </a>
      </div>
    );
  else
    return (
      <div className={`media ${rest.className ? rest.className : ""}`}>
        <Icon icon={IconToRender} variant="primary" rounded={roundedIcon} />
        <div className="media__content">
          <h4 className="media__heading">{heading}</h4>
          <p className="media__body">{body}</p>
        </div>
      </div>
    );
};

export default Media;
