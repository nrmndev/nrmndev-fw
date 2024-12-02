import { Card, Container, Media } from "components/component.barrel.index";
import { BsFillHouseGearFill } from "react-icons/bs";
const SampleCard = () => (
  <>
    <Container
      fluid
      background={"light"}
      padding={{ top: { value: 50 }, bottom: { value: 50 } }}
    >
      <Card boxShadow="box-shadow-3" background={"white"} padding={"sm"}>
        <Media
          padding={"zero"}
          icon={{
            icon: BsFillHouseGearFill,
            position: "top-left",
            rounded: true,
            variant: "outline",
            background: "primary",
            color: "white",
            size: "xxl",
          }}
          heading={{ children: "Design and Build", color: "dark" }}
          body={{
            children: "There are many variations of passages of lorem ipsum",
          }}
        />
      </Card>
    </Container>
  </>
);

export default SampleCard;
