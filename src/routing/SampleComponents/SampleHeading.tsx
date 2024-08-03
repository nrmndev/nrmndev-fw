import { Heading } from "@components/heading/Index";
import React from "react";

const SampleHeading = () => {
  return (
    <>
      <Heading level={1} maxCharacters={20} textTransform="capitalize">
        A Company to change the world we're driller industrial{" "}
      </Heading>
      <Heading level={2} maxCharacters={30}>
        A Company to change the world we're driller industrial
      </Heading>
      <Heading level={3} maxCharacters={40}>
        A Company to change the world we're driller industrial
      </Heading>
      <Heading level={4}>
        A Company to change the world we're driller industrial
      </Heading>
      <Heading level={5}>
        A Company to change the world we're driller industrial
      </Heading>
      <Heading level={6}>
        A Company to change the world we're driller industrial
      </Heading>
    </>
  );
};

export default SampleHeading;
