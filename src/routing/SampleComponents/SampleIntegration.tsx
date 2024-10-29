// import IntegrationComponentTesting from "components/utility-styled-component/IntegrationComponentTesting";
// import img from "/images/homepage/construction_1.jpg";
import {
  Button,
  Card,
  Column,
  Container,
  List,
  Media,
  ProgressBar,
  Row,
  SectionLabel,
  Typography,
} from "@uiComponents";
import { useEffect, useRef } from "react";
import { AiOutlineSmallDash } from "react-icons/ai";
import { BsFillHouseGearFill } from "react-icons/bs";
import { FaBeer, FaCheck, FaCog, FaPhoneAlt } from "react-icons/fa";
// import { isKeyInPropPresent } from "@utils";
// import { MarginProps, MarginValueUnitOptions } from "@uiTypes";
const SampleIntegration = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // console.log(ref.current);
  }, [ref]);

  return (
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
            />
            <Typography as="h2" color="gradient-1">
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
      <Container fluid background={"black"}>
        <Container
          flex={{ alignContent: "between", justifyContent: "between" }}
        >
          <Media
            icon={{ icon: FaPhoneAlt, color: "white" }}
            heading={{ children: "Phone Number", color: "white", as: "h6" }}
            body={{ children: "(+55) 654 - 545 - 5418}", color: "white" }}
          />{" "}
          <Media
            icon={{ icon: FaPhoneAlt, color: "white" }}
            heading={{ children: "Phone Number", as: "h6", color: "white" }}
            body={{ children: "(+55) 654 - 545 - 5418}", color: "white" }}
          />{" "}
          <Media
            icon={{ icon: FaPhoneAlt, color: "white" }}
            heading={{ children: "Phone Number", as: "h6", color: "white" }}
            body={{ children: "(+55) 654 - 545 - 5418}", color: "white" }}
          />{" "}
          <Media
            icon={{ icon: FaPhoneAlt, color: "white" }}
            heading={{ children: "Phone Number", as: "h6", color: "white" }}
            body={{ children: "(+55) 654 - 545 - 5418}", color: "white" }}
          />
        </Container>
      </Container>
      <Container padding={"xxl"}>
        <Column>
          {" "}
          <SectionLabel label="Latest Projects" position="left" />
          <Typography as="h3">
            Explore Our Case Studies &amp; Latest Success Stories
          </Typography>
        </Column>
        <Column>
          <Typography as="p">
            It's always a joy to hear that the work I do has positively impacted
            our clients and that they are happy to share their experience.
          </Typography>
          <Button>Explore Case Studies</Button>
        </Column>
      </Container>{" "}
      <Container fluid>
        <Container>
          <Column xxl={6} xl={12} lg={6} md={6} sm={12} xs={12}>
            <SectionLabel
              color="black"
              label="Our Skill"
              decoration={{ left: { Icon: AiOutlineSmallDash } }}
            />
            <Typography as="h2">
              This Building Skill Member Meet on Rent
            </Typography>
            <Typography as="p">
              If you are going to use a passage of Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error consectetur ratione amet
              nesciunt eligendi tempore.
            </Typography>
            <ProgressBar
              color="primary"
              current={75}
              total={100}
              label="Building Houses"
              showProgress
            />
            <ProgressBar
              current={85}
              total={100}
              label="Luxury Homes"
              showProgress
            />
            <ProgressBar
              current={95}
              total={100}
              label="Other skills"
              showProgress
            />
          </Column>
          <Column xxl={6} xl={12} lg={6} md={6} sm={12} xs={12}></Column>
        </Container>
      </Container>
      <Container
        fluid
        background={"light"}
        padding={{ top: { value: 50 }, bottom: { value: 50 } }}
      >
        <Container>
          <SectionLabel
            position="left"
            label="Services"
            font={{ size: "xxl" }}
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
            <Row columnItems={{ lg: 3, md: 3, xl: 3, xxl: 3 }}>
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
        padding={{ top: { value: 50 }, bottom: { value: 50 } }}
      >
        <Container>
          <SectionLabel
            position="right"
            label="Trades"
            font={{ size: "xxl" }}
            color="light"
            decoration={{ right: { Icon: FaCog, color: "light" } }}
          />
          <Column padding={"zero"}>
            <Typography as="h3" text={{ align: "right" }} color="light">
              Fully Integrated Construction Services.
            </Typography>
            <Typography as="p" text={{ align: "right" }} color="light">
              Proactively pontificate client-centered relationships via- process
              centric leadershio skills. Credibly maintain focused internal or
              "organic" sources rather than vertical alignments
            </Typography>
          </Column>
          <Container className="fluid">
            <Row columnItems={{ lg: 3, md: 3, xl: 3, xxl: 3 }}>
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
                      font: { size: "md" },
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
                      font: { size: "md" },
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
      {/* <Container className="flex flex-3">
        <Column flex={{ alignContent: "center", justifyContent: "evenly" }}>
          <Media
            icon={{
              icon: BsFillHouseGearFill,
              rounded: true,
              variant: "outline",
              background: "white",
            }}
            heading={{ children: "1.2m+", as: "h3", color: "white" }}
            body={{
              children: "Projects Done",
              color: "white",
            }}
          />
          <Media
            icon={{
              icon: BsFillHouseGearFill,
              rounded: true,
              variant: "outline",
              background: "white",
            }}
            heading={{ children: "1.2m+", as: "h3", color: "white" }}
            body={{
              children: "Projects Done",
              color: "white",
            }}
          />{" "}
          <Media
            icon={{
              icon: BsFillHouseGearFill,
              rounded: true,
              variant: "outline",
              background: "white",
            }}
            heading={{ children: "1.2m+", as: "h3", color: "white" }}
            body={{
              children: "Projects Done",
              color: "white",
            }}
          />
        </Column>
      </Container>
      <Container
        background="primary"
        border={{ width: 2, style: "solid", color: "primary" }}
        padding="md"
        color="secondary"
        position={{ position: "relative" }}
        width={{ value: 100, unit: "%" }}
        height={{ value: 100, unit: "vh" }}
      >
        Some Content
      </Container>
      <Container
        data-testid="test"
        data-hello="test"
        background={"dark"}
        color="primary"
        ref={ref}
        as="section"
        //background={"primary"}
        //style={{ padding: "50px" }}
        flex={{ alignContent: "center", justifyContent: "center" }}
        padding={{ value: 70 }}
        margin={{ value: 70, unit: "px" }}
        style={{ margin: "10px" }}
        className="hehe"
      >
        <Row
          columnItems={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
          flex={{ alignItems: "stretch", justifyContent: "center" }}
          style={{ alignItems: "stretch" }}
        >
          <span>TEST</span>
          <span>TEST</span>
          <span>TEST</span>
          <span>TEST</span>
        </Row>
      </Container>
      <Container color="primary" margin={{ value: 10 }}></Container>
      <Container background="white" padding={{ value: 10 }}></Container> */}
    </>
  );
};

export default SampleIntegration;

// const SampleIntegration = () => {
//   return (
//     <>
//       {" "}
//       <Row
//         columnItems={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
//         flex={{ alignItems: "stretch", justifyContent: "center" }}
//         style={{ alignItems: "stretch" }}
//       ></Row>
//       <IntegrationComponentTesting
//         background={{ attachment: "fixed", image: img }}
//         borderRadius={"lg"}
//         boxShadow="box-shadow-3"
//         color="primary"
//         display="flex"
//         flex={{
//           alignContent: "around",
//           flexDirection: "col",
//           alignItems: "baseline",
//           flexWrap: "nowrap",
//           justifyContent: "between",
//         }}
//         height={{ value: 100, unit: "vh" }}
//         xs={1}
//         sm={2}
//         md={3}
//         lg={4}
//         xl={5}
//         xxl={6}
//         position={{
//           position: "absolute",

//           right: { value: 1 },
//           bottom: { value: 2 },
//           left: { value: 3 },
//         }}
//         width={{ value: 100, unit: "%" }}
//         text={{
//           align: "center",
//           decoration: "underline",
//           transform: "uppercase",
//         }}
//         border={{ top: { width: 2 } }}
//         // border={{
//         //   bottom: { color: "primary", width: 2, style: "dashed" },
//         //   right: { color: "primary", width: 11, style: "dashed" },
//         //   left: { color: "primary", width: 25, style: "dashed" },
//         //   top: { color: "secondary", width: 5, style: "dotted" },
//         // }}
//         padding={{
//           top: "lg",
//           right: "xxl",
//           bottom: { unit: "%", value: 25 },
//           left: { unit: "vw", value: 10 },
//         }}
//         // margin={{ hMargin: "lg", vMargin: { unit: "%", value: 15 } }}
//         margin={{ top: { value: 10, unit: "%" } }}
//         className="testClassName"
//       ></IntegrationComponentTesting>
//     </>
//   );
// };
