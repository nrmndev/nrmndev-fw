import { Button } from "@uiComponents";
import { useEffect, useRef } from "react";
import { FaBeer } from "react-icons/fa";

const SampleButton = () => {
  // const ref = useRef<HTMLButtonElement>(null);

  // useEffect(() => {}, []);
  // const handleClick = () => {
  //   console.log(ref.current);
  // };

  return (
    <>
      <Button
        size="md"
        margin={"sm"}
        font={{ size: { value: 100 } }}
        variant="flat"
        color="primary"
      >
        Button
      </Button>
      <Button
        size="xs"
        margin={{ top: { value: 20 } }}
        padding={{ value: 50 }}
        as="a"
        href="#test"
      >
        <FaBeer /> A
      </Button>
      <Button
        size="sm"
        margin={{ top: { value: 20 } }}
        padding={{ value: 50 }}
        as="navLink"
        to="#test"
      >
        <FaBeer /> Navlink
      </Button>{" "}
      <Button
        size="md"
        color="white"
        margin={{ top: { value: 20 } }}
        padding={{ value: 50 }}
        as="navLink"
        to="/test"
      >
        <FaBeer /> Test
      </Button>{" "}
      <Button
        size="lg"
        color="white"
        margin={{ top: { value: 20 } }}
        as="navLink"
        to="/test"
      >
        <FaBeer /> Test
      </Button>{" "}
      <Button
        size="xl"
        color="white"
        margin={{ top: { value: 20 } }}
        as="navLink"
        to="/test"
      >
        <FaBeer /> Test
      </Button>{" "}
      <Button
        size="xxl"
        color="white"
        margin={{ top: { value: 20 } }}
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
};

export default SampleButton;
