## Changelog

### [v1.1.1-beta.5] - 2024-15-10

- **CARD COMPONENT**
  - Added `{background}` props
- **CSS STYLES**
  - Added root gradient variables
- **PropStyleHandler**
  - Fixed `{margin}` handle

### [v1.1.1-beta.4] - 2024-14-10

- **FONT SYSTEM**
  - Heading Default Font: changed from _Anton_ to MontserratBold
  - Body Default Font: changed _OpenSans_ to Metrophobic
- **TYPOGRAPHY COMPONENT**
  - Added `{color: 'gradient'}` to be rendered as bg-clip
  - Added `{margin}` prop
  - Added `{fontSize}` prop
- **CARD COMPONENT**
  - Added `{boxShadow}` prop
- **CARDMEDIA COMPONENT (NEW)**
  - Accepts `{image}` `{title}` `{height}` as props
  - Renders `<div>` with styled background
- **CARD CONTENT (NEW)**
  - Container for the card content, bare minimal style, accepts `{padding}` prop
- **UTILITY**
  - (File structure) Combined type options into a single type file
- **PropStyleHandler**
  - Added BoxShadow classes.
  - _(Typography Component)_ Added `{color:gradient}` and apply as "bg-clip" classes
- **ArgTypeGenerator**
  - Moved to **@utils**
  - Refactor code, modular approach
- **CSS STYLES**
  - Restructured CSS Root Variables

### [v1.1.0] - 2024-10-10

- **DOCUMENTATION**: added component documentation, see here [https://nrmndev-fw.ngsilvestre.com/](https://nrmndev-fw.ngsilvestre.com/)

### [v1.0.14] - 2024-10-10

- **UTILS**: added exports section in package.json

### [v1.0.13] - 2024-10-10

- **ROW**: added new component row, capabile in handling flex columns (see documentation)
- **SCSS**: restructure stylesheet, font moved to root @import, to support default font
- **SECTION LABEL**: restructure section label
- **STORYBOOK UTILITY FUCNTIONS**: for future storybook documentation

#### FIXED:

- **SECTION LABEL**: Added `{color}` prop support for the label.
- **PROGRESS BAR**: Added style `margin-bottom: 10px;`.
- **MEDIA**: Removed `{label}` prop; use `{children}` for content to align with `TypographyProps`.

### [v1.0.10] - 2024-10-10

#### FIXED:

- **SECTION LABEL**: Added `{color}` prop support for the label.
- **PROGRESS BAR**: Added style `margin-bottom: 10px;`.
- **MEDIA**: Removed `{label}` prop; use `{children}` for content to align with `TypographyProps`.

#### ADDED:

- **PROGRESS BAR**: Introduced `{variant}` prop for "solid" or "striped" bars.
- **MEDIA**:
  - Added global `{color}` support to modify colors for all components (icon, heading, body).
  - Use `{icon: {color}}` for granular control over color.
  - Added `{borderRadius}` and `{background}` props.
- **README.md**: Updated content for clarity and completeness.

## Upcoming Release

### [v1.1.0] - TBA

#### PLANNED FEATURES:

- **FULL COVERAGE TESTING** : Implement comprehensive unit and integration tests for all components to ensure reliability and catch bugs early, enhancing user confidence in the framework.
- **SEPARATE REPO FOR STORYBOOK DOCUMENTATION**: Create a dedicated GitHub repository for Storybook documentation, centralizing visual component examples and usage guidelines to improve accessibility and collaboration.
- **RESPONSIVE DESIGN IMPROVEMENTS**: Enhance the responsiveness of components to ensure seamless adaptation across various devices and screen sizes, improving user experience on mobile and desktop.
