import {
  Column,
  Container,
  Media,
  Row,
} from "components/component.barrel.index";
import { BsFillHouseGearFill } from "react-icons/bs";
import { FaBuilding, FaPencilRuler, FaRegSmile } from "react-icons/fa";

const sharedMediaProps = {
  fluid: true,
  icon: {
    rounded: true,
    variant: "outline",
    background: "white",
    margin: { right: "xl" },
  },
  heading: {
    color: "white",
    as: "h3",
    font: { size: "xl" },
  },
  body: { color: "white", font: { size: "md" } },
} as const;

const PROJECTS = [
  {
    heading: "250+",
    body: "Projects Completed",
    icon: { icon: FaBuilding },
  },
  {
    heading: "1000+",
    body: "Designs Delivered",
    icon: { icon: FaPencilRuler },
  },
  {
    heading: "100+",
    body: "Satisfied Clients",
    icon: { icon: FaRegSmile },
  },
];

const ProgressSection = () => {
  return (
    <Container
      usx={{
        fluid: true,
        background: { image: "/images/homepage/image-1.png", size: "cover" },
        padding: { value: 80 },
        overlay: { color: "black", opacity: 90 },
        opacity: 0,
        animation: {
          inView: {
            opacity: 100,
            transition: { timing: "ease-in", duration: 2 },
            threshold: 50,
          },
        },
      }}
    >
      <Container
        usx={{
          position: { position: "relative", zIndex: 3 },
          padding: { top: "xxl", bottom: "xxl" },
        }}
      >
        <Row
          usx={{
            flex: { alignItems: "center", justifyContent: "center" },
            columnItems: { xs: 1, sm: 1, md: 2, lg: 3, xl: 3, xxl: 3 },
          }}
        >
          {PROJECTS.map((project, index) => {
            return (
              <Column key={index}>
                {/* <Media
                  {...sharedMediaProps}
                  icon={{
                    ...sharedMediaProps.icon,
                    icon: project.icon.icon,
                  }}
                  heading={{
                    ...sharedMediaProps.heading,
                    children: project.heading,
                  }}
                  body={{ ...sharedMediaProps.body, children: project.body }}
                /> */}
              </Column>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default ProgressSection;
