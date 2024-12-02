import {
  BackgroundContainer,
  Container,
  Image,
  Typography,
} from "@uiComponents";
import heroBanner1 from "../../assets/homepage_1.jpg";
import heroBanner2 from "../../assets/homepage_2.jpg";
import heroBanner3 from "../../assets/homepage_3.jpg";
import heroBanner4 from "../../assets/homepage_4.jpg";
import heroBanner5 from "../../assets/homepage_5.jpg";
import logo from "../../assets/caryatectonLogo.png";

const HeroBanner = () => {
  return (
    <>
      <Container
        // background={{
        //   image: heroBanner1,
        //   position: "center",
        //   repeat: "no-repeat",
        //   size: "cover",
        // }}
        usx={{
          overlay: { color: "black", opacity: 40 },
          height: { unit: "vh", value: 100 },
          fluid: true,
          flex: {
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
        //style={{ background: `url(${heroBanner})` }}
        //className="hero-wrapper"
      >
        <BackgroundContainer
          backgrounds={[
            heroBanner1,
            heroBanner2,
            heroBanner3,
            heroBanner4,
            heroBanner5,
          ]}
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
        <Container usx={{ position: { position: "relative", zIndex: 5 } }}>
          {" "}
          <Image src={logo} />
          <Typography
            as="h1"
            usx={{
              text: { align: "center", transform: "uppercase" },
              color: "white",

              font: { size: { value: 4, unit: "rem" } },
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

              font: { size: { value: 4, unit: "rem" } },
            }}
            style={{ textShadow: "3px 3px 0px var(--primary)" }}
          >
            We Build Your Dream With Passion.
          </Typography>
          {/* <Typography as="h3" text={{ align: "center" }} color="white">
          We conduct all business with the highest standards of honesty and
          fairness, we can be trusted for constution
        </Typography> */}
          {/* <Column flex={{ justifyContent: "center" }} display="flex">
            <Button as="a" href="#trades" template={4}>
              Trades
            </Button>
            <Button as="navLink" to="/services" template={4}>
              Services
            </Button>{" "}
            <Button as="navLink" to="/services" template={4}>
              Projects
            </Button>{" "}
            <Button as="navLink" to="/services" template={4}>
              Contact
            </Button>
          </Column> */}
        </Container>
      </Container>
    </>
  );
};

export default HeroBanner;
