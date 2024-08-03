import Icon from "@components/icon/Index";
import viteLogo from "/vite.svg";
import { FaBeer } from "react-icons/fa";

//Limit to 3 combinations color/background
const SampleIcon = () => {
  return (
    <>
      <Icon icon={viteLogo} variant="primary" />
      <Icon icon={viteLogo} variant="primary-alt" />
      <Icon icon={viteLogo} variant="secondary" rounded />
      <Icon icon={viteLogo} variant="secondary-alt" rounded />
      <Icon icon={FaBeer} variant="primary" rounded />
      <Icon icon={FaBeer} variant="primary-alt" />
      <Icon icon={FaBeer} variant="secondary" rounded />
      <Icon icon={FaBeer} variant="secondary-alt" />
    </>
  );
};

export default SampleIcon;
