import { List } from "@uiComponents";

const SampleList = () => {
  return (
    <>
      <List
        listType="ordered-list"
        items={[
          { label: "Market Research", children: [{ label: "Level 1" }] },
          { label: "Pre-construction services" },
          { label: "Industrial manufacturing" },
          { label: "Build and construction" },
        ]}
      />
      <hr />
      <List
        listType="ordered-list"
        display="inline-flex"
        items={[
          { label: "Market Research" },
          { label: "Pre-construction services" },
          { label: "Industrial manufacturing" },
          { label: "Build and construction" },
        ]}
        textAlign="right"
      />
      <hr />
      <List
        listType="ordered-list"
        display="inline-flex-space-between"
        items={[
          { label: "Market Research" },
          { label: "Pre-construction services" },
          { label: "Industrial manufacturing" },
          { label: "Build and construction" },
        ]}
      />
      <hr />

      <List
        display="grid-4-columns"
        items={[
          { label: "Market Research" },
          { label: "Pre-construction services" },
          { label: "Industrial manufacturing" },
          { label: "Build and construction" },
        ]}
      />
    </>
  );
};

export default SampleList;
