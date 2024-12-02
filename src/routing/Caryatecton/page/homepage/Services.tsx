import {
  Card,
  Column,
  Container,
  Media,
  Row,
  Typography,
  Icon,
} from "components/component.barrel.index";

import {
  FaArrowsAlt,
  FaCogs,
  FaDraftingCompass,
  FaExchangeAlt,
  FaHammer,
  FaRulerCombined,
  FaTools,
} from "react-icons/fa";
import { Gi3dHammer, GiArchitectMask } from "react-icons/gi";
import { MdBuild, MdOutlineChair } from "react-icons/md";
import { mediaTemplate } from "templates/media";
import { typographyTemplate } from "templates/typography";

const SERVICES = [
  {
    heading: "Design and Build",
    body: "Integrated design-build services, simplifying projects from start to finish.",
    icon: { icon: FaDraftingCompass },
  },
  {
    heading: "Renovation",
    body: "Transforming spaces with structural updates and aesthetic improvements.",
    icon: { icon: FaHammer },
  },
  {
    heading: "Alteration",
    body: "Modifying buildings to suit new functions without losing integrity.",
    icon: { icon: FaExchangeAlt },
  },

  {
    heading: "Expansion",
    body: "Adding space seamlessly to support growth and enhanced functionality.",
    icon: { icon: FaArrowsAlt },
  },
  {
    heading: "Demolition",
    body: "Safe, efficient removal of structures, minimizing disruption and waste.",
    icon: { icon: Gi3dHammer },
  },
  {
    heading: "General Construction",
    body: "Complete construction services from foundation to final touches.",
    icon: { icon: FaTools },
  },
  {
    heading: "Architechtural Design",
    body: "Creative, functional architectural designs reflecting client vision.",
    icon: { icon: GiArchitectMask },
  },
  {
    heading: "Interior Design",
    body: "Crafting functional, stylish interiors that enhance any space.",
    icon: { icon: MdOutlineChair },
  },
  {
    heading: "MEPFPS Design and Consultation",
    body: "Integrated MEPFPS systems, ensuring safe, efficient building operations.",
    icon: { icon: FaCogs },
  },
  {
    heading: "Preventive Maintenance Services (PMS)",
    body: "Regular maintenance to prevent issues and extend system lifespans.",
    icon: { icon: MdBuild },
  },
  {
    heading: "Work Environment Measurement (WEM)",
    body: "Assessing work environments to enhance health, safety, and comfort.",
    icon: { icon: FaRulerCombined },
  },
];

export const Services = () => (
  <>
    <Container
      usx={{
        opacity: 0,
        padding: { top: "xxl", bottom: "xxl" },
        animation: {
          inView: {
            opacity: 100,
            transition: { timing: "ease-in", duration: 2 },
            threshold: 50,
          },
        },
        fluid: true,
        background: "light",
      }}
      id="services"
      name="services"
    >
      <Container>
        <Row>
          <Column>
            <Typography {...typographyTemplate?.PrimaryHeadingA}>
              Services
            </Typography>

            <Typography {...typographyTemplate?.SecondaryHeadingA}>
              End-to-End Support Across Architecture, Engineering, and Building
              Systems
            </Typography>
            <Typography {...typographyTemplate?.Body}>
              Offering comprehensive services across architecture and
              construction, we specialize in design and build, renovation,
              alteration, expansion, and demolition. Our team provides expertise
              in architectural and interior design, general construction, and
              MEPFPS design and consultation. We also ensure safety and
              longevity with preventive maintenance and optimize workspaces
              through work environment measurement, supporting every stage of
              your project.
            </Typography>
          </Column>
          <Container usx={{ fluid: true }}>
            <Row usx={{ columnItems: { lg: 3, md: 3, xl: 3, xxl: 3 } }}>
              {SERVICES.map((service, index) => {
                return (
                  <Column key={index}>
                    <Card
                      usx={{ background: "white", boxShadow: "box-shadow-6" }}
                      style={{
                        border: "2px solid",
                        borderImage:
                          "linear-gradient(to right, #04c37f, #6ac864, #9fca4c, #d0c93f, #ffc444) 2.5",
                      }}
                    >
                      <Media
                        {...mediaTemplate?.TopIconA}
                        usx={{ boxShadow: "box-shadow-1", padding: "sm" }}
                        body={<Typography>{service.body}</Typography>}
                        icon={<Icon icon={service.icon.icon} />}
                        heading={
                          <Typography
                            {...typographyTemplate?.PrimaryHeadingA}
                            as="h5"
                            usx={{ font: { size: "sm" } }}
                          >
                            {service.heading}
                          </Typography>
                        }
                      />
                    </Card>
                  </Column>
                );
              })}
            </Row>
          </Container>
        </Row>
      </Container>
    </Container>
  </>
);
