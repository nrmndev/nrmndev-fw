interface BaseProps {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  title?: string;
  role?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean;
  "data-custom"?: string;
  name?: string;
  tabIndex?: number;
}

export default BaseProps;
