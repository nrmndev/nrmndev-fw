import { IconBaseProps } from "types/Index";
import Icon from "@components/icon/Index";

interface IProps extends IconBaseProps {
  heading: string;
  body: JSX.Element;
  link?: string;
  target?: "_blank" | "_self" | "_top" | "_parent";
}

const Media = ({
  link,
  target = "_self",
  icon: IconToRender,
  heading,
  body,
}: IProps) => {
  if (link)
    return (
      <div className="media">
        <a className="media__link" href={link} target={target}>
          <Icon icon={IconToRender} variant="primary" />
          <div className="media__content">
            <h4 className="media__heading">{heading}</h4>
            <p className="media__body">{body}</p>
          </div>
        </a>
      </div>
    );
  else
    return (
      <div className="media">
        <Icon icon={IconToRender} variant="primary" />
        <div className="media__content">
          <h4 className="media__heading">{heading}</h4>
          <p className="media__body">{body}</p>
        </div>
      </div>
    );
};

export default Media;
