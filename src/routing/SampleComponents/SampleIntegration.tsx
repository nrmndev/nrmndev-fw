import { Container, Image } from "@uiComponents";

const SampleIntegration = () => {
  return (
    <Container
      borderRadius={"lg"}
      background={"primary"}
      flex={{
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "col",
        flexWrap: "wrap",
      }}
      marginTop="negative-xl"
    >
      <Image
        src="/images/homepage/image-1.png"
        width={{ unit: "vw", value: 100 }}
      />
    </Container>
  );
};

export default SampleIntegration;
