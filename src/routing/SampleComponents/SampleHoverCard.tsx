import { HoverCard } from "@components";
import { FaBedPulse } from "react-icons/fa6";

const SampleHoverCard = () => {
  return (
    <>
      <HoverCard style={{ maxWidth: "300px" }}>
        <HoverCard.Icon icon={FaBedPulse} />
        <HoverCard.Heading level={3}>Sample Heading</HoverCard.Heading>
        <HoverCard.Body>Sample body</HoverCard.Body>
        <HoverCard.Overlay>
          <HoverCard.OverlayHeading level={3}>
            Sample Overlay Heading
          </HoverCard.OverlayHeading>
        </HoverCard.Overlay>
      </HoverCard>
      {/* <div>
        <HoverCard.Heading level={3}>Sample Heading</HoverCard.Heading>
      </div> */}
    </>
  );
};

export default SampleHoverCard;
