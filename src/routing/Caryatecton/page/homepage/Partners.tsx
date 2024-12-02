import {
  Container,
  Image,
  Row,
  Typography,
} from "components/component.barrel.index";
import lvscLogo from "../../../../assets/lvsc_logo.png";
import { typographyTemplate } from "templates/typography";
const Partners = () => {
  return (
    <Container
      usx={{
        fluid: true,
        opacity: 0,
        animation: {
          inView: {
            opacity: 100,
            transition: { timing: "ease-in", duration: 2 },
            threshold: 50,
          },
        },
        background: "light",
        padding: { top: { value: 100 } },
      }}
    >
      <Container usx={{ padding: "lg" }}>
        <Row
          usx={{
            flex: {
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            },
            margin: { top: { value: -250 } },
          }}
          style={{
            backgroundColor: "#0B1B2A",
            position: "relative",
            paddingTop: "70px",
            paddingBottom: "50px",
            paddingLeft: "50px",
            paddingRight: "50px",
            borderRadius: "150px",
          }}
        >
          <Typography {...typographyTemplate?.PrimaryHeadingA}>
            Our Partner
          </Typography>
          <Image src={lvscLogo} style={{ display: "block", width: "100%" }} />
        </Row>
      </Container>
      <div></div>
    </Container>
  );
};

export default Partners;
