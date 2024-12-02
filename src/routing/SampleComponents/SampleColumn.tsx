import {
  Column,
  Container,
  Media,
  Row,
  Typography,
} from "components/component.barrel.index";
import { FaPhone } from "react-icons/fa";

const SampleColumn = () => {
  return (
    <>
      <Container as="div" margin="sm">
        asd
      </Container>
      <Row>
        <Column
          background={"accent1"}
          gap={"lg"}
          xl={2}
          flex={{ alignContent: "center" }}
          display={"flex"}
          as="article"
          data-test="Hello"
        >
          <Media
            borderRadius={"xs"}
            background="primary"
            color="white"
            icon={{
              icon: FaPhone,
              //background: "primary",
              margin: "sm",
              rounded: true,
              variant: "outline",
              position: "right",
            }}
            heading={{ children: "Phone Number" }}
            body={{ children: <>(+55) 654 - 545 - 5418</> }}
          />
          <div>
            <Typography as="p">Hello</Typography>
          </div>
          <div>Test Gap</div>
          <div>Test Gap</div>
        </Column>
      </Row>
    </>
  );
};

export default SampleColumn;
