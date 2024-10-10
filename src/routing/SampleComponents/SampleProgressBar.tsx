import { ProgressBar } from "@uiComponents";

const SampleProgressBar = () => {
  return (
    <ProgressBar
      current={90}
      total={100}
      showProgress
      color="black"
      variant="striped"
    />
  );
};

export default SampleProgressBar;
