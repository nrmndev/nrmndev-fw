import { j as u } from "./jsx-runtime-CkxqCPlQ.js";
import { I as s } from "./ProgressBar-C0CfxPtI.js";
import { F as g } from "./index-BPw8msdC.js";
import "./index-DJO9vBfz.js";
const x = {
    colorOptions: ["primary", "secondary", "accent"],
    variantOptions: [
      "primary-outline",
      "secondary-outline",
      "primary-alt",
      "secondary-alt",
    ],
  },
  c = (r) => {
    let e = [];
    return r.map((a) => e.push(...x[a])), e;
  },
  S = (r, e) => {
    let a = [],
      t = { type: { summary: "" }, defaultValue: { summary: e ?? void 0 } };
    return (
      (a = c(r)), (t.type.summary = c(r).join(" | ")), { options: a, table: t }
    );
  },
  j = {
    title: "Example/Icon",
    component: s,
    tags: ["autodocs"],
    parameters: { options: { showPanel: !0, isToolshown: !1 } },
    argTypes: {
      variant: {
        description: "Sample",
        control: "select",
        ...S(["colorOptions", "variantOptions"], "primary"),
      },
    },
  },
  n = {
    render: (r) => u.jsx(s, { ...r }),
    args: { icon: g, variant: "primary" },
  },
  o = {
    render: (r) => u.jsx(s, { ...r }),
    args: {
      icon: g,
      variant: "secondary",
      background: "accent",
      iconSize: "xl",
    },
  };
var i, p, m;
n.parameters = {
  ...n.parameters,
  docs: {
    ...((i = n.parameters) == null ? void 0 : i.docs),
    source: {
      originalSource: `{
  render: args => <Icon {...args} />,
  args: {
    icon: FaBeer,
    variant: "primary"
  }
}`,
      ...((m = (p = n.parameters) == null ? void 0 : p.docs) == null
        ? void 0
        : m.source),
    },
  },
};
var l, y, d;
o.parameters = {
  ...o.parameters,
  docs: {
    ...((l = o.parameters) == null ? void 0 : l.docs),
    source: {
      originalSource: `{
  render: args => <Icon {...args} />,
  args: {
    icon: FaBeer,
    variant: "secondary",
    background: "accent",
    iconSize: "xl"
  }
}`,
      ...((d = (y = o.parameters) == null ? void 0 : y.docs) == null
        ? void 0
        : d.source),
    },
  },
};
const I = ["Primary", "SecondarySizeXLarge"];
export {
  n as Primary,
  o as SecondarySizeXLarge,
  I as __namedExportsOrder,
  j as default,
};
