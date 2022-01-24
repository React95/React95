![React95 components simple example](https://raw.githubusercontent.com/React95/React95/master/assets/components.png)

# @react95/core

React95 is a component library inspired on the **Windows 95** UI design.

## Installation

React95 will be available via either npm and yarn.

```shell
npm install @react95/core
# or
yarn add @react95/core
```

You'll also need to add the [`@react95/icons/icons.css`](../icons) file

## Usage

After installation, you can use any React95 component in your React application:

```js
import { Button, ThemeProvider } from '@react95/core';
import '@react95/icons/icons.css';

const MyApp = () => (
  <ThemeProvider>
    <Button>Click me!</Button>
  </ThemeProvider>
);
```

## Typescript

React95 has built-in TS support!

make sure to install the types properly for `styled-components` and `xstyled`

```shell
npm install @types/styled-components @types/xstyled__styled-components
# or
yarn add @types/styled-components @types/xstyled__styled-components
```

You can find a list of all available components at our [Storybook](https://react95.github.io/React95/)

### Next.JS

If you want to use React95 on a NextJS project, you will need to do the follow
steps:

- Add `next-transpile-modules` and `next-fonts` dependencies:

```
  npm install --save-dev next-transpile-modules next-fonts
  // or
  yarn add next-transpile-modules next-fonts
```

- Edit your `next.config.js` file to something like:

```javascript
const withFonts = require('next-fonts');
const withTM = require('next-transpile-modules')([
  '@react95/core',
  '@react95/icons',
]);

module.exports = withTM(withFonts());
```
