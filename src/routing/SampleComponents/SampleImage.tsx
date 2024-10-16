import { Image } from "@uiComponents";

const SampleImage = () => {
  return (
    <>
      <Image
        display="flex"
        src="/images/homepage/image-1.png"
        alt="Sample Alt"
        border={{ color: "accent1", top: 5 }}
        borderRadius={"lg"}
      />
    </>
  );
};

export default SampleImage;
