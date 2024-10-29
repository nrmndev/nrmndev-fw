import { Column } from "@uiComponents";

const SampleColumn = () => {
  return (
    <Column
      gap={"lg"}
      flex={{ alignContent: "center" }}
      display={"flex"}
      as="article"
      opacity={10}
    >
      <div>Test Gap</div>
      <div>Test Gap</div>
      <div>Test Gap</div>
      <div>Test Gap</div>
    </Column>
  );
};

export default SampleColumn;
