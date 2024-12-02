import {
  Column,
  Container,
  Media,
  Row,
  DecoratedLabel,
  Typography,
  Icon,
} from "components/component.barrel.index";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";
import { typographyTemplate } from "templates/typography";

const ContactSection = () => {
  return (
    <>
      <Container
        usx={{
          fluid: true,
          background: "light",
        }}
      >
        <Container
          usx={{
            opacity: 0,
            animation: {
              inView: {
                opacity: 100,
                transition: {
                  timing: "cubic-bezier(.22,.68,0,1.71)",
                  duration: 2,
                },
                threshold: 50,
              },
            },
            background: "light",
          }}
        >
          <Row usx={{ padding: "sm" }}>
            <Column>
              <Typography {...typographyTemplate?.PrimaryHeadingA}>
                Let's Talk
              </Typography>
              <Typography {...typographyTemplate?.SecondaryHeadingA}>
                Have a Project in Mind? Contact With Us
              </Typography>
              <Typography {...typographyTemplate?.Body}>
                <FaPhoneAlt /> Phone
              </Typography>
              <Typography>09157697170</Typography>
              <Typography {...typographyTemplate?.Body}>
                <FaEnvelope /> Email
              </Typography>
              <Typography>cs@caryatecton.com</Typography>
              {/* <Media
              usx={{ background: "white" }}
              icon={{ icon: "/images/homepage/image-1.png", color: "white" }}
              heading={{ children: "Cerisse Silvestre", as: "h6" }}
              body={{ children: "Support Manager" }}
            /> */}
            </Column>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default ContactSection;
