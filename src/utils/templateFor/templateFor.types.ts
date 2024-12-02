import { TypographyTemplate } from "./typograhy.types";
import { ContainerTemplate } from "./container.types";
import { DecoratedLabelTemplate } from "./decoratedLabel.types";
import { MediaTemplate } from "./media.types";
import { IconTemplate } from "./icon.types";

type Templates = {
  typography?: TypographyTemplate;
  container?: ContainerTemplate;
  decoratedLabel?: DecoratedLabelTemplate;
  media?: MediaTemplate;
  icon?: IconTemplate;
};

export type TemplateFor<T extends keyof Templates> =
  Templates[T] extends undefined ? never : Partial<Templates[T]>;

// export type TemplateFor<T extends keyof Templates> =
// Templates[T] extends { [K in T]: infer U } ? Partial<U> : never;
