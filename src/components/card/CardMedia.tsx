type CardMediaComponentProps = {
  image: string;
  title?: string;
  height?: number;
};

const CardMedia = ({
  image = "",
  title = "",
  height = 100,
}: CardMediaComponentProps) => {
  return (
    <div
      className="card__media"
      style={{
        backgroundImage: `url(${image})`,
        height: `${height}px`,
        // display: "none",
      }}
      role="img"
      title={title}
    />
  );
};

export default CardMedia;
