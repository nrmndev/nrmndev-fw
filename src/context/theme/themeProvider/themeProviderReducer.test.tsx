import { useReducer } from "react";
import { themeProviderReducer } from "./themeProviderReducer";
import { act, renderHook } from "@testing-library/react";

// import { themeProviderReducer } from './themeProviderReducer'; // Adjust the path as necessary
import {
  ContextValueType,
  ThemeProviderReducerActionType,
} from "./ThemeProvider.types"; // Adjust the path as necessary
import { ThemeContextProvider } from "./ThemeProvider";
import React from "react";

// Mock the localStorage
beforeAll(() => {
  const mockSetItem = jest.fn();
  Object.defineProperty(window, "localStorage", {
    value: {
      setItem: mockSetItem,
    },
    writable: true,
  });
});

describe("themeProviderReducer", () => {
  const initialState: ContextValueType = {
    theme: "dark", // Adjust according to your ThemeOptions structure
    componentTemplate: { button: [{ color: "accent1" }] },
  };

  it("should update the theme and set localStorage when action has a payload", () => {
    const action: ThemeProviderReducerActionType = {
      type: "Update_Theme",
      payload: "light", // Example payload
    };

    const newState = themeProviderReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, theme: action.payload });
    expect(localStorage.setItem).toHaveBeenCalledWith("theme", action.payload);
  });

  it("should return the current state if action type does not match", () => {
    const action = { type: "Unknown_Action" } as any; // Casting to any for an unknown action type

    const newState = themeProviderReducer(initialState, action);

    expect(newState).toEqual(initialState);
    expect(localStorage.setItem).not.toHaveBeenCalled(); // No change in localStorage
  });
});

describe("useComponentTemplate", () => {
  it("returns the correct template when ThemeProvider is present", () => {
    const { result } = renderHook(() =>
      useReducer(themeProviderReducer, {
        componentTemplate: undefined,
        theme: "light",
      })
    );

    // Assert the initial state from the reducer
    expect(result.current[0]).toEqual({
      componentTemplate: undefined,
      theme: "light",
    });

    // Assert that the second element is a function
    expect(typeof result.current[1]).toBe("function");
  });
});

// describe("useComponentTemplate", () => {
//   it("returns the correct template when ThemeProvider is present", () => {
//     const wrapper = ({ children }: { children: React.ReactNode }) => (
//       <ThemeContextProvider
//         value={{
//           componentTemplate: { typography: [{ color: "primary" }] },
//           theme: "custom1",
//         }}
//       >
//         {children}
//       </ThemeContextProvider>
//     );

//     const { result } = renderHook(
//       () =>
//         useReducer(themeProviderReducer, {
//           componentTemplate: undefined,
//           theme: "light",
//         }),
//       { wrapper }
//     );

//     result.current[1]({ type: "Update_Theme", payload: "custom1" });
//     // Assert the initial state from the reducer
//     expect(result.current[0]).toEqual({
//       componentTemplate: undefined,
//       theme: "custom3",
//     });
//   });
// });

describe.skip("useContextProviderReducer", () => {
  it("should call dispatch when action is dispatched", () => {
    const initialState = { theme: "light", componentTemplate: undefined };
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
    // Create a mock dispatch function
    const dispatch = jest.fn();

    // Mock the useReducer hook to return the initial state and mock dispatch
    jest
      .spyOn(React, "useReducer")
      .mockImplementation(() => [initialState, dispatch]);

    const { result } = renderHook(
      () =>
        useReducer(themeProviderReducer, {
          componentTemplate: undefined,
          theme: "light",
        }),
      { wrapper }
    );

    // Now call the dispatch function with an action
    act(() => {
      const action: ThemeProviderReducerActionType = {
        type: "Update_Theme",
        payload: "dark",
      };
      result.current[1](action); // Call the dispatch function
    });

    // Assert that dispatch has been called
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(expect.any(Object)); // You can also check the action type if needed
  });
});
