import {
  Button,
  Card,
  Column,
  Container,
  Media,
  Row,
  SectionLabel,
  Typography,
} from "@uiComponents";
import { BsFillHouseGearFill } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
const SampleCard = () => (
  <>
    <Container>
      <SectionLabel
        position="left"
        label="Services"
        fontSize={"xxl"}
        decoration={{ left: { Icon: FaCog } }}
      />
      <Column flex={{ justifyContent: "between" }} padding={"zero"}>
        <div>
          <Typography as="h3">
            Fully Integrated Construction Services.
          </Typography>
          <Typography as="p">
            Proactively pontificate client-centered relationships via- process
            centric leadershio skills. Credibly maintain focused internal or
            "organic" sources rather than vertical alignments
          </Typography>
        </div>
        <Button variant="outline-primary">See More</Button>
      </Column>

      <Container className="fluid">
        <Row lgColumns={3} mdColumns={3} xlColumns={3} xxlColumns={3}>
          <Column flex={{ alignItems: "stretch" }}>
            <Card boxShadow="box-shadow-3" background={"light"}>
              <Media
                padding={"zero"}
                icon={{
                  icon: BsFillHouseGearFill,
                  position: "top-left",
                  rounded: true,
                  variant: "outline",
                  background: "gradient-1",
                  color: "white",
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
            <Card boxShadow="box-shadow-3" background={"light"}>
              <Media
                padding={"zero"}
                icon={{
                  icon: BsFillHouseGearFill,
                  position: "top-left",
                  rounded: true,
                  variant: "outline",
                  background: "gradient-1",
                  color: "white",
                }}
                heading={{ children: "Renovation", color: "dark" }}
                body={{
                  children:
                    "There are many variations of passages of lorem ipsum",
                }}
              />
            </Card>
          </Column>{" "}
          <Column>
            <Card boxShadow="box-shadow-3" background={"light"}>
              <Media
                padding={"zero"}
                icon={{
                  icon: BsFillHouseGearFill,
                  position: "top-left",
                  rounded: true,
                  variant: "outline",
                  background: "gradient-1",
                  color: "white",
                }}
                heading={{
                  children: "Alteration",
                  color: "dark",
                }}
                body={{
                  children:
                    "There are many variations of passages of lorem ipsum",
                }}
              />
            </Card>
          </Column>
          <Column flex={{ alignItems: "stretch" }}>
            <Card boxShadow="box-shadow-3" background={"light"}>
              <Media
                padding={"zero"}
                icon={{
                  icon: BsFillHouseGearFill,
                  position: "top-left",
                  rounded: true,
                  variant: "outline",
                  background: "gradient-1",
                  color: "white",
                }}
                heading={{
                  children: "Expansion",
                  color: "dark",
                }}
                body={{
                  children:
                    "There are many variations of passages of lorem ipsum",
                }}
              />
            </Card>
          </Column>
          <Column>
            <Card boxShadow="box-shadow-3" background={"light"}>
              <Media
                padding={"zero"}
                icon={{
                  icon: BsFillHouseGearFill,
                  position: "top-left",
                  rounded: true,
                  variant: "outline",
                  background: "gradient-1",
                  color: "white",
                }}
                heading={{
                  children: "Demolition",
                  color: "dark",
                }}
                body={{
                  children:
                    "There are many variations of passages of lorem ipsum",
                }}
              />
            </Card>
          </Column>
          <Column>
            <Card boxShadow="box-shadow-3" background={"light"}>
              <Media
                padding={"zero"}
                icon={{
                  icon: BsFillHouseGearFill,
                  position: "top-left",
                  rounded: true,
                  variant: "outline",
                  background: "gradient-1",
                  color: "white",
                }}
                heading={{
                  children: "General Construction",
                  color: "dark",
                }}
                body={{
                  children:
                    "There are many variations of passages of lorem ipsum",
                }}
              />
            </Card>
          </Column>
          <Column>
            <Card boxShadow="box-shadow-3" background={"light"}>
              <Media
                padding={"zero"}
                icon={{
                  icon: BsFillHouseGearFill,
                  position: "top-left",
                  rounded: true,
                  variant: "outline",
                  background: "gradient-1",
                  color: "white",
                }}
                heading={{
                  children: "Architechtural Design",
                  color: "dark",
                }}
                body={{
                  children:
                    "There are many variations of passages of lorem ipsum",
                }}
              />
            </Card>
          </Column>
          <Column>
            <Card boxShadow="box-shadow-3" background={"light"}>
              <Media
                padding={"zero"}
                icon={{
                  icon: BsFillHouseGearFill,
                  position: "top-left",
                  rounded: true,
                  variant: "outline",
                  background: "gradient-1",
                  color: "white",
                }}
                heading={{
                  children: "Interior Design",
                  color: "dark",
                }}
                body={{
                  children:
                    "There are many variations of passages of lorem ipsum",
                }}
              />
            </Card>
          </Column>
          <Column>
            <Card boxShadow="box-shadow-3" background={"light"}>
              <Media
                padding={"zero"}
                icon={{
                  icon: BsFillHouseGearFill,
                  position: "top-left",
                  rounded: true,
                  variant: "outline",
                  background: "gradient-1",
                  color: "white",
                }}
                heading={{
                  children: "MEPFPS Design and Consultation",
                  color: "dark",
                }}
                body={{
                  children:
                    "There are many variations of passages of lorem ipsum",
                }}
              />
            </Card>
          </Column>{" "}
          <Column>
            <Card boxShadow="box-shadow-3" background={"light"}>
              <Media
                padding={"zero"}
                icon={{
                  icon: BsFillHouseGearFill,
                  position: "top-left",
                  rounded: true,
                  variant: "outline",
                  background: "gradient-1",
                  color: "white",
                }}
                heading={{
                  children: "Preventive Maintenance Services (PMS)",
                  color: "dark",
                }}
                body={{
                  children:
                    "There are many variations of passages of lorem ipsum",
                }}
              />
            </Card>
          </Column>{" "}
          <Column>
            <Card boxShadow="box-shadow-3" background={"light"}>
              <Media
                padding={"zero"}
                icon={{
                  icon: BsFillHouseGearFill,
                  position: "top-left",
                  rounded: true,
                  variant: "outline",
                  background: "gradient-1",
                  color: "white",
                }}
                heading={{
                  children: "Work Environment Measurement (WEM)",
                  color: "dark",
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
    </Container>
  </>
);

export default SampleCard;
