# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.0.8](https://github.com/React95/React95/compare/@react95/icons@2.0.7...@react95/icons@2.0.8) (2023-10-17)

**Note:** Version bump only for package @react95/icons





## [2.0.7](https://github.com/React95/React95/compare/@react95/icons@2.0.6...@react95/icons@2.0.7) (2023-07-04)

**Note:** Version bump only for package @react95/icons

## [2.0.6](https://github.com/React95/React95/compare/@react95/icons@2.0.5...@react95/icons@2.0.6) (2022-11-10)

**Note:** Version bump only for package @react95/icons

## [2.0.5](https://github.com/React95/React95/compare/@react95/icons@2.0.4...@react95/icons@2.0.5) (2022-04-05)

### Bug Fixes

- **icons:** add missing width and height variant properties ([6c7f9cc](https://github.com/React95/React95/commit/6c7f9cc850454de1627289c6af2a8e317c5c24db))

## [2.0.4](https://github.com/React95/React95/compare/@react95/icons@2.0.3...@react95/icons@2.0.4) (2021-06-15)

**Note:** Version bump only for package @react95/icons

## [2.0.3](https://github.com/React95/React95/compare/@react95/icons@2.0.2...@react95/icons@2.0.3) (2021-05-03)

### Bug Fixes

- **icons:** add postbuild copy command to move png files into dist ([5c3731e](https://github.com/React95/React95/commit/5c3731e126bb40077339ba5643a1734f966751b4)), closes [#259](https://github.com/React95/React95/issues/259) [#253](https://github.com/React95/React95/issues/253)
- **icons:** adding missing unit into generated css file ([cb327e3](https://github.com/React95/React95/commit/cb327e35f92007eb78139490f9ff54c5c829a9d4))

## [2.0.2](https://github.com/React95/React95/compare/@react95/icons@2.0.1...@react95/icons@2.0.2) (2021-04-23)

**Note:** Version bump only for package @react95/icons

## [2.0.1](https://github.com/React95/React95/compare/@react95/icons@2.0.0...@react95/icons@2.0.1) (2021-04-20)

**Note:** Version bump only for package @react95/icons

# [2.0.0](https://github.com/React95/React95/compare/@react95/icons@1.0.3...@react95/icons@2.0.0) (2021-04-19)

### Bug Fixes

- **icons:** fix 'main' for while building to make prevent build collisions ([a97c940](https://github.com/React95/React95/commit/a97c9401f83dab44e5e1def431492d66ecc4f1d7))
- **icons:** make processIcons a postinstall step ([c663999](https://github.com/React95/React95/commit/c663999a00edf0269a282c7d59a1efe06407f683))

### Code Refactoring

- **icons:** export icons as individual components from @react95/icons ([9a9a562](https://github.com/React95/React95/commit/9a9a562071c09baaaa71f38e1a2abd66cca07aff)), closes [#235](https://github.com/React95/React95/issues/235) [#189](https://github.com/React95/React95/issues/189)

### BREAKING CHANGES

- **icons:** icons now need to be individually imported from the icons package instead of passed
  as strings

## 1.0.3 (2021-01-20)

**Note:** Version bump only for package @react95/icons

## 1.0.2 (2021-01-20)

**Note:** Version bump only for package @react95/icons

## 1.0.1 (2021-01-18)

**Note:** Version bump only for package @react95/icons

# 1.0.0 (2021-01-18)

**Note:** Version bump only for package @react95/icons

## 0.5.3-alpha.0 (2021-01-15)

**Note:** Version bump only for package @react95/icons

## [0.5.2](https://github.com/React95/React95/compare/@react95/icons@0.5.1...@react95/icons@0.5.2) (2021-01-07)

### Bug Fixes

- **icons:** eslint fix ([c3a28f4](https://github.com/React95/React95/commit/c3a28f4325e5d2fc064e27e101a17158f8d87d07))
- **icons:** fix png path build process ([74a9ef1](https://github.com/React95/React95/commit/74a9ef1dbe1055e6c8dc350f5f6940f7edd283aa))

## [0.5.1](https://github.com/React95/React95/compare/@react95/icons@0.5.0...@react95/icons@0.5.1) (2021-01-07)

### Bug Fixes

- **icons:** change CSS modules to a simplier CSS file ([c968dd5](https://github.com/React95/React95/commit/c968dd52b8f9c1981082b3da119b42641199054d))

# [0.5.0](https://github.com/React95/React95/compare/@react95/icons@0.4.2...@react95/icons@0.5.0) (2021-01-06)

### Bug Fixes

- **icons:** add r95 class ([0068bdc](https://github.com/React95/React95/commit/0068bdcd9caaa6fe3c8e0235035754cc82fdedec))
- **icons:** remove blank png files ([3027ef5](https://github.com/React95/React95/commit/3027ef56411285fb9c9d032c2743901cc3593ea2))

### Code Refactoring

- **icons:** package reworked: @react95/icons is now basically a CSS file ([c185f0e](https://github.com/React95/React95/commit/c185f0edd196469b4e1ad1972d85fa50a2fef929)), closes [#189](https://github.com/React95/React95/issues/189)

### Features

- **icons:** create icons as png files ([2fd3627](https://github.com/React95/React95/commit/2fd362706dcb3be40c22885844d5d4eb194b4a2e))
- **topng:** create a script to generate png for each icon ([5710158](https://github.com/React95/React95/commit/5710158efc398cf7443bce3ec2bd689b49f89e13))

### BREAKING CHANGES

- **icons:** @react95/icons is a now CSS file and it works despite React

## [0.4.2](https://github.com/React95/React95/compare/@react95/icons@0.4.1...@react95/icons@0.4.2) (2020-10-03)

### Bug Fixes

- **icons:** remove dictories and file fields from package.json and fix publishConfig ([2d788cc](https://github.com/React95/React95/commit/2d788cccaf41517e52cffc417731cba4f7e97087))

## [0.4.1](https://github.com/React95/React95/compare/@react95/icons@0.4.0...@react95/icons@0.4.1) (2020-10-03)

### Bug Fixes

- **icons:** add prepublish npm script ([cca8196](https://github.com/React95/React95/commit/cca8196129007bb5b33ba600cec5dd6bf13c678a))

# [0.4.0](https://github.com/React95/React95/compare/@react95/icons@0.3.0...@react95/icons@0.4.0) (2020-10-03)

### Features

- **icons:** add icons declaration file ([893b3ef](https://github.com/React95/React95/commit/893b3ef7f2fd639cdc1766907e4f62608bbfd8a3))
- **types:** move \*.ico module declaration to root types folder ([bef505d](https://github.com/React95/React95/commit/bef505d89fcdfcbb1da7bad855f9eb03308191ba))

# [0.3.0](https://github.com/React95/React95/compare/@react95/icons@0.2.0...@react95/icons@0.3.0) (2020-06-14)

### Features

- **icons:** add new icons! :tada: ([feaf970](https://github.com/React95/React95/commit/feaf97094bdb7da37fae82d14871286e85e74ab4)), closes [#154](https://github.com/React95/React95/issues/154)

# [0.2.0](https://github.com/React95/React95/compare/@react95/icons@0.1.0...@react95/icons@0.2.0) (2020-05-15)

### Features

- **icons:** a lot of new icons! ([ceb0761](https://github.com/React95/React95/commit/ceb07614de289fba86e837dacf7399313e4a1460))

# 0.1.0 (2019-09-15)

### Features

- **Icon:** Add icons package ([94ec2af](https://github.com/React95/React95/commit/94ec2af)), closes [#124](https://github.com/React95/React95/issues/124)
