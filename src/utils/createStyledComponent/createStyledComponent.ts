import styled from "styled-components";

type Styles = {
  $css?: string; // Standard styles
  $hcss?: string; // Hover styles
  $inView?: string; // Styles when in view
};

export const createStyledComponent =
  (component: keyof JSX.IntrinsicElements, namespace: string) =>
  (styles: Styles) => {
    return styled(component).withConfig({
      displayName: `Tui${namespace}`,
    })`
      /* Apply $css as standard styles */
      ${styles.$css || ""};

      /* Apply $inView as conditional styles */
      ${styles.$inView || ""};

      /* Apply $hcss as hover styles */
      &:hover {
        ${styles.$hcss || ""};
      }
    `;
  };
