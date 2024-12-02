import { Column, Container, Image, List, Row, Typography } from "@uiComponents";
import logo from "../../../../assets/caryatectonLogo.png";
import { FaCheck } from "react-icons/fa";
import { typographyTemplate } from "templates/typography";
const Footer = () => {
  return (
    <Container
      usx={{ fluid: true, padding: { top: "xxl" }, background: "light" }}
      as="footer"
      id="contact"
      name="contact"
    >
      <Row
        usx={{
          flex: {
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Column
          usx={{
            display: "flex",
            flex: {
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          {" "}
          <Typography {...typographyTemplate?.PrimaryHeadingA}>
            Let's Talk
          </Typography>{" "}
          <Typography {...typographyTemplate?.SecondaryHeadingA}>
            Have a Project in Mind? Contact With Us
          </Typography>
          <List
            icon={FaCheck}
            margin={"zero"}
            color="white"
            display="flex"
            font={{ size: "sm" }}
            items={[
              { label: "Mobile: +63 916 491 7914" },
              { label: "Tel: +63(02) 8351 1756" },
              { label: "Email: admin@caryatecton.com" },
            ]}
          />
        </Column>
      </Row>
      <Container usx={{ fluid: true, padding: "sm", background: "white" }}>
        <Container
          usx={{
            background: "white",
            display: "flex",
            flex: { justifyContent: "center" },
          }}
        >
          <Image
            src={logo}
            usx={{
              display: "block",
              width: { value: 300, unit: "px" },
            }}
          />
        </Container>
        <Typography as="p" usx={{ text: { align: "center" }, margin: "zero" }}>
          @Caryatecton 2024, All Rights Reserved
        </Typography>
      </Container>
    </Container>
  );
};

export default Footer;
