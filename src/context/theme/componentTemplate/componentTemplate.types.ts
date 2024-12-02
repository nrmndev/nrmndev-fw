import {
  ButtonComponentProps,
  CardComponentProps,
  ColumnComponentProps,
  ContainerComponentProps,
  DecoratedLabelComponentProps,
  IconComponentProps,
  ImageComponentProps,
  ListComponentProps,
  MediaComponentProps,
  ProgressBarComponentProps,
  RowComponentProps,
  TypographyComponentProps,
} from "components/component.barrel.types";

export type ComponentTemplateTypes = {
  button?: ButtonComponentProps[];
  card?: CardComponentProps[];
  column?: ColumnComponentProps[];
  container?: ContainerComponentProps[];
  decoratedLabel?: DecoratedLabelComponentProps[];
  icon?: IconComponentProps[];
  image?: ImageComponentProps[];
  list?: ListComponentProps[];
  media?: MediaComponentProps[];
  progressBar?: ProgressBarComponentProps[];
  row?: RowComponentProps[];
  typography?: TypographyComponentProps[];
};
