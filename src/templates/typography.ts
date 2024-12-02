import { TemplateFor } from "@uiTypes";
//import { TypographyComponentProps } from "components/component.barrel.types";

export const typographyTemplate: TemplateFor<"typography"> = {
  PrimaryHeadingA: {
    usx: {
      color: "gradient-1",
      font: { size: "xl" },
    },
    as: "h2",
  },
  PrimaryHeadingB: {
    usx: {
      color: "gradient-1",
      text: { align: "right" },
      font: { size: "xl" },
    },
    as: "h2",
  },
  PrimaryHeadingC: {
    usx: {
      text: { align: "left" },
      color: "gradient-1",
      font: { size: "sm" },
    },
    as: "h5",
  },
  SecondaryHeadingA: {
    as: "h3",
    usx: { font: { size: "md" }, color: "primary" },
  },
  // TertiaryHeadingA: { as: "h4", font: { size: "sm" }, color: "black" },
  // Body: {
  //   as: "p",
  //   font: { size: { value: 1.8, unit: "rem" } },
  //   color: "black",
  //   margin: { bottom: { value: 10, unit: "px" } },
  // },
  // Add more choices as needed...
};

// export const typography: TypographyComponentProps[] = [
//   // template={1} c-dark, fontSize: 100px
//   {
//     color: "dark",
//     font: { size: { value: 100 } },
//   },
//   // template={2} c-white, fontSize: 100px, text-right
//   {
//     color: "white",
//     font: { size: { value: 100 } },
//     text: { align: "center" },
//   },
//   // template={3} h2, bgc-gradient
//   {
//     as: "h2",
//     color: "gradient-1",
//   },
//   // template={4} textRight, c-light
//   { text: { align: "right" }, color: "light" },
// ] as const;
