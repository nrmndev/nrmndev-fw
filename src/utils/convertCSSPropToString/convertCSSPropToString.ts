export const convertCSSPropToString = (cssProp?: React.CSSProperties) => {
  if (!cssProp) return;
  return Object.entries(cssProp)
    .map(([key, value]) => {
      const cssKey = key.replace(
        /[A-Z]/g,
        (match) => `-${match.toLowerCase()}`
      ); // Convert camelCase to kebab-case
      return `${cssKey}: ${value};`;
    })
    .join(" ");
};
