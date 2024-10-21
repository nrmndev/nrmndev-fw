# nrmndev-fw

A utility-first CSS and CSS-in-JS framework with type safety and memoized centralized logic

## MAJOR VERSION RELEASE (breaking changes) see changelog [v2.0] - 2024-21-10

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

````bash
npm install nrmndev-fw
# or
yarn add nrmndev-fw

## Getting Started
Include a simple example that helps users understand how to quickly set up and use your framework.

Example:
```md
Here's a quick example to get you started:

```jsx
import React from 'react';
import { Typography } from 'nrmndev-fw';

const App = () => (
  <div>
    <Typography as="h2" color="primary">Hello world!</Typography>
  </div>
);

export default App;
````

## Usage

This framework is designed for **personal use** and is not intended for production environments or widespread distribution. Please use it for personal projects or development purposes.

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
