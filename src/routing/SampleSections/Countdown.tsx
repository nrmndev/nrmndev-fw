import { Container, Media } from "@components";
import { FaBeer } from "react-icons/fa";

const SampleCountdown2 = () => {
  return (
    <>
      <Container
        fluid
        padding={{ top: "md", right: "md", bottom: "md", left: "md" }}
        style={{ background: "#eeeeee" }}
      >
        <Container
          justifyContent="space-between"
          alignItems="center"
          padding={"lg"}
        >
          <Container.Column>
            <Media icon={FaBeer} heading="1.2M+" body={<>Projects Done</>} />
          </Container.Column>{" "}
          <Container.Column>
            <Media icon={FaBeer} heading="1.2M+" body={<>Projects Done</>} />
          </Container.Column>{" "}
          <Container.Column>
            <Media icon={FaBeer} heading="1.2M+" body={<>Projects Done</>} />
          </Container.Column>
        </Container>
      </Container>
    </>
  );
};

const SampleCountdown = () => {
  return (
    <Container>
      <Container.Column lg={5}>Test</Container.Column>
    </Container>
  );
};
export default SampleCountdown;
