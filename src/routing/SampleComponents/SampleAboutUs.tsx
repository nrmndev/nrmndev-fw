import {
  Button,
  Container,
  Heading,
  Icon,
  List,
  SectionLabel,
  Text,
} from "@components";
import { FaBeer, FaCheck } from "react-icons/fa";

const SampleAboutUs = () => {
  return (
    <>
      <Container>
        <Container.Column
          lg={6}
          md={12}
          xs={12}
          sm={12}
          xl={6}
          xxl={6}
        ></Container.Column>
        <Container.Column lg={6} md={12} xs={12} sm={12} xl={6} xxl={6}>
          <SectionLabel label="About Us" position="center" />
          <Heading level={2}>
            A Company To Change The World We're Driller Industrial
          </Heading>
          <Text>
            Proactively pontificate client-centered relationships vis-a-vis
            process centric leadership skills. Credibly maintain focused
            internal or "organic" sources rather than vertical alignments.
          </Text>
          <List
            icon={FaCheck}
            display="grid-2-columns"
            items={[
              "Market Research",
              "Pre-construction Services",
              "Industrial manufacturing",
              "Building and construction",
            ]}
          />
          <Button variant="primary">More About Us</Button>
        </Container.Column>
      </Container>
      <Container justifyContent="space-between" alignItems="center">
        <Container.Column>
          <SectionLabel label="What We Do" position="left" />
          <Heading level={2}>
            Full Integrated <br />
            Construction Services
          </Heading>
        </Container.Column>
        <Container.Column>
          <Button variant="primary">More About Us</Button>
        </Container.Column>
      </Container>
      <Container fluid>
        <Container gap="sm">
          <Container.Column
            sm={12}
            md={4}
            lg={4}
            xl={4}
            xxl={4}
            style={{ background: "#fafafa" }}
          >
            <Icon icon={FaBeer} variant="primary-alt" iconSize="lg" rounded />
            <Heading level={3}>
              Interior Remodeling: <br /> Transform Spaces.
            </Heading>
            <Text maxChars={50}>
              There are many variations of passages of Lorem Ipsum available.
            </Text>
          </Container.Column>
          <Container.Column sm={12} md={4} lg={4} xl={4} xxl={4}>
            <Icon icon={FaBeer} variant="primary-alt" iconSize="lg" rounded />
            <Heading level={3}>
              Interior Remodeling: <br /> Transform Spaces.
            </Heading>
            <Text maxChars={50}>
              There are many variations of passages of Lorem Ipsum available.
            </Text>
          </Container.Column>
          <Container.Column sm={12} md={4} lg={4} xl={4} xxl={4}>
            <Icon icon={FaBeer} variant="primary-alt" iconSize="lg" rounded />
            <Heading level={3}>
              Interior Remodeling: <br /> Transform Spaces.
            </Heading>
            <Text maxChars={50}>
              There are many variations of passages of Lorem Ipsum available.
            </Text>
          </Container.Column>
        </Container>
      </Container>
    </>
  );
};

export default SampleAboutUs;
