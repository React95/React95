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

### File structure

You need to follow a simple structure pattern:

- Every new component need to have it's specific folder, this folder need to be
  named as the component name;
- The component folder need the component file itself and its tests;
- Make sure to import/export your component in the `components/index.ts`;
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

## Reporting Issues

If you encounter a bug or issue while using the project, please report it by creating a new issue on our GitHub page. When creating the issue, please include the following information:

- A clear and concise description of the issue
- Steps to reproduce the issue
- Any relevant error messages or logs
- Your operating system and version

## Requesting New Features

If you have an idea for a new feature or enhancement, please propose it by creating a new issue on our GitHub page. When proposing a new feature, please include the following information:

- A clear and concise description of the feature
- Use cases or scenarios where the feature would be useful
- Any relevant design or implementation details

The project maintainers will review and prioritize feature requests based on their feasibility, impact, and alignment with the project's goals.
