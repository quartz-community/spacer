import { jsx } from 'preact/jsx-runtime';

// src/components/Spacer.tsx
var spacerCss = `.spacer {
  flex: 2 1 auto;
}`;
var Spacer = () => {
  const Component = (_props) => {
    return /* @__PURE__ */ jsx("div", { class: "spacer" });
  };
  Component.css = spacerCss;
  return Component;
};
var Spacer_default = Spacer;

export { Spacer_default as Spacer };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map