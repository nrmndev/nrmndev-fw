import { TemplatingTrial } from "@uiComponents";
import {
  ContainerComponentProps,
  TypographyComponentProps,
} from "@uiComponentTypes";

type ComponentTemplateTypes = {
  typography: TypographyComponentProps;
  container: ContainerComponentProps;
  //typography: Record<string, TypographyComponentProps>;
  // other component types can go here
};

// Define a type that enforces the structure for the given template key
//type TProps<T extends keyof ComponentTemplateTypes> = ComponentTemplateTypes[T];
type TProps<T extends keyof ComponentTemplateTypes> = {
  [key: string]: ComponentTemplateTypes[T];
};

// Define TypographyTemplate with a type-safe structure
const TypographyTemplate: TProps<"typography"> = {
  PrimaryHeading: {
    font: { size: "xl" }, // Type-safe to TypographyComponentProps
  },
  SecondaryHeading: {
    font: { size: "lg" },
    color: "white",
  },
  // Add additional typography elements as needed
} as const;

// type TProps<T extends keyof ComponentTemplateTypes> = {
//     [K in keyof T]: TypographyComponentProps;
// }

export type ThemeTemplates<T extends object> = {
  template?: {
    [K in keyof T]: T[K];
  };
};

export const SampleTemplatingTrial = () => {
  return <></>;
};
