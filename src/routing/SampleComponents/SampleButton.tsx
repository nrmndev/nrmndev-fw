import { Button, ColumnGroup } from "@uiComponents";
import { FaBeer } from "react-icons/fa";

const SampleButton = () => (
  <>
    <ColumnGroup direction="row" alignment="left" wrap fullWidth columns={3}>
      <Button
        size="md"
        background="secondary"
        color="white"
        display="block"
        padding={"lg"}
        margin={"sm"}
        border={{ bottom: 2, top: 5, unit: "px" }}
        borderRadius={{ bottomRight: 50, unit: "%" }}
        fontSize={{ value: 100 }}
      >
        BorderRadius
      </Button>
      <Button size="md" color="white" padding={"lg"} margin={{ top: 20 }}>
        <FaBeer />
        Test
      </Button>
      <Button variant="outlined" size="md" color="primary">
        Test
      </Button>
      <Button size="md" color="primary">
        Test
      </Button>
    </ColumnGroup>

    <Button
      variant="outlined"
      size="md"
      color="black"
      background="primary"
      padding={"lg"}
      as="anchorLink"
      target="_blank"
      href="http://www.google.com"
    >
      Test as Anchor Link
    </Button>
    <Button
      variant="solid"
      size="md"
      color="white"
      padding={{ top: 10, right: 20 }}
      as="navLink"
      to="/"
    >
      Test as Navlink
    </Button>
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
