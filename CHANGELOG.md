## Changelog

### [v2.0] - 2024-21-10

### MAJOR VERSION RELEASED

- **UTILITIES**
- **propStyleHandler**
  - Now returns {classes: string, inline: React.CSSProperties} based on the props passed
  - Passed the logic implementation to getStyle.\*
  - `getStyle()` handles all props implementation, with separate handle per prop
  - `{classes}` returns a string literal of pre-defined modifer classNames
  - `{inline}` returns a list of CSSProperties
  - **Memoized** for optimized calculation
  - Merged `asClassName` & `asInline` utility into one. (ie asClassName/padding.ts, asInline/padding.ts to padding.ts)
- **Props**
  - `{padding}` now accepts `SizeOptions` | `PaddingAxisOptions` | `PaddingEdgeOptions` | `PaddingValueUnitOptions`.
  - `{margin}` now accepts `SizeOptions` | `MarginAxisOptions` | `MarginEdgeOptions` | `MarginValueUnitOptions`. (Renamed `MarginDiscriminatedProps` to `MarginProps`).
  - `{border}` now accepts `BorderEdgeOptions` | `BorderOptions`.
  - `{width}` , `{height}` , `{position}`, `{display}` props added.
- **UPCOMING UPDATE** see details below [Upcoming Release](upcoming-release):

### [v1.2.0] - 2024-16-10

### MINOR VERSION RELEASED

#### CSS

- Added negative margin support "m-negative-xs"
- Added root var `--margin-{size}`, `--padding-{size}` for granular control
- Restructured modifiers and created separate files per each

#### COMPONENTS

- **IMAGE (NEW)**
  - Accepts `{src}` (**required**), `{border}`, `{borderRadius}`, `{display}`;
- **CONTAINER**
  - Added `{background: {{image}}}` support
  - Added discriminating union `{MarginAxisProps}` | `{MarginShorthandProps}` | `{MarginEdgeProps}`
- **ROW**
  - Added `flex={{justifyContent, alignItems, flexDirection, flexWrap, alignContent }}` for granular child element control
- **UTILITYSTYLEDCOMPONENT (NEW)**
  - Effortlessly manages all Utility Props and injects the necessary classNames into the element, allowing you to focus solely on the logic implementation. See doc for more information (link to follow).

#### UTILITY

- **propStyleHandler**
  - Added `{textAlign}`, `{textTransform}`, `{display}`

### [v1.1.2-beta.7] - 2024-15-10

- **ROW/COLUMN** : Fix flex classnames

### [v1.1.2-beta.6] - 2024-15-10

- **SECTION LABEL**
  - Added `{fontSize}` prop for text Sizing
- **COLUMN COMPONENT (NEW)** : Granular control over child elements
  - With Utility Layout props
  - Added `{flex}` Props: controls child alignment
  - Responsive `{xs, sm, md, lg, xl, xxl}` column props

### [v1.1.2-beta.5] - 2024-15-10

- **CARD COMPONENT**
  - Added `{background}` props
- **CSS STYLES**
  - Added root gradient variables
- **PropStyleHandler**
  - Fixed `{margin}` handle

### [v1.1.2-beta.4] - 2024-14-10

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

---

---

## Upcoming Release [v2.1.0]

- **ALL COMPONENT** propStyleHandler re-integration and optimization

---

---

## PLANNED FEATURES:

- **FULL COVERAGE TESTING** : Implement comprehensive unit and integration tests for all components to ensure reliability and catch bugs early, enhancing user confidence in the framework.
- **SEPARATE REPO FOR STORYBOOK DOCUMENTATION**: Create a dedicated GitHub repository for Storybook documentation, centralizing visual component examples and usage guidelines to improve accessibility and collaboration.
- **RESPONSIVE DESIGN IMPROVEMENTS**: Enhance the responsiveness of components to ensure seamless adaptation across various devices and screen sizes, improving user experience on mobile and desktop.
