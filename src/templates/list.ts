import { ListComponentProps } from "components/component.barrel.types";

export const list: ListComponentProps[] = [
  // template={1} c-dark, fontSize: 100px
  {
    color: "dark",
    font: { size: { value: 100 } },
  },
] as const;
