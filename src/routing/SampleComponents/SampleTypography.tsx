import { Typography } from "components/component.barrel.index";
import { typographyTemplate } from "templates/typography";

const SampleTypography = () => {
  return (
    <>
      <Typography as="span" {...typographyTemplate?.PrimaryHeadingA}>
        Typography as span
      </Typography>
      <hr />
      <Typography as="h1">Typography as H1</Typography>
      <hr />
      <Typography as="h2">Typography as h2</Typography>
      <hr />
      <Typography as="h3">Typography as h3</Typography>
      <hr />
      <Typography as="h4">Typography as h4</Typography>
      <hr />
      <Typography as="h5">Typography as h5</Typography>
      <hr />
      <Typography as="h6">Typography as h6</Typography>
      <hr />
      <Typography as="p">Typography as p</Typography>
      <hr />
    </>
  );
};

export default SampleTypography;
