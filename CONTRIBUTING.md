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

3. Start up the dev server:

   ```sh
   $ yarn dev
   ```

Access http://localhost:6006 to see the storybook running

### Directories

You need to follow a simple structure pattern:

- Every new component need to have it's specific folder, this folder need to be
  named as the component name;
- The component folder need the component file itself and an `index.js` file
  that export that component;
- You need to import and export that component on `index.js` that are on
  components folder;
- Every new component need to have its own story file;
- When you finish your work, you'll need to commit with messages following
  [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) pattern.
  The easiest way to do this is running

  ```sh
  $ yarn commit
  ```

  from within the root of this repository;

Open your PR!

## Awesome Project

If you have an awesome project built with React95, you could open a pull
request changing the README.md root file, adding your project at the bottom of
the projects list, under [`Awesome projects`](README.md#awesome-project).
