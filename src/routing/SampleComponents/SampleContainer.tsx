import { AsProps, PickUtilityProps } from "@uiTypes";
import heroBanner from "../../assets/hero_banner.jpg";

import { Column, Container, Media, Typography } from "@uiComponents";
import { FaPhone } from "react-icons/fa";
import { ExtendUtilityProps } from "@utils";
import { useEffect, useRef } from "react";

const Test = () => {
  // const paddingClass = getPaddingStyle(undefined);
  // console.log(paddingClass);
  return (
    <>
      <Typography as="h3" text={{ align: "center" }}>
        Sample container-fluid with background as Image, overLay: white,
        opacity: .3, border: bottom:10, color:"secondary"
      </Typography>
      <Container
        border={{ bottom: { width: 5 } }}
        //borderRadius={{}}
        background={{ image: heroBanner, attachment: "fixed" }}
        padding={{
          top: { value: 30 },
          right: { value: 30 },
          bottom: { value: 30 },
          left: { value: 30 },
        }}
        fluid
      >
        <Typography as="h4" text={{ align: "center" }} color="white">
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
      <Typography as="h3" text={{ align: "center" }}>
        Sample container-fluid with utility props
      </Typography>
      <Container
        background="black"
        borderRadius={"lg"}
        padding={"lg"}
        margin={"xxl"}
        border={{ width: 5, color: "dark" }}
        fluid
        // style={{ backgroundColor: "black", minHeight: "200px" }}
      >
        <Typography as="h4" text={{ align: "center" }} color="white">
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
        border={{ width: 2, color: "secondary" }}
        fluid
      >
        <Container
          flex={{
            alignItems: "start",
            alignContent: "start",
            flexDirection: "col",
            justifyContent: "start",
          }}
        >
          <Typography as="h4" text={{ align: "center" }} color="white">
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
            heading={{ children: "Test Column" }}
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

const EnhancedContainer = ExtendUtilityProps<
  typeof Container,
  PickUtilityProps<"color" | "width" | "boxShadow" | "opacity">
>(Container);

const SampleContainer = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(ref.current);
  }, []);
  return (
    <EnhancedContainer
      boxShadow="box-shadow-6"
      opacity={40}
      ref={ref}
      margin={{ top: { value: 50 } }}
      color="white"
    >
      Hello my Friend
    </EnhancedContainer>
  );
};
export default SampleContainer;
