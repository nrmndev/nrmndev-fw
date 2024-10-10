import { Container } from "@uiComponents";
import Column from "components/layout/Column";
import React from "react";
import SampleHeroBanner from "routing/SampleComponents/SampleHero";
import SampleMainNavigation from "routing/SampleComponents/SampleMainNav";

const Homepage = () => {
  return (
    <>
      <SampleMainNavigation />
      <SampleHeroBanner />
      <Container fluid>
        <Column xl={6} xxl={6} lg={6} md={12} sm={12} xs={12}></Column>
        <Column xl={6} xxl={6} lg={6} md={12} sm={12} xs={12}></Column>
      </Container>
    </>
  );
};

export default Homepage;
