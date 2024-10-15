import { Card, Column, Container, Media, Row } from "@uiComponents";
import { BsFillHouseGearFill } from "react-icons/bs";
const SampleCard = () => (
  <>
    <Container>
      <Row lgColumns={3} mdColumns={3} xlColumns={3} xxlColumns={3}>
        <Column>
          <Card boxShadow="box-shadow-3" margin={"sm"} background={"light"}>
            <Media
              icon={{
                icon: BsFillHouseGearFill,
                position: "top-left",
                rounded: true,
                variant: "outline",
                background: "gradient-1",
                color: "white",
                margin: "zero",
              }}
              heading={{ children: "Design and Build", color: "dark" }}
              body={{
                children:
                  "There are many variations of passages of lorem ipsum",
              }}
            />
          </Card>
        </Column>
        <Column>
          <Card boxShadow="box-shadow-3" margin={"sm"} background={"light"}>
            <Media
              icon={{
                icon: BsFillHouseGearFill,
                position: "top-left",
                rounded: true,
                variant: "outline",
                background: "gradient-1",
                color: "white",
                margin: "zero",
              }}
              heading={{ children: "Design and Build", color: "dark" }}
              body={{
                children:
                  "There are many variations of passages of lorem ipsum",
              }}
            />
          </Card>
        </Column>{" "}
        <Column>
          <Card boxShadow="box-shadow-3" margin={"sm"} background={"light"}>
            <Media
              icon={{
                icon: BsFillHouseGearFill,
                position: "top-left",
                rounded: true,
                variant: "outline",
                background: "gradient-1",
                color: "white",
                margin: "zero",
              }}
              heading={{
                children: "Design and Build",
                color: "dark",
                textTransform: "uppercase",
              }}
              body={{
                children:
                  "There are many variations of passages of lorem ipsum",
              }}
            />
          </Card>
        </Column>
      </Row>
    </Container>
  </>
);

export default SampleCard;
