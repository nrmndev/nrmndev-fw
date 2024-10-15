import {
  Button,
  Card,
  Column,
  Container,
  List,
  Media,
  Row,
  SectionLabel,
  Typography,
} from "@uiComponents";
import { BsFillHouseGearFill } from "react-icons/bs";
import { FaBeer, FaCheck, FaCog } from "react-icons/fa";
const SampleCard = () => (
  <>
    <Container>
      <Row>
        <Column xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
          ye
        </Column>
        <Column xxl={6} xl={6} lg={6} md={12} sm={12} xs={12} padding={"sm"}>
          <SectionLabel
            position="left"
            label="About Us"
            decoration={{ left: { Icon: FaBeer } }}
            fontSize={"xxl"}
          />
          <Typography as="h2">
            A Company To Change The World We're Caryatecton
          </Typography>
          <Typography as="p">
            Proactively pontificate client-centered relationships via- process
            centric leadershio skills. Credibly maintain focused internal or
            "organic" sources rather than vertical alignments
          </Typography>

          <List
            icon={FaCheck}
            color="dark"
            display="grid-2-columns"
            items={[
              { label: "Market research" },
              { label: "Industrial Manufacturing" },
              { label: "Pre-construction services" },
              { label: "Building and Construction" },
            ]}
          />
          <Button variant="solid-accent-1" color="white">
            See More
          </Button>
        </Column>
      </Row>
    </Container>
    <Container
      fluid
      background={"light"}
      padding={{ top: 50, bottom: 50, unit: "px" }}
    >
      <Container>
        <SectionLabel
          position="left"
          label="Services"
          fontSize={"xxl"}
          decoration={{ left: { Icon: FaCog } }}
        />
        <Column padding={"zero"}>
          <Typography as="h3">
            Fully Integrated Construction Services.
          </Typography>
          <Typography as="p">
            Proactively pontificate client-centered relationships via- process
            centric leadershio skills. Credibly maintain focused internal or
            "organic" sources rather than vertical alignments
          </Typography>
        </Column>
        <Container className="fluid">
          <Row lgColumns={3} mdColumns={3} xlColumns={3} xxlColumns={3}>
            <Column flex={{ alignItems: "stretch" }}>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,
                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
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
              <Card boxShadow="box-shadow-3" background={"white"}>
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
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
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
              <Card boxShadow="box-shadow-3" background={"white"}>
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
              <Card boxShadow="box-shadow-3" background={"white"}>
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
              <Card boxShadow="box-shadow-3" background={"white"}>
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
              <Card boxShadow="box-shadow-3" background={"white"}>
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
              <Card boxShadow="box-shadow-3" background={"white"}>
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
              <Card boxShadow="box-shadow-3" background={"white"}>
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
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
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
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
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
    </Container>
    <Container
      fluid
      background={"primary"}
      padding={{ top: 50, bottom: 50, unit: "px" }}
    >
      <Container>
        <SectionLabel
          position="right"
          label="Trades"
          fontSize={"xxl"}
          color="light"
          decoration={{ right: { Icon: FaCog, color: "light" } }}
        />
        <Column padding={"zero"}>
          <Typography as="h3" textAlign="right" color="light">
            Fully Integrated Construction Services.
          </Typography>
          <Typography as="p" textAlign="right" color="light">
            Proactively pontificate client-centered relationships via- process
            centric leadershio skills. Credibly maintain focused internal or
            "organic" sources rather than vertical alignments
          </Typography>
        </Column>
        <Container className="fluid">
          <Row lgColumns={3} mdColumns={3} xlColumns={3} xxlColumns={3}>
            <Column flex={{ alignItems: "stretch" }}>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,

                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
                    color: "white",
                  }}
                  heading={{
                    children: "Architectural / Civil",
                    color: "primary",
                  }}
                  body={{
                    children:
                      "There are many variations of passages of lorem ipsum",
                  }}
                />
              </Card>
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,
                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
                    color: "white",
                  }}
                  heading={{ children: "Structural", color: "primary" }}
                  body={{
                    children:
                      "There are many variations of passages of lorem ipsum",
                  }}
                />
              </Card>
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,
                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
                    color: "white",
                  }}
                  heading={{
                    children: "Mechanical",
                    color: "primary",
                  }}
                  body={{
                    children:
                      "There are many variations of passages of lorem ipsum",
                  }}
                />
              </Card>
            </Column>
            <Column flex={{ alignItems: "stretch" }}>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,
                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
                    color: "white",
                  }}
                  heading={{
                    children: "Electrical",
                    color: "primary",
                  }}
                  body={{
                    children:
                      "There are many variations of passages of lorem ipsum",
                  }}
                />
              </Card>
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,
                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
                    color: "white",
                  }}
                  heading={{
                    children: "Fire Detection and Alarm System (FDAS)",
                    color: "primary",
                    fontSize: "md",
                  }}
                  body={{
                    children:
                      "There are many variations of passages of lorem ipsum",
                  }}
                />
              </Card>
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,
                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
                    color: "white",
                  }}
                  heading={{
                    children: "Fire Protection System",
                    color: "primary",
                  }}
                  body={{
                    children:
                      "There are many variations of passages of lorem ipsum",
                  }}
                />
              </Card>
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,
                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
                    color: "white",
                  }}
                  heading={{
                    children: "Mechanical HVAC System",
                    color: "primary",
                  }}
                  body={{
                    children:
                      "There are many variations of passages of lorem ipsum",
                  }}
                />
              </Card>
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,
                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
                    color: "white",
                  }}
                  heading={{
                    children:
                      "Mechanical Automatic Fire Suppresion System (AFSS)",
                    color: "primary",
                    fontSize: "md",
                  }}
                  body={{
                    children:
                      "There are many variations of passages of lorem ipsum",
                  }}
                />
              </Card>
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,
                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
                    color: "white",
                  }}
                  heading={{
                    children: "LPG System",
                    color: "primary",
                  }}
                  body={{
                    children:
                      "There are many variations of passages of lorem ipsum",
                  }}
                />
              </Card>
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,
                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
                    color: "white",
                  }}
                  heading={{
                    children: "Access Control / Security System",
                    color: "primary",
                  }}
                  body={{
                    children:
                      "There are many variations of passages of lorem ipsum",
                  }}
                />
              </Card>
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,
                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
                    color: "white",
                  }}
                  heading={{
                    children: "Structured Cabling System",
                    color: "primary",
                  }}
                  body={{
                    children:
                      "There are many variations of passages of lorem ipsum",
                  }}
                />
              </Card>
            </Column>
            <Column>
              <Card boxShadow="box-shadow-3" background={"white"}>
                <Media
                  padding={"zero"}
                  icon={{
                    icon: BsFillHouseGearFill,
                    position: "top-left",
                    rounded: true,
                    variant: "outline",
                    background: "primary",
                    color: "white",
                  }}
                  heading={{
                    children: "AV System",
                    color: "primary",
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
    </Container>
  </>
);

export default SampleCard;
