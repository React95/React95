# Contributing

You want to contribute to the project? Awesome!

## Things to know

Please see our [Code of Conduct](CODE_OF_CONDUCT.md) for details on reporting unacceptable behavior.

## Project Setup

We're really happy you want to contribute to the project! The following steps will get you up and running:

1. Fork and clone the repo;
2. Install the required dependencies

   ```sh
   $ yarn
   ```

3. Work from within the `packages/core` directory.

   ```sh
   $ cd packages/core
   ```

4. Start up the dev server:

   ```sh
   $ yarn run storybook
   ```

Access http://localhost:6006 to see the storybook running

### Directories

```
.
├── .storybook: Storybook configuration files
├── docs: Storybook build files
├── components: Component files
│   ├── index.js: Export all components
│   ├── Component: Component folder
│   │    ├── Component.jsx: Component itself
│   │    └── index.js: Component export file
│   └── shared: common files that are used across components
│       └── assets: assets files
└── stories: Component stories folder
    └── *.stories.js: Component story file
```

You need to follow a simple structure pattern:

- Every new component need to have it's specific folder, this folder need to be named as the component name;
- The component folder need the component file itself and an `index.js` file that export that component;
- You need to import and export that component on `index.js` that are on components folder;
- Every new component need to have its own story file;
- When you finish your work, you'll need to commit with messages following [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) pattern. The easiest way to do this is running

  ```sh
  $ yarn run commit
  ```
  
  from within the root of this repository;

Open your PR!
