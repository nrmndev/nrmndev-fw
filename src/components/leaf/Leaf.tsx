import construction_1_webp from "@images/homepage/construction_1.webp";
import construction_1_jpg from "@images/homepage/construction_1.jpg";

const Leaf = () => {
  return (
    <>
      <div className="leaf">
        <picture>
          <source srcSet={construction_1_webp} type="image/webp" />
          <img src={construction_1_jpg} />
        </picture>
      </div>{" "}
      <div className="leaf leaf--alt">
        <picture>
          <source srcSet={construction_1_webp} type="image/webp" />
          <img src={construction_1_jpg} />
        </picture>
      </div>
    </>
  );
};

export default Leaf;
