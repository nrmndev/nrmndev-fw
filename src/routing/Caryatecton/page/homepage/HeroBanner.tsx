import {
  BackgroundContainer,
  Button,
  Column,
  Container,
  Image,
  Slider,
  Typography,
} from "@uiComponents";
import heroBanner1 from "../../../../assets/hero_banner1.jpg";
import heroBanner2 from "../../../../assets/hero_banner2.jpg";
import heroBanner3 from "../../../../assets/hero_banner3.jpg";
import heroBanner4 from "../../../../assets/hero_banner4.jpg";
import heroBanner5 from "../../../../assets/hero_banner5.jpg";
import logo from "../../../../assets/caryatectonLogo.png";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
export const HeroBanner = () => {
  return (
    <>
      <Container
        usx={{
          height: { unit: "vh", value: 100 },
          fluid: true,
          display: "flex",
          flex: {
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        id="hero"
        name="hero"
      >
        <BackgroundContainer
          backgrounds={[
            heroBanner1,
            heroBanner2,
            heroBanner3,
            heroBanner4,
            heroBanner5,
          ]}
          //overlay={{ color: "black", opacity: 60 }}
        />
        {/* <Slider
          images={[
            heroBanner1,
            heroBanner2,
            heroBanner3,
            heroBanner4,
            heroBanner5,
          ]}
          style={{}}
        /> */}
        <Container
          usx={{
            position: { position: "relative", zIndex: 5 },
            flex: {
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            },
            display: "flex",
            overlay: { color: "black", opacity: 80 },
          }}
        >
          <Typography
            as="h1"
            usx={{
              text: { align: "center", transform: "uppercase" },
              color: "white",
              font: { size: { value: 5, unit: "rem" } },
            }}
            style={{ textShadow: "3px 3px 0px var(--primary)" }}
          >
            Caryatecton Construction Incorporated
          </Typography>
          <Typography
            as="h2"
            usx={{
              text: { align: "center", transform: "uppercase" },
              color: "white",
              font: { size: { value: 3, unit: "rem" } },
            }}
            style={{ textShadow: "3px 3px 0px var(--primary)" }}
          >
            We Build Your Dream With Passion.
          </Typography>
          {/* <Typography as="h3" text={{ align: "center" }} color="white">
          We conduct all business with the highest standards of honesty and
          fairness, we can be trusted for constution
        </Typography> */}

          <Column usx={{ flex: { justifyContent: "center" }, display: "flex" }}>
            {/* <Button as="a" href="#trades" >
              Trades
            </Button>
            <Button as="button" to="/services" >
              Services
            </Button>{" "}
            <Button as="a" to="/services" >
              Projects
            </Button>{" "}
            <Button as="a" to="/services" >
              Contact
            </Button> */}
          </Column>
        </Container>
      </Container>
    </>
  );
};
