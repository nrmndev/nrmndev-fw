import {
  Column,
  Container,
  Row,
  Typography,
  Card,
  Image,
} from "components/component.barrel.index";

import heroBanner1 from "../../../../assets/project_thoughfocus.jpg";
import heroBanner2 from "../../../../assets/project_bbqChicken.jpg";
import heroBanner3 from "../../../../assets/project_interorient.jpg";
import heroBanner4 from "../../../../assets/project_secret_kitchen.jpg";
import heroBanner5 from "../../../../assets/project_gerp.png";
import heroBanner6 from "../../../../assets/projects_fhf.jpg";
import heroBanner7 from "../../../../assets/project_hello.jpg";
import heroBanner8 from "../../../../assets/project_sk_venice.jpg";
import heroBanner9 from "../../../../assets/project_salmonHQ.jpg";
import heroBanner10 from "../../../../assets/project_kakatakam.jpg";
import heroBanner11 from "../../../../assets/project_jian.jpg";

import { typographyTemplate } from "templates/typography";

import shapeBG from "../../../../assets/shape-2.png";

const LatestProjects = () => {
  return (
    <Container
      usx={{
        opacity: 0,
        animation: {
          inView: {
            opacity: 100,
            transition: { timing: "ease-in", duration: 2 },
            threshold: 50,
          },
        },
        padding: { bottom: { value: 150 } },
        fluid: true,
        background: {
          image: shapeBG,
          position: "left",
          repeat: "no-repeat",
          attachment: "scroll",
          size: "auto",
        },
      }}
      id="projects"
      name="projects"
    >
      <Container>
        <Row>
          <Column>
            <Typography {...typographyTemplate?.PrimaryHeadingA}>
              Latest Projects
            </Typography>
            <Typography {...typographyTemplate?.SecondaryHeadingA}>
              Explore Our Latest Architectural Projects
            </Typography>
            <Typography {...typographyTemplate?.Body}>
              Discover groundbreaking designs and innovative concepts shaping
              the future of architecture, with projects that blend creativity,
              functionality, and sustainability to transform spaces around the
              world.
            </Typography>
          </Column>
        </Row>
        <Row>
          {itemData.map((item, idx) => {
            return (
              <Column
                usx={{ sm: 6, xs: 12, md: 6, lg: 4, xl: 4, xxl: 4 }}
                key={idx}
              >
                <Card>
                  <Image
                    src={item.img}
                    style={{ display: "block", width: "100%" }}
                  />
                  <Typography>{item.title}</Typography>
                </Card>
              </Column>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default LatestProjects;

const itemData = [
  {
    img: heroBanner1,
    title: "ThoughtFocus Inc PH Office Expansion",
  },
  {
    img: heroBanner2,
    title: "bb.q Chicken Restaurant Sta Rosa Branch",
  },
  {
    img: heroBanner3,
    title: "Interiorient Office Renovation",
  },
  {
    img: heroBanner4,
    title: "Secret Kitchen Food Stall Podium Mall Branch",
  },
  {
    img: heroBanner5,
    title: "GFRP Booth Philconstruct Expo 2023",
  },
  {
    img: heroBanner6,
    title: "Fook Hing Fun Restaurant Poblacion",
  },
  {
    img: heroBanner7,
    title: "Hello Photo Booth Robinsons Manila",
  },
  {
    img: heroBanner8,
    title: "Secret Kitchen Food Stall Venice Mall Branch",
  },

  {
    img: heroBanner9,
    title: "Salmon HQ Food Stall Podium Mall Branch",
  },
  {
    img: heroBanner10,
    title: "Kakatakam! Restaurant Shangri-la Mall",
  },
  {
    img: heroBanner11,
    title: "Jian's 4-Storey Apartment with Roof Deck",
  },
];
