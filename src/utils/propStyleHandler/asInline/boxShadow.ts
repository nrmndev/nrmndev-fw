type BoxShadowOptions = Record<1 | 2 | 3, string>;
export const boxShadow = <T extends keyof BoxShadowOptions>(boxShadow: T) => {
  if (!boxShadow) return;
  const boxShadowOptions: BoxShadowOptions = {
    1: "var(--box-shadow-1)",
    2: "var(--box-shadow-2)",
    3: "var(--box-shadow-3)",
  };
  return boxShadowOptions[boxShadow];
};
