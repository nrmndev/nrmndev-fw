import {
  Button,
  Column,
  Container,
  List,
  Row,
  DecoratedLabel,
  Typography,
  Icon,
} from "components/component.barrel.index";

import { FaBeer, FaCheck, FaCog } from "react-icons/fa";
import { decoratedlabelTemplate } from "templates/decoratedLabel";
import { typographyTemplate } from "templates/typography";

export const AboutUsSection = () => {
  return (
    <Container>
      <Row>
        <Column
          usx={{
            columnItems: { xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 12 },
          }}
        >
          ye
        </Column>
        <Column
          usx={{
            columnItems: { xxl: 6, xl: 6, lg: 6, md: 12, sm: 12, xs: 12 },
            padding: "sm",
            opacity: 0,
            animation: {
              inView: {
                opacity: 100,
                transition: { timing: "ease-in", duration: 2 },
                threshold: 50,
              },
            },
          }}
          //template={1}
        >
          <DecoratedLabel
            typography={
              <Typography {...typographyTemplate?.PrimaryHeadingA}>
                About Us
              </Typography>
            }
            rightDecor={<Icon icon={FaCog} color="light" />}
          />
          <Typography {...typographyTemplate?.SecondaryHeadingA}>
            A Company To Change The World We're Caryatecton
          </Typography>
          <Typography {...typographyTemplate?.Body}>
            Proactively pontificate client-centered relationships via- process
            centric leadershio skills. Credibly maintain focused internal or
            "organic" sources rather than vertical alignments
          </Typography>

          <List
            icon={FaCheck}
            margin={"zero"}
            color="dark"
            display="flex"
            font={{ size: "md" }}
            items={[
              { label: "Market research" },
              { label: "Industrial Manufacturing" },
              { label: "Pre-construction services" },
              { label: "Building and Construction" },
            ]}
          />
          <Button
            usx={{
              transform: {
                scale: 2,
                translate: { y: { value: 0 } },
                rotate: { x: 50, y: 300 },
              },
              transition: { timing: "cubic-bezier(.22,.68,0,1.71)" },
              animation: {
                hover: {
                  translate: { y: { value: 15 } },
                },
              },
            }}
          >
            See More
          </Button>
        </Column>
      </Row>
    </Container>
  );
};
