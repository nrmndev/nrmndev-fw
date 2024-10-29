import { PropStyleHandlerProps } from "@uiTypes";
import React from "react";

export type ExtendUtilityPropsType<C, U> = C extends React.ComponentType<
  infer P
>
  ? React.ComponentType<P & U>
  : never;

/**
 * A higher-order component (HOC) utility that extends an existing component with additional
 * utility props, defined in `PropStyleHandlerProps`. It enhances the component with extra
 * styling or layout properties while maintaining `ref` forwarding.
 *
 * @template C - The component type to be extended. Constrained to `React.ComponentType<any>`.
 * @template U - The subset of additional utility props from `PropStyleHandlerProps` to include.
 *
 * @param {C} Component - The component to extend with utility props.
 *
 * @returns {React.ForwardRefExoticComponent<React.PropsWithoutRef<JSX.LibraryManagedAttributes<C, React.ComponentProps<C>> & Partial<U>> & React.RefAttributes<React.ElementRef<C>>>}
 *   Returns a new component that accepts:
 *   - All original props of `Component`
 *   - Optional utility props specified in `U`
 *   - A forwarded `ref` to the underlying component instance
 *
 * @example
 * // Define utility props interface
 * interface PropStyleHandlerProps {
 *   color?: string;
 *   margin?: string;
 *   padding?: string;
 * }
 *
 * // Define a sample component with its own props
 * const Button = ({ label, color }: { label: string; color?: string }) => (
 *   <button style={{ color }}>{label}</button>
 * );
 *
 * // Use ExtendUtilityProps to add utility props to Button
 * const EnhancedButton = ExtendUtilityProps<typeof Button, Pick<PropStyleHandlerProps, 'margin' | 'padding'>>(Button);
 *
 * // Usage example with the enhanced component
 * <EnhancedButton label="Click Me" margin="10px" padding="5px" />;
 */
export const ExtendUtilityProps = <
  C extends React.ComponentType<any>,
  U extends Partial<PropStyleHandlerProps>
>(
  Component: C
) => {
  return React.forwardRef(
    (
      props: JSX.LibraryManagedAttributes<C, React.ComponentProps<C>> &
        Partial<U>,
      ref?: React.Ref<React.ElementRef<C>>
    ) => <Component {...props} ref={ref} />
  );
};

// WORKING VERSION 1
// function ExtendUtilityProps<
//   C extends React.ComponentType<any>,
//   U extends Partial<PropStyleHandlerProps>
// >(Component: C) {
//   return React.forwardRef(
//     (
//       props: JSX.LibraryManagedAttributes<C, React.ComponentProps<C>> &
//         Partial<U>,
//       ref?: React.Ref<React.ElementRef<C>>
//     ) => <Component {...props} ref={ref} />
//   );
// }
// const EnhancedContainer = ExtendUtilityProps<
//   typeof Container,
//   PickUtilityProps<"color" | "width" | "boxShadow">
// >(Container);

// WORKING VERSION 2
// function ExtendUtilityProps<
//   C extends React.ComponentType<any>,
//   U extends (keyof PropStyleHandlerProps)[]
// >(Component: C) {
//   return React.forwardRef(
//     (
//       props: JSX.LibraryManagedAttributes<C, React.ComponentProps<C>> &
//         PickUtilityProps<U[number]>,
//       ref?: React.Ref<React.ElementRef<C>>
//     ) => <Component {...props} ref={ref} />
//   );
// }

// const EnhancedContainer = ExtendUtilityProps<
//   typeof Container,
//   ["columnItems"]
// >(Container);
