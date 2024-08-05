// import { SpreadClassNameAsProps } from "@utils/SpreadClassNameAsProps";
// import { DisplayProps } from "types/GridBase";

// type IProps = React.HTMLProps<HTMLDivElement> &
//   DisplayProps & { fluid?: boolean };

// const Container = ({
//   display,
//   templateColumns = 2,
//   children,
//   gap,
//   fluid = false,
//   ...props
// }: IProps) => {
//   const classNames = SpreadClassNameAsProps([
//     [
//       "container",
//       display ? display : "",
//       templateColumns ? "grid-column-" + templateColumns : "",
//       fluid ? "fluid" : "",
//     ],
//     ["", gap ? "gap-" + gap : ""],
//   ]);
//   return (
//     <div {...classNames} {...props}>
//       {children}
//     </div>
//   );
// };

// export default Container;
