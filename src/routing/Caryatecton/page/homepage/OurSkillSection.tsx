import {
  Column,
  Container,
  ProgressBar,
  DecoratedLabel,
  Typography,
  Row,
  Icon,
} from "components/component.barrel.index";
import React from "react";
import { AiOutlineSmallDash } from "react-icons/ai";
import { FaRulerCombined } from "react-icons/fa";
import { decoratedlabelTemplate } from "templates/decoratedLabel";
import { typographyTemplate } from "templates/typography";

const OurSkillSection = () => {
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
      }}
    >
      <Container>
        <Row>
          <Column usx={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6, xxl: 6 }}>
            <DecoratedLabel
              typography={
                <Typography {...typographyTemplate?.PrimaryHeadingA}>
                  Our Skills
                </Typography>
              }
              rightDecor={<Icon icon={FaRulerCombined} color="light" />}
            />
            <Typography {...typographyTemplate?.SecondaryHeadingA}>
              This Building Skill Member Meet on Rent
            </Typography>
            <Typography {...typographyTemplate?.Body}>
              If you are going to use a passage of Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error consectetur ratione amet
              nesciunt eligendi tempore.
            </Typography>
            <ProgressBar
              color="primary"
              current={75}
              total={100}
              label="Building Houses"
              showProgress
            />
            <ProgressBar
              current={85}
              total={100}
              label="Luxury Homes"
              showProgress
            />
            <ProgressBar
              current={95}
              total={100}
              label="Other skills"
              showProgress
            />
          </Column>
          <Column
            usx={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6, xxl: 6, padding: "sm" }}
          ></Column>
        </Row>
      </Container>
    </Container>
  );
};

export default OurSkillSection;
