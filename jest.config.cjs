module.exports = {
  preset: "ts-jest", // Ensure you're using ts-jest for TypeScript support
  testEnvironment: "jsdom", // Set the test environment to jsdom
  //Type Aliases support and Mocking imports
  moduleNameMapper: {
    "^@uiComponents": "<rootDir>/src/components/index.ts", // Adjust this based on your alias configuration
    "^@uiComponentTypes": "<rootDir>/src/components/index.types.ts", // Adjust this based on your alias configuration
    "^@uiTypes": "<rootDir>/src/types/index", // Adjust this based on your alias configuration
    "^@utils": "<rootDir>/src/utils/index", // Adjust this based on your alias configuration
    "^@root/(.*)$": "<rootDir>", // Adjust this based on your alias configuration
    "\\.(css|less|scss)$": "identity-obj-proxy", //mock CSS imports
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Use Babel for JavaScript and TypeScript files
  },

  testEnvironment: "jsdom", // Required for testing React components
  setupFilesAfterEnv: ["@testing-library/jest-dom"], // Optional: for additional matchers
  //Coverage
  collectCoverage: true,

  /**
   * Global Testing config - START
   */
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/index.ts", // Exclude the main entry point if necessary
    "!src/**/index.ts", // Exclude barrel files except where testing is defined
    "!src/**/*/*.test.{js,jsx,ts,tsx}", // Exclude test files
    "!src/routing/**", // Exclude Component sampling files
    "!src/stories/**", // Exclude Storybook files
    "!src/types/**", // Exclude types files
    "!src/App.tsx", // Exclude App.tsx
    "!src/main.tsx", // Exclude main.tsx
    "!src/utils/storybook/**", //Exclude storybook will be moved to a separate source code
  ],
  modulePathIgnorePatterns: ["\\.types\\.ts$"], // Add this to skip .types.ts files
  // Global Testing config - END

  /***
   * FOR TEST ISOLATION, Ignore others that is not indicated below
   */
  // testMatch: ["**/src/tests/propStyleHandler/padding.test.ts"],
  // collectCoverageFrom: ["src/utils/propStyleHandler/padding.ts"],
};
