import { Button } from "@components";
import { ButtonSample } from "@components";

const SampleButton = () => (
  <>
    <Button variant="primary" size="lg">
      Test
    </Button>
    <ButtonSample
      onClick={(e) => alert(e.currentTarget.value + "test")}
      id="testID"
      className="btn btn--primary"
    >
      Text
    </ButtonSample>
  </>
);

export default SampleButton;
