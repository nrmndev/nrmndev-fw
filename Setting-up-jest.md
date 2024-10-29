# SETTING UP JEST & REACT-TESTING-LIBRARY FOR TESTING

## Installation

Note: Plugins below are specific to Jest's dependency in order to work.
| Plugin | Dependency | Description |
| ------ | ---------- | ----------- |
| jest | Jest | The JavaScript testing framework used for unit tests.
| @babel/core | Jest compiler | he core Babel compiler used for transforming code.
| @babel/preset-env | Babel preset | Allows you to use the latest JavaScript features by transpiling them to a compatible version.
| @babel/preset-react| Babel preset | Enables the transformation of JSX and other React-related syntax.
| @babel/preset-typescript | Babel preset | Transpiles TypeScript code into JavaScript.
| ts-jest | Jest transformer | A TypeScript preprocessor for Jest that allows you to test TypeScript code.
| jest-environment-jsdom | Jest environment | Provides a DOM-like environment for testing React components.
| @testing-library/react | Testing library | A set of utilities for testing React components by simulating user interactions.
| @types/jest | TypeScript types | Type definitions for Jest, allowing TypeScript to understand Jest's APIs.
| @testing-library/jest-dom | Custom matchers | Provides additional matchers for assertions in Jest, making it easier to test DOM nodes.

## Jest.config.cjs Configuration

<!-- prettier-ignore -->
| Key | Value | Description |
| --- | ----- | ------------|
| `preset` | `"ts-jest"` | Uses `ts-jest` to enable TypeScript support in tests. |
| `testEnvironment` | `"jsdom"` | Sets the test environment to `jsdom`, suitable for testing React components. |
| `moduleNameMapper` |`{^@uiComponents: "<rootDir>/src/components/index", ...}` |Maps module aliases to their respective paths for easier imports in tests. |
| `transform` | `{"^.+\\.(js|jsx|ts| tsx)$": "babel-jest"}` | Uses Babel to transform JavaScript and TypeScript files for testing. |
| `setupFilesAfterEnv`  | `["@testing-library/jest-dom"]` | Specifies additional matchers from `@testing-library/jest-dom` for better assertions in tests. |
| `collectCoverage` | `true` | Enables coverage collection during tests. |
| `collectCoverageFrom` | `["src/**/*.{js,jsx,ts,tsx}", ...]` | Specifies which files to collect coverage from, excluding certain files and directories. |
| `testEnvironment` | `"jsdom"` | Sets the test environment to `jsdom`, required for testing React components (duplicate entry). |
| `\\.(css|less| scss)$`| `"identity-obj-proxy"` | Mocks CSS imports to prevent errors during testing. |
| `\\.(jpg|jpeg|png|gif|svg)$`| `"<rootDir>/__mocks__/fileMock.js"` | Mocks image imports to prevent errors during testing. |
