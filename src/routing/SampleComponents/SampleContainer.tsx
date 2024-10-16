import heroBanner from "../../assets/hero_banner.jpg";

import { Column, Container, Media, Typography } from "@uiComponents";
import { FaPhone } from "react-icons/fa";

const SampleContainer = () => {
  return (
    <>
      <Typography as="h3" textAlign="center">
        Sample container-fluid with background as Image, overLay: white,
        opacity: .3, border: bottom:10, color:"secondary"
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
        <Typography as="h4" textAlign="center" color="white">
          Sample container-flex
        </Typography>
        <Container flex={{ alignContent: "evenly" }}>
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
        </Container>
      </Container>
      <hr />
      <Typography as="h3" textAlign="center">
        Sample container-fluid with utility props
      </Typography>
      <Container
        background="black"
        borderRadius={"lg"}
        padding={"lg"}
        margin={"xxl"}
        border={{ value: "lg", color: "primary" }}
        fluid
        alignItems="center"
        // style={{ backgroundColor: "black", minHeight: "200px" }}
      >
        <Typography as="h4" textAlign="center" color="white">
          Sample container-flex
        </Typography>
        <Container flex={{ alignContent: "evenly" }}>
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
        </Container>
      </Container>
      <hr />
      <Container
        background="primary"
        borderRadius={"lg"}
        padding={"lg"}
        margin={"xxl"}
        border={{ value: "lg", color: "accent2" }}
        fluid
        alignItems="center"
      >
        <Container
          flex={{
            alignItems: "start",
            alignContent: "start",
            flexDirection: "col",
            justifyContent: "start",
          }}
        >
          <Typography as="h4" textAlign="center" color="white">
            Sample container-flex alignItems:"start", alignContent:"start",
            flexDirection: "col", justifyContent: "start"
          </Typography>
          <Media
            icon={{
              icon: FaPhone,
              color: "white",
              rounded: true,
              variant: "outline",
            }}
            heading={{ children: "Phone Number", color: "white" }}
            body={{ children: <>(+55) 654 - 545 - 5418</>, color: "white" }}
          />
          <Media
            icon={{
              icon: FaPhone,
              color: "white",
              rounded: true,
              variant: "outline",
            }}
            heading={{ children: "Phone Number", color: "white" }}
            body={{ children: <>(+55) 654 - 545 - 5418</>, color: "white" }}
          />{" "}
          <Media
            icon={{
              icon: FaPhone,
              color: "white",
              rounded: true,
              variant: "outline",
            }}
            heading={{ children: "Phone Number", color: "white" }}
            body={{ children: <>(+55) 654 - 545 - 5418</>, color: "white" }}
          />{" "}
          <Media
            icon={{
              icon: FaPhone,
              color: "white",
              rounded: true,
              variant: "outline",
            }}
            heading={{ children: "Phone Number", color: "white" }}
            body={{ children: <>(+55) 654 - 545 - 5418</>, color: "white" }}
          />
        </Container>
      </Container>
      <Container flex={{}}>
        <Column xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
          <Media
            icon={{
              icon: FaPhone,
              rounded: true,
              variant: "outline",
            }}
            heading={{ children: "Phone Number" }}
            body={{ children: <>(+55) 654 - 545 - 5418</> }}
          />
        </Column>
        <Column
          xxl={6}
          xl={6}
          lg={6}
          md={6}
          sm={12}
          xs={12}
          background="black"
          flex={{ alignContent: "center", justifyContent: "center" }}
        >
          <Media
            icon={{
              icon: FaPhone,
              rounded: true,
              color: "white",
              variant: "outline",
            }}
            heading={{ children: "Phone Number", color: "white" }}
            body={{ children: <>(+55) 654 - 545 - 5418</>, color: "white" }}
          />
        </Column>
        <Column xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
          <Media
            icon={{
              icon: FaPhone,
              rounded: true,
              variant: "outline",
            }}
            heading={{ children: "Phone Number" }}
            body={{ children: <>(+55) 654 - 545 - 5418</> }}
          />
        </Column>
        <Column xxl={6} xl={6} lg={6} md={6} sm={12} xs={12} background="black">
          <Media
            icon={{
              icon: FaPhone,
              rounded: true,
              color: "white",
              variant: "outline",
            }}
            heading={{ children: "Phone Number", color: "white" }}
            body={{ children: <>(+55) 654 - 545 - 5418</>, color: "white" }}
          />
        </Column>
      </Container>
    </>
  );
};

export default SampleContainer;
