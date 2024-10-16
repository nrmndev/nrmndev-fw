import heroBanner from "../../assets/hero_banner.jpg";

import { Column, Container, Media, Row, Typography } from "@uiComponents";
import { FaPhone } from "react-icons/fa";

const SampleRow = () => {
  return (
    <>
      <Typography as="h3" textAlign="center">
        Sample row handling columns
      </Typography>
      <Container
        border={{ bottom: 10, color: "secondary" }}
        borderRadius={{ bottomLeft: 10, bottomRight: 10 }}
        background={{ image: heroBanner, attachment: "fixed" }}
        padding={"lg"}
        fluid
        className="overlay"
        overlay={{ color: "white", opacity: 20 }}
        // style={{ backgroundColor: "black", minHeight: "200px" }}
      >
        <Container>
          <Row
            lgColumns={3}
            mdColumns={2}
            smColumns={1}
            xxlColumns={3}
            xlColumns={3}
            xsColumns={1}
            flex={{ alignItems: "stretch", justifyContent: "center" }}
          >
            <Media
              icon={{
                icon: FaPhone,
                //background: "primary",
                color: "primary",
                rounded: true,
                variant: "outline",
              }}
              heading={{ children: "Phone Number" }}
              body={{ children: <>(+55) 654 - 545 - 5418</> }}
            />
            <Media
              icon={{
                icon: FaPhone,
                //background: "primary",
                color: "white",
                margin: "sm",
                rounded: true,
                variant: "outline",
              }}
              heading={{ children: "Phone Number", color: "white" }}
              body={{ children: <>(+55) 654 - 545 - 5418</>, color: "white" }}
            />
            <Media
              icon={{
                icon: FaPhone,
                //background: "primary",
                color: "primary",
                margin: "sm",
                rounded: true,
                variant: "outline",
              }}
              heading={{ children: "Phone Number" }}
              body={{ children: <>(+55) 654 - 545 - 5418</> }}
            />
            <Media
              icon={{
                icon: FaPhone,
                //background: "primary",
                color: "primary",
                margin: "sm",
                rounded: true,
                variant: "outline",
              }}
              heading={{ children: "Phone Number" }}
              body={{ children: <>(+55) 654 - 545 - 5418</> }}
            />
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default SampleRow;
