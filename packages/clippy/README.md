<p align="center">
  <img width="145" height="141" src="Clippy.gif" alt="Clippy agent">
</p>

# @react95/useClipy

Using Clippy and its friends in your React Application it has never been easier!

## Instalation

```
yarn add @react95/clippy
```

## Usage

```jsx
import { useClippy, ClippyProvider, AGENTS } from '@react95/clippy';

const MyComponent = () => {
  const { clippy } = useClippy();

  return <Button onClick={() => clippy.play('Wave')}>Hello Clippy!</Button>;
};

const App = () => (
  <ClippyProvider>
    <MyComponent />
  </ClippyProvider>
);
```

### Changing the Agent

```jsx
import { AGENTS } from '@react95/clippy';

const App = () => (
  <ClippyProvider agentName={AGENTS.MERLIN}>
    <MyComponent />
  </ClippyProvider>
);
```

## API and Special thanks

This package only exposes the brilliant job done in
[clippyjs](https://github.com/pi0/clippyjs) project, which you can find all details you'll need.
