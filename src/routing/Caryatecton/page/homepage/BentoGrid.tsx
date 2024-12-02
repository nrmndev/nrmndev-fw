import { Card, Column, Container, Row, Typography } from "@uiComponents";
import React from "react";
import heroBanner1 from "../../../../assets/homepage_1.jpg";

const BentoGrid = () => {
  return (
    <Container usx={{ fluid: true }}>
      <Row>
        <Column usx={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6, xxl: 6 }}>
          <Column>
            <Card
              style={{
                backgroundImage: `url(${heroBanner1})`,
                paddingTop: "56.25%",
                position: "relative",
                width: "100%",
                paddingLeft: "3rem",
                paddingRight: "3rem",
                paddingBottom: "3rem",
              }}
              className="bento--container"
            >
              <div className="bento--content">
                <Typography style={{ fontSize: "4rem", color: "#FFF" }}>
                  bbq Chicken Sta Rosa
                </Typography>
              </div>
            </Card>
          </Column>
          <Row>
            <Column usx={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6, xxl: 6 }}>
              <Typography style={{ fontSize: "4rem", color: "red" }}>
                bbq Chicken Sta Rosa
              </Typography>
            </Column>
            <Column
              usx={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6, xxl: 6 }}
              style={{
                backgroundImage: `url(${heroBanner1})`,
                paddingTop: "56.25%",
                position: "relative",
                width: "100%",
                paddingLeft: "3rem",
                paddingRight: "3rem",
                paddingBottom: "3rem",
              }}
            >
              <Typography style={{ fontSize: "4rem", color: "red" }}>
                bbq Chicken Sta Rosa
              </Typography>
            </Column>
          </Row>{" "}
          <Row>
            <Column usx={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6, xxl: 6 }}>
              <Typography style={{ fontSize: "4rem", color: "red" }}>
                bbq Chicken Sta Rosa
              </Typography>
            </Column>
            <Column usx={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6, xxl: 6 }}>
              <Row>
                <Column usx={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6, xxl: 6 }}>
                  <Typography style={{ fontSize: "4rem", color: "red" }}>
                    bbq Chicken Sta Rosa
                  </Typography>
                </Column>
                <Column usx={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6, xxl: 6 }}>
                  <Typography style={{ fontSize: "4rem", color: "red" }}>
                    bbq Chicken Sta Rosa
                  </Typography>
                </Column>
              </Row>
            </Column>
          </Row>
        </Column>
        <Column usx={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6, xxl: 6 }}></Column>
      </Row>
    </Container>
  );
};

export default BentoGrid;
