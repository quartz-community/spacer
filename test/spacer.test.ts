import { describe, it, expect } from "vitest";

describe("Spacer", () => {
  it("exports a component constructor", async () => {
    const mod = await import("../src/components/Spacer");
    expect(mod.default).toBeDefined();
    expect(typeof mod.default).toBe("function");
  });

  it("returns a component with CSS", async () => {
    const mod = await import("../src/components/Spacer");
    const component = mod.default();
    expect(component).toBeDefined();
    expect(typeof component).toBe("function");
    expect(component.css).toContain(".spacer");
    expect(component.css).toContain("flex");
  });
});

describe("Spacer, rendered", () => {
  it("renders an empty flex-growing .spacer div that pushes later items to the end", async () => {
    const mod = await import("../src/components/Spacer");
    const vnode = mod.default()({} as never) as unknown as {
      type: string;
      props: { class: string; children?: unknown };
    };
    expect(vnode.type).toBe("div");
    expect(vnode.props.class).toBe("spacer");
    expect(vnode.props.children).toBeUndefined();
    expect(mod.default().css).toMatch(/\.spacer \{\s*flex: 2 1 auto;\s*\}/);
  });
});
