const childrenAsPropModifier = () => {
  return {
    name: "children",
    control: { disable: true },
    description: "The content of the component.",
    table: {
      type: { summary: `node` },
    },
  };
};
export default childrenAsPropModifier;
