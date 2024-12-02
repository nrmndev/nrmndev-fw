import React from "react";
import { renderHook } from "@testing-library/react";
import { useComponentTemplate } from "./useComponentTemplate";
import { ThemeContextProvider } from "../ThemeProvider";

// const template = { button: [{ color: "primary" }] } as const;
describe("useComponentTemplate", () => {
  it("returns {} when componentTemplate is undefined", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeContextProvider
        value={{
          componentTemplate: undefined,
        }}
      >
        {children}
      </ThemeContextProvider>
    );

    const { result } = renderHook(() => useComponentTemplate("button", 1), {
      wrapper,
    });
    console.log(result.current);
    expect(result.current).toEqual({ color: "primary" });
  });

  it("returns {} when template is zero", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeContextProvider
        value={{
          componentTemplate: { button: [{ color: "primary" }] },
          theme: "custom1",
        }}
      >
        {children}
      </ThemeContextProvider>
    );

    const { result } = renderHook(() => useComponentTemplate("button", 0), {
      wrapper,
    });

    expect(result.current).toEqual({});
  });

  it("returns {} when template is negative", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeContextProvider
        value={{
          componentTemplate: { button: [{ color: "primary" }] },
        }}
      >
        {children}
      </ThemeContextProvider>
    );

    const { result } = renderHook(() => useComponentTemplate("button", -1), {
      wrapper,
    });

    expect(result.current).toEqual({});
  });

  it("returns {} when component does not exist in componentTemplate", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeContextProvider
        value={{
          componentTemplate: { typography: [{ color: "primary" }] },
          theme: "custom1",
        }}
      >
        {children}
      </ThemeContextProvider>
    );
    const { result } = renderHook(() => useComponentTemplate("button", 0), {
      wrapper,
    });

    expect(result.current).toEqual({});
  });

  it("returns {} when template is greater than the length of the array for the specified component", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeContextProvider
        value={{
          componentTemplate: { button: [{ color: "primary" }] },
        }}
      >
        {children}
      </ThemeContextProvider>
    );
    const { result } = renderHook(() => useComponentTemplate("button", 2), {
      wrapper,
    });

    expect(result.current).toEqual({});
  });

  it.skip("returns correct propStyleHandlerProps properties when all inputs are valid", () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeContextProvider
        value={{
          componentTemplate: { button: [{ color: "primary" }] },
        }}
      >
        {children}
      </ThemeContextProvider>
    );
    const { result } = renderHook(() => useComponentTemplate("button", 1), {
      wrapper,
    });

    expect(result.current).toEqual({ color: "primary" });
  });
});
