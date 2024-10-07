import { Icon } from "@uiComponents";
import viteLogo from "/vite.svg";
import { FaBeer } from "react-icons/fa";

//Limit to 3 combinations color/background
const SampleIcon = () => {
  return (
    <>
      <p>Icon using img with background:black, iconSize:lg</p>
      <Icon icon={viteLogo} variant="solid" background="black" iconSize="lg" />
      <hr /> <p>Icon using react-icons with background:black, iconSize:lg</p>
      <Icon
        icon={FaBeer}
        variant="outline"
        background="black"
        iconSize="lg"
        color="white"
      />
      <hr />
      <p>Icon variant = outline, color = black</p>
      <Icon
        icon={FaBeer}
        variant="outline"
        iconSize="lg"
        color="black"
        className="sample-className"
        rounded
      />
      <hr />
      {/* <Icon icon={viteLogo} variant="primary-alt" />
      <Icon icon={viteLogo} variant="secondary" rounded />
      <Icon icon={viteLogo} variant="secondary-alt" rounded />
      <Icon icon={FaBeer} variant="primary" rounded />
      <Icon icon={FaBeer} variant="primary-alt" />
      <Icon icon={FaBeer} variant="secondary" rounded />
      <Icon icon={FaBeer} variant="secondary-alt" /> */}
    </>
  );
};

export default SampleIcon;
