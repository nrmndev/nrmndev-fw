import { Image } from "components/component.barrel.index";

const SampleImage = () => {
  return (
    <>
      <Image
        display="flex"
        src="/images/homepage/image-1.png"
        alt="Sample Alt"
        border={{ color: "accent1", width: 5 }}
        borderRadius={"lg"}
      />
    </>
  );
};

export default SampleImage;
