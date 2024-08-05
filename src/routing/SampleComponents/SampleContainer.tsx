import { Container, ContainerFlex, ContainerGrid } from "@components";
import SampleMedia from "./SampleMedia";

const SampleContainer = () => {
  return (
    <>
      Sample Grid with templateColumns = 4
      <ContainerGrid
        gap="md"
        templateColumns={4}
        // style={{ backgroundColor: "black", minHeight: "200px" }}
      >
        <SampleMedia />
      </ContainerGrid>
      <Container style={{ background: "#666666" }}>
        Sample container max width
      </Container>
      <Container fluid style={{ background: "#dedede" }}>
        Sample container max width
      </Container>
      <ContainerFlex>
        <ContainerFlex.Child flexGrow={2}>
          <>Hello</>
        </ContainerFlex.Child>
        <ContainerFlex.Child>
          <>Item 2</>
        </ContainerFlex.Child>
      </ContainerFlex>
    </>
  );
};

export default SampleContainer;
