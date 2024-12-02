import { ProgressBar } from "components/component.barrel.index";

const SampleProgressBar = () => {
  return (
    <ProgressBar
      current={80}
      total={100}
      showProgress
      color="black"
      variant="striped"
    />
  );
};

export default SampleProgressBar;
