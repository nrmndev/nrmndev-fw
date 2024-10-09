import { Button, ColumnGroup } from "@uiComponents";
import { FaBeer } from "react-icons/fa";

const SampleButton = () => (
  <>
    <Button
      size="md"
      margin={"sm"}
      fontSize={{ value: 100 }}
      variant="flat"
      color="primary"
    >
      BorderRadius
    </Button>
    <Button size="xs" margin={{ top: 20 }} as="navLink" to="/test">
      <FaBeer /> Test
    </Button>
    <Button size="sm" margin={{ top: 20 }} as="navLink" to="/test">
      <FaBeer /> Test
    </Button>{" "}
    <Button
      size="md"
      color="white"
      margin={{ top: 20 }}
      as="navLink"
      to="/test"
    >
      <FaBeer /> Test
    </Button>{" "}
    <Button
      size="lg"
      color="white"
      margin={{ top: 20 }}
      as="navLink"
      to="/test"
    >
      <FaBeer /> Test
    </Button>{" "}
    <Button
      size="xl"
      color="white"
      margin={{ top: 20 }}
      as="navLink"
      to="/test"
    >
      <FaBeer /> Test
    </Button>{" "}
    <Button
      size="xxl"
      color="white"
      margin={{ top: 20 }}
      as="navLink"
      to="/test"
      className="sample-className"
    >
      <FaBeer /> Test
    </Button>{" "}
    {/* <ButtonSample
      onClick={(e) => alert(e.currentTarget.value + "test")}
      id="testID"
      className="btn btn--primary"
    >
      Text
    </ButtonSample> */}
  </>
);

export default SampleButton;
