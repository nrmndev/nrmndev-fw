import { List } from "@components";

const SampleList = () => {
  return (
    <>
      <List
        items={[
          "Market Research",
          "Pre-construction services",
          "Industrial manufacturing",
          "Build and construction",
        ]}
      />
      <List
        display="grid-4-columns"
        items={[
          "Market Research",
          "Pre-construction services",
          "Industrial manufacturing",
          "Build and construction",
        ]}
      />
    </>
  );
};

export default SampleList;
