# nrmndev-fw

A utility-first CSS and CSS-in-JS framework with type safety and memoized centralized logic

## New Major Version released (v4.0.0-beta) 2024-31-10

### **HOTFIXES**

- Added `UtilityPartialProps` and `UtilityRequireProps` which extends UtilityProps and `as` with HTMLAttributes see docs for usage
- Added forwardRef to all components

### Utility

#### `ExtendUtilityProps`

- A higher-order component (HOC) utility that extends an existing component with additional utility props, defined in PropStyleHandlerProps. It enhances the component with extra styling or layout properties while maintaining ref forwarding.

## Alpha Version released (v2.1.0)

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [API Documentation](#api-documentation)
- [Technologies Used](#technologies-used)
- [Changelog](#changelog)

## Installation

You can install the framework using npm or yarn:

```bash
npm install nrmndev-fw
# or
yarn add nrmndev-fw
```

## Getting Started

### Component usage:

```jsx
import React from "react";
import { Typography } from "nrmndev-fw";

const App = () => (
  <div>
    <Typography as="h2" color="primary">
      Hello world!
    </Typography>
  </div>
);

export default App;
```

### UtiliStyledComponent usage:

Just import the utility props you need, pass spread object to `UtilityStyledComponent` and it will handle the className logic
(if a form of predefined classNames or calculated styles passed into styled-component to render with just module classNames).
For in-depth explanation refer to the documentation:

```jsx
import { RowComponentProps } from "@uiTypes";
import { UtilityStyledComponent } from "@uiComponents";

const Row = ({ ...utilityProps }: RowComponentProps) => {
  return (
    <UtilityStyledComponent as="div" {...utilityProps} className={"row"} />
  );
};
```

```jsx
const App = () => {
  return (
    <Row id="SampleId" className="someClassName" padding={"md"} margin={{top:{value:25,unit:"px"}}} xsColumns={2} smColumns={3} mdColumns={4}  flex={{ alignItems: "stretch", justifyContent: "center" }} {/* and many more*/} />
  );
};
```

Expects:

<div className="someClassName p-sm flex-xs-2 flex-sm-2 flex-md-2 flex-direction-row">

## Usage

This framework is on a continous development and designed for **personal use**. The current release is not intended for production environments or widespread distribution. Please use it for personal projects or development purposes.

See all components and documentation here: (StoryBook under construction 🛠🛠🛠)

Example:

````md
### Buttons

```jsx
<Button onClick={()=>} size="md" margin={"sm"} fontSize={{ value: 100 }} variant="outline-primary">Outlined Primary Button</Button>
<Button variant="solid-secondary" size="lg">Solid Large Button</Button>
```
````

### Custom Theming

You can easily customize theme, just override root variables.
See full customization here: (StoryBook under construction 🛠🛠🛠)

````jsx
import { CssVariableProvider  } from 'nrmndev-fw';

const App = () => (
  <CssVariableProvider value={{ "--color-primary": "#4CB944" }}>
    {/** All component using "primary" will become #4CB944**/}
  </CssVariableProvider>
);
```
````

## Features

Component modularity, theming support, scalable typed props.

- 🛠 **Customizable**: Easily theme and modify components to fit your project’s design.
- ⚡️ **Performant**: Optimized for high performance and lightweight applications.
- 🧩 **Modular**: Import only the components you need to reduce bundle size.

## Technologies Used

This framework is built with the following technologies:

- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Sass**: A powerful CSS preprocessor that allows you to use variables, nested rules, mixins, and more.

Make sure you have these tools set up in your development environment to use this framework effectively.

## API Documentation

See full API documentation here: [https://nrmndev-fw.ngsilvestre.com/](https://nrmndev-fw.ngsilvestre.com/) **StoryBook under construction 🛠🛠🛠**

## Changelog

You can view the full changelog [here](./CHANGELOG.md).
