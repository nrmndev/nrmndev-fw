import heroBanner from "../../assets/hero_banner.jpg";

import { Container, Media, Row, Typography } from "@uiComponents";
import { FaPhone } from "react-icons/fa";

const SampleRow = () => {
  return (
    <>
      <Typography as="h3">Sample row handling columns</Typography>
      <Container
        border={{ bottom: { color: "primary", width: 10 } }}
        borderRadius={{ bottomLeft: 10, bottomRight: 10 }}
        background={{ image: heroBanner, attachment: "fixed" }}
        padding={"lg"}
        fluid
        className="overlay"
        overlay={{ color: "white", opacity: 20 }}
        // style={{ backgroundColor: "black", minHeight: "200px" }}
      >
        <Container
          position={{
            position: "absolute",
            top: { value: 10 },
            left: { value: 10 },
          }}
        >
          <Row flex={{ alignItems: "stretch", justifyContent: "center" }}>
            <Media
              icon={{
                icon: FaPhone,
                //background: "primary",
                color: "primary",
                rounded: true,
                variant: "outline",
              }}
              heading={{ children: "Flexing" }}
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
