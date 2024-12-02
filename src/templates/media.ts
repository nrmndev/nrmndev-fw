import { TemplateFor } from "@uiTypes";

export const mediaTemplate: TemplateFor<"media"> = {
  TopIconA: {
    //padding: "zero",
    //icon: { ...iconTemplate?.IconA, position: "top-left" },
    //heading: { ...typographyTemplate?.TertiaryHeadingA },
    //body: { ...typographyTemplate?.Body },
    //headingContent: "test",
    //iconContent: "text",
    //bodyContent: "text",
    iconPosition: "top-left",
    usx: {
      padding: "sm",
      background: "white",
    },
    //Heading:{<p>test</p>}
  },
  // TopIconB: {
  //   padding: "zero",
  //   icon: { ...iconTemplate?.IconB, position: "top-left" },
  //   heading: { ...typographyTemplate?.TertiaryHeadingA },
  //   body: { ...typographyTemplate?.Body },
  //   headingContent: "test",
  //   iconContent: "text",
  //   bodyContent: "text",
  // } as MediaComponentProps,
} as const;

// export const media: MediaComponentProps[] = [
//   {
//     padding: "md",
//     background: "white",
//     icon: {
//       rounded: true,
//       background: "white",
//       color: "primary",
//     },
//     heading: {
//       as: "h6",
//       color: "primary",
//     },
//     body: {
//       color: "primary",
//     },
//   },
// ] as const;
