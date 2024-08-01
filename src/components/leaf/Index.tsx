const Leaf = () => {
  return (
    <>
      <div
        className="leaf"
        style={{
          minHeight: "200px",
          minWidth: "300px",
          display: "inline-block",
        }}
      >
        Leaf
      </div>{" "}
      <div
        className="leaf leaf--alt"
        style={{
          minHeight: "200px",
          minWidth: "300px",
          display: "inline-block",
        }}
      >
        Leaf Alt
      </div>
    </>
  );
};

export default Leaf;
