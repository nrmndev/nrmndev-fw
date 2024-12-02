export type TransitionOptions = {
  timing?:
    | "ease"
    | "ease-in"
    | "ease-out"
    | "ease-in-out"
    | "linear"
    | "cubic-bezier(.57,.21,.69,1.25)"
    | "cubic-bezier(.22,.68,0,1.71)"
    | "cubic-bezier(.57,.21,.69,3.25)"
    | "cubic-bezier(.25,.75,.5,1.25)"
    | "cubic-bezier(.51,.92,.24,1.15)";
  duration?: number;
  delay?: number;
};

export type TransitionProps = {
  transition?: TransitionOptions;
};
