export default interface GridBaseProps {
  gap?: "xs" | "sm" | "md" | "lg";
  templateColumns: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

// export interface FlexBaseProps {
//   display: "flex";
//   gap?: never;
//   templateColumns?: never;
// }

// export type DisplayProps = GridBaseProps | FlexBaseProps;
