import { Heading } from "@components/heading/Index";

const SampleHeading = () => {
  return (
    <>
      <Heading level={1} width={50}>
        I am a Heading1, with a width of 50% of my parent container
      </Heading>
      <Heading level={2} textTransform="uppercase">
        I am a Heading2, with a textTransform of uppercase
      </Heading>
      <Heading level={3} width={75}>
        A am a Heading3 width a width of 75% of my parent container, I need to
        have a long content before we can actually see how I behave
      </Heading>
      <Heading level={4} textTransform="capitalize">
        I am a Heading2, with a textTransform of capitalize
      </Heading>
      <Heading level={5}>I am a Heading5, nothing fancy</Heading>
      <Heading level={6}>
        I am a Heading6, nothing fancy, identical skin with Heading 5
      </Heading>
    </>
  );
};

export default SampleHeading;
