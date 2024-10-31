import {
  Button,
  Card,
  Column,
  Container,
  List,
  Media,
  Row,
  SectionLabel,
  Typography,
} from "@uiComponents";
import { BsFillHouseGearFill } from "react-icons/bs";
import { FaBeer, FaCheck, FaCog } from "react-icons/fa";
const SampleCard = () => (
  <>
    <Container
      fluid
      background={"light"}
      padding={{ top: { value: 50 }, bottom: { value: 50 } }}
    >
      <Card boxShadow="box-shadow-3" background={"white"} padding={"sm"}>
        <Media
          padding={"zero"}
          icon={{
            icon: BsFillHouseGearFill,
            position: "top-left",
            rounded: true,
            variant: "outline",
            background: "primary",
            color: "white",
          }}
          heading={{ children: "Design and Build", color: "dark" }}
          body={{
            children: "There are many variations of passages of lorem ipsum",
          }}
        />
      </Card>
    </Container>
  </>
);

export default SampleCard;
