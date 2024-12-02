// import IntegrationComponentTesting from "components/utility-styled-component/IntegrationComponentTesting";
// import img from "/images/homepage/construction_1.jpg";
import {
  Container,
  DecoratedLabel,
  Typography,
} from "components/component.barrel.index";
import { useRef } from "react";

import { FaBeer } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";

// import { isKeyInPropPresent } from "@utils";
// import { MarginProps, MarginValueUnitOptions } from "@uiTypes";
const SampleIntegration = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  // useEffect(() => {
  //   console.log(ref.current);
  // }, [ref]);

  return (
    <>
      <Container
        display={"flex"}
        flex={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          alignContent: "baseline",
          flexWrap: "nowrap",
        }}
        borderRadius={{
          topLeft: 15,
          topRight: 15,
          bottomLeft: 15,
          bottomRight: 15,
          unit: "%",
        }}
        border={{ width: 5, style: "groove" }}
        opacity={0}
        animation={{
          inView: {
            opacity: 100,
            transition: { timing: "ease-in-out", duration: 2 },
            threshold: 50,
          },
        }}
      >
        <Typography font={{ size: { value: 150 } }}>HELLLO</Typography>
      </Container>{" "}
      <Container
        display={"flex"}
        flex={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          alignContent: "baseline",
          flexWrap: "nowrap",
        }}
        borderRadius={{
          topLeft: 15,
          topRight: 15,
          bottomLeft: 15,
          bottomRight: 15,
          unit: "%",
        }}
        border={{ width: 5, style: "groove" }}
        opacity={0}
        animation={{
          inView: {
            opacity: 100,
            transition: { timing: "ease-in", duration: 2 },
            threshold: 50,
          },
        }}
      >
        <Typography font={{ size: { value: 150 } }}>HELLLO</Typography>
      </Container>{" "}
      <Container
        display={"flex"}
        flex={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          alignContent: "baseline",
          flexWrap: "nowrap",
        }}
        borderRadius={{
          topLeft: 15,
          topRight: 15,
          bottomLeft: 15,
          bottomRight: 15,
          unit: "%",
        }}
        border={{ width: 5, style: "groove" }}
        opacity={0}
        animation={{
          // hover: {
          //   start: { opacity: 80, color: "primary" },
          //   end: { opacity: 100, color: "secondary", background: "primary" },
          // },
          inView: {
            background: "dark",
            opacity: 100,
            transition: { timing: "ease-in", duration: 2 },
            threshold: 50,
          },
        }}
      >
        <Typography font={{ size: { value: 150 } }}>HELLLO</Typography>
      </Container>{" "}
      <Container
        background={{
          image: "",
          repeat: "repeat",
          attachment: "fixed",
          size: "auto",
        }}
        display={"flex"}
        flex={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          alignContent: "baseline",
          flexWrap: "nowrap",
        }}
        borderRadius={{
          topLeft: 15,
          topRight: 15,
          bottomLeft: 15,
          bottomRight: 15,
          unit: "%",
        }}
        border={{ width: 5, style: "groove" }}
        opacity={0}
        animation={{
          inView: {
            opacity: 100,
            transition: { timing: "ease-in", duration: 2 },
            threshold: 50,
          },
        }}
      >
        <Typography font={{ size: { value: 150 } }}>HELLLO</Typography>
      </Container>
    </>
  );
};

export default SampleIntegration;
