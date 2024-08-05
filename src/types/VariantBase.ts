import { ColorBaseProps } from "./ColorBase";

type Variant =
  | "primary-outline"
  | "secondary-outline"
  | "primary-alt"
  | "secondary-alt";

interface VariantBaseProps {
  variant?: ColorBaseProps | Variant;
}

export default VariantBaseProps;
