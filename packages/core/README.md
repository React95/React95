![React95 components simple example](https://raw.githubusercontent.com/React95/React95/master/assets/components.png)

# @react95/core

React95 is a component library inspired on the **Windows 95** UI design.

## Installation

React95 will be available via either npm and yarn.

```shell
npm install @react95/core
# or
yarn add @react95/core
# or
pnpm add @react95/core
```

## Usage

The easiest way to check how the React95 components work altogether is by
checking [the StackBlitz starter](https://stackblitz.com/edit/react95-vite-starter).

For a better look and usage of React95, we strongly recommend you choose and
import a theme in your app. Optionally, you can add the GlobalStyle to style
fonts, scrollbars, and links.

```js
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
```

After setting, you can use any React95 component in your React application:

```js
import { Button } from '@react95/core';

export const MyApp = () => {
  return <Button>Click me!</Button>;
};
```

You can find a list of all available components on our [Storybook page](https://react95.github.io/React95/).

### Customizing styles

React95's CSS sits in the `react95` [cascade layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer),
so your CSS wins over it without fighting specificity:

```css
/* every button gets your font, React95's or not */
button {
  font-family: 'Comic Sans MS';
}
```

That includes CSS resets, like Tailwind's preflight or normalize.css: their
`button { padding: 0 }` would undo React95's buttons. Put the reset in a layer
that comes before React95's:

```css
@layer reset {
  /* your reset */
}
```

and declare the order of the layers before any CSS loads, in your HTML's
`<head>`, since the browser keeps the first order it sees:

```html
<style>
  @layer reset, react95;
</style>
```

With Tailwind v4, whose CSS is in layers already, place `react95` between its
preflight and its utilities:

```html
<style>
  @layer theme, base, react95, components, utilities;
</style>
```

### Next.JS

If you want to use React95 on a NextJS project, check the [NextJS template](https://github.com/React95/nextjs-template)
