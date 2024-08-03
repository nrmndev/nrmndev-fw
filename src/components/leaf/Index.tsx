const Leaf = () => {
  return (
    <>
      <div className="leaf">
        <picture>
          <source
            srcSet="../../../public/images/homepage/construction_1.webp"
            type="image/webp"
          />
          <img src="../../../public/images/homepage/construction_1.jpg" />
        </picture>
      </div>{" "}
      <div className="leaf leaf--alt">
        <picture>
          <source
            srcSet="../../../public/images/homepage/construction_1.webp"
            type="image/webp"
          />
          <img src="../../../public/images/homepage/construction_1.jpg" />
        </picture>
      </div>
    </>
  );
};

export default Leaf;
