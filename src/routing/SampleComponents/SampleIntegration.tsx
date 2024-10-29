// import IntegrationComponentTesting from "components/utility-styled-component/IntegrationComponentTesting";
// import img from "/images/homepage/construction_1.jpg";
import { Column, Container, Media, Row } from "@uiComponents";
import { useEffect, useRef } from "react";
import { BsFillHouseGearFill } from "react-icons/bs";
// import { isKeyInPropPresent } from "@utils";
// import { MarginProps, MarginValueUnitOptions } from "@uiTypes";
const SampleIntegration = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // console.log(ref.current);
  }, [ref]);

  return (
    <>
      <Container className="flex flex-3">
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
      <Container background="white" padding={{ value: 10 }}></Container>
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
