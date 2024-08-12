// import { ColumnProps, PositionTypes, SpacingProps } from "@typekits";
// import { MergePropsAsClassNames } from "@utils";
// import styled from "styled-components";

// const StyledColumn = styled.div<{
//   $padding: PositionTypes;
//   $margin: PositionTypes;
// }>`
//   ${({ $padding, $margin }) => `
//     ${$padding?.top ? `padding-top: var(--spacing-${$padding.top});` : ""}
//     ${$padding?.right ? `padding-right: var(--spacing-${$padding.right});` : ""}
//     ${
//       $padding?.bottom
//         ? `padding-bottom: var(--spacing-${$padding.bottom});`
//         : ""
//     }
//     ${$padding?.left ? `padding-left: var(--spacing-${$padding.left});` : ""}
//     ${$margin?.top ? `margin-top: var(--spacing-${$margin.top});` : ""}
//     ${$margin?.right ? `margin-right: var(--spacing-${$margin.right});` : ""}
//     ${$margin?.bottom ? `margin-bottom: var(--spacing-${$margin.bottom});` : ""}
//     ${$margin?.left ? `margin-left: var(--spacing-${$margin.left});` : ""}
//   `}
// `;
// export interface IPropsColumn
//   extends React.HTMLProps<HTMLDivElement>,
//     ColumnProps,
//     SpacingProps {}

// const Column = ({
//   xs = "",
//   sm = "",
//   md = "",
//   lg = "",
//   xl = "",
//   xxl = "",
//   padding = { top: "", left: "sm", right: "sm", bottom: "sm" },
//   margin = { top: "", left: "", right: "", bottom: "" },
//   ...rest
// }: IPropsColumn) => {
//   const classNames = MergePropsAsClassNames([
//     [
//       "",
//       xs ? "col-xs-" + xs : "",
//       sm ? "col-sm-" + sm : "",
//       md ? "col-md-" + md : "",
//       lg ? "col-lg-" + lg : "",
//       xl ? "col-xl-" + xl : "",
//       xxl ? "col-xxl-" + xxl : "",
//       padding.top ? "pt-" + padding.top : "",
//       padding.right ? "pr-" + padding.right : "",
//       padding.bottom ? "pb-" + padding.bottom : "",
//       padding.left ? "pl-" + padding.left : "",
//       margin.top ? "mt-" + margin.top : "",
//       margin.right ? "mr-" + margin.right : "",
//       margin.bottom ? "mb-" + margin.bottom : "",
//       margin.left ? "ml-" + margin.left : "",
//     ],
//     [rest.className ? rest.className : ""],
//   ]);
//   return (
//     <StyledColumn
//       {...rest}
//       className={classNames}
//       $padding={padding}
//       $margin={margin}
//     ></StyledColumn>
//   );
// };

// export default Column;
