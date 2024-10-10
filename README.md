# nrmndev-fw

A lightweight, customizable React component library for building responsive web applications with ease. Designed for simplicity, flexibility, and scalability.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)
- [API Documentation](#api-documentation)

## Installation

You can install the framework using npm or yarn:

````bash
npm install nrmndev-fw
# or
yarn add nrmndev-fw

### 5. **Getting Started**
Include a simple example that helps users understand how to quickly set up and use your framework.

Example:
```md
## Getting Started
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

### 6. **Usage**

Provide more detailed examples, explaining various use cases of your components and framework. Show how different components or features can be utilized.

Example:

````md
## Usage

### Buttons

Use buttons to trigger actions. Available variants: `primary`, `secondary`, `outlined`.

```jsx
 <Button onClick={()=>} size="md" margin={"sm"} fontSize={{ value: 100 }} variant="outline-primary">Outlined Primary Button</Button>
<Button variant="solid-secondary" size="lg">Solid Large Button</Button>
```
````

### Custom Theming

You can easily customize theme, just override root variables

````jsx
import { ThemeProvider } from 'myreactframework';

const customTheme = {
  primaryColor: '#3498db',
  secondaryColor: '#2ecc71',
};

const App = () => (
  <CssVariableProvider value={{ "--color-primary": "#4CB944" }}>
    {/** All component using "primary" will become #4CB944**/}
  </CssVariableProvider>
);
```
````

### 7. **Features**

Component modularity, theming support, scalable typed props.

Example:

```md
## Features

- 🛠 **Customizable**: Easily theme and modify components to fit your project’s design.
- ⚡️ **Performant**: Optimized for high performance and lightweight applications.
- 🧩 **Modular**: Import only the components you need to reduce bundle size.

## API Documentation

See the storybook link: **\_** for complete component documentation
```
