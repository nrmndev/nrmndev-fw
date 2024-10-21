import IntegrationComponentTesting from "components/utility-styled-component/IntegrationComponentTesting";

const SampleIntegration = () => {
  return (
    <>
      <IntegrationComponentTesting
        background={{ image: "/images/homepage/image-1.png" }}
        borderRadius={"lg"}
        boxShadow="box-shadow-3"
        color="primary"
        display="flex"
        flex={{
          alignContent: "around",
          flexDirection: "col",
          alignItems: "baseline",
          flexWrap: "nowrap",
          justifyContent: "between",
        }}
        fontSize={{ value: 7, unit: "rem" }}
        height={{ value: 100, unit: "vh" }}
        xs={1}
        sm={2}
        md={3}
        lg={4}
        xl={5}
        xxl={6}
        position={{
          position: "absolute",
          top: { value: 0 },
          right: { value: 1 },
          bottom: { value: 2 },
          left: { value: 3 },
        }}
        width={{ value: 100, unit: "%" }}
        textAlign="center"
        textDecoration="dashed"
        textTransform="uppercase"
        border={{ color: "primary", width: 2, style: "dashed" }}
        // border={{
        //   bottom: { color: "primary", width: 2, style: "dashed" },
        //   right: { color: "primary", width: 11, style: "dashed" },
        //   left: { color: "primary", width: 25, style: "dashed" },
        //   top: { color: "secondary", width: 5, style: "dotted" },
        // }}
        padding={{
          top: "lg",
          right: "xxl",
          bottom: { unit: "%", value: 25 },
          left: { unit: "vw", value: 10 },
        }}
        margin={{ hMargin: "lg", vMargin: { unit: "%", value: 15 } }}
        xxlColumns={12}
        xlColumns={11}
        lgColumns={10}
        mdColumns={9}
        smColumns={8}
        xsColumns={7}
        children={<>Hello</>}
        className="testClassName"
        style={{ display: "none" }}
      ></IntegrationComponentTesting>
    </>
  );
};

export default SampleIntegration;
