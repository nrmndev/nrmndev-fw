import { HoverCard } from "@components";

const SampleHoverCard = () => {
  return (
    <HoverCard>
      <HoverCard.Heading level={3}>Sample Heading</HoverCard.Heading>
      <HoverCard.Body>Sample body</HoverCard.Body>
      <HoverCard.Overlay>
        <HoverCard.OverlayHeading level={3}>
          Sample Overlay Heading
        </HoverCard.OverlayHeading>
      </HoverCard.Overlay>
    </HoverCard>
  );
};

export default SampleHoverCard;
