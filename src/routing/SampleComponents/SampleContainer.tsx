import { ContainerGrid } from "@components/index";
import SampleMedia from "./SampleMedia";

const SampleContainer = () => {
  return (
    <>
      <ContainerGrid
        gap="md"
        templateColumns={4}
        // style={{ backgroundColor: "black", minHeight: "200px" }}
      >
        <SampleMedia />
      </ContainerGrid>
    </>
  );
};

export default SampleContainer;
