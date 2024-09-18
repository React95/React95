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

### About `Modal`

The `Modal` component is managed with `ModalContext`.
To ensure they are managed correctly, surround one or a group of Modals with a `<ModalProvider>`. Example:

```js
import { ModalProvider, Modal } from '@react95/core';

export const ModalExample = () => {
  return (
    <>
      <ModalProvider>
        <Modal title="Modal 1" />
        <Modal title="Modal 2" />
        ...
      </ModalProvider>
    </>
  );
};
```

### Next.JS

If you want to use React95 on a NextJS project, check the [NextJS template](https://github.com/React95/nextjs-template)
