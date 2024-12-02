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
  FaBolt,
  FaBuilding,
  FaCogs,
  FaFireExtinguisher,
  FaLock,
  FaNetworkWired,
  FaTv,
} from "react-icons/fa";
import {
  GiBrickWall,
  GiFireExtinguisher,
  GiFireZone,
  GiHeatHaze,
} from "react-icons/gi";

import { mediaTemplate } from "templates/media";
import { typographyTemplate } from "templates/typography";
import shapeBG from "../../../../assets/shape-2.png";

const TRADES = [
  {
    heading: "Architectural / Civil",
    body: "Architectural and civil engineering for functional, durable structures.",
    icon: { icon: FaBuilding },
  },
  {
    heading: "Structural",
    body: "Transforming spaces with structural updates and aesthetic improvements.",
    icon: { icon: GiBrickWall },
  },
  {
    heading: "Mechanical",
    body: "Comprehensive mechanical system solutions for reliable building services.",
    icon: { icon: FaCogs },
  },

  {
    heading: "Electrical",
    body: "Electrical system design ensuring safety, efficiency, and compliance.",
    icon: { icon: FaBolt },
  },
  {
    heading: "Fire Detection and Alarm System (FDAS)",
    body: "Advanced fire detection systems to quickly alert and protect occupants.",
    icon: { icon: FaFireExtinguisher },
  },
  {
    heading: "Fire Protection",
    body: "Fire protection systems designed for safe, fast emergency responses.",
    icon: { icon: GiFireZone },
  },
  {
    heading: "Mechanical HVAC System",
    body: "HVAC solutions for optimal indoor climate and air quality control.",
    icon: { icon: GiHeatHaze },
  },
  {
    heading: "Mechanical Automatic Fire Suppression System",
    body: "Automatic fire suppression systems to protect assets and lives.",
    icon: { icon: GiFireExtinguisher },
  },
  {
    heading: "LPG System",
    body: "Safe, efficient LPG system installations for reliable energy access.",
    icon: { icon: FaCogs },
  },
  {
    heading: "Access Control / Security System",
    body: "Comprehensive access control to safeguard buildings and occupants.",
    icon: { icon: FaLock },
  },
  {
    heading: "Structured Cabling System",
    body: "Organized cabling solutions for seamless connectivity and scalability.",
    icon: { icon: FaNetworkWired },
  },
  {
    heading: "AV System",
    body: "Audio-visual systems to enhance communication and media experiences.",
    icon: { icon: FaTv },
  },
];

export const Trades = () => {
  return (
    <>
      <Container
        usx={{
          fluid: true,
          background: {
            image: shapeBG,
            position: "left",
            repeat: "no-repeat",
            attachment: "scroll",
            size: "auto",
          },
        }}
        id="trades"
        name="trades"
      >
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
          }}
        >
          <Row>
            <Column>
              {" "}
              <Typography {...typographyTemplate?.PrimaryHeadingB}>
                Trades
              </Typography>
              <Typography as="h3" usx={{ text: { align: "right" } }}>
                Essential Trades for Comprehensive Building Systems
              </Typography>
              <Typography as="p" usx={{ text: { align: "right" } }}>
                Trades encompass skilled labor essential to building systems,
                including architectural, structural, mechanical, electrical,
                fire safety, HVAC, LPG, security, cabling, and AV systems. Each
                trade specializes in specific functions, from foundational
                design to advanced safety and communication infrastructure,
                ensuring buildings are safe, efficient, and equipped for modern
                functionality.
              </Typography>
            </Column>
          </Row>
          <Container usx={{ fluid: true }}>
            <Row usx={{ columnItems: { lg: 3, md: 3, xl: 3, xxl: 3 } }}>
              {TRADES.map((trade, index) => {
                return (
                  <Column
                    key={index}
                    // usx={{ background: { image: getSvgString(FaBeer) } }}
                  >
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
                        body={<Typography>{trade.body}</Typography>}
                        icon={
                          <Icon
                            icon={trade.icon.icon}
                            rounded
                            variant="outline"
                            background="dark"
                            color="white"
                          />
                        }
                        heading={
                          <Typography
                            as="h5"
                            {...typographyTemplate?.PrimaryHeadingC}
                          >
                            {trade.heading}
                          </Typography>
                        }
                      ></Media>
                    </Card>
                  </Column>
                );
              })}
            </Row>
          </Container>
        </Container>
      </Container>
    </>
  );
};
