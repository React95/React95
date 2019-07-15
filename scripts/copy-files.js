import path from 'path';
import fs from 'fs-extra';
import pkg from '../package.json';

const copyFile = file => {
  const buildPath = path.resolve(__dirname, '../dist/', path.basename(file));

  fs.copy(file, buildPath, () => console.log(`Copied ${file} to ${buildPath}`));
};

const createPackageJson = () => {
  const {
    scripts,
    devDependencies,
    'lint-staged': lintStaged,
    jest,
    release,
    config,
    ...packageDataOther
  } = pkg;

  const newPackageData = {
    ...packageDataOther,
    main: './index.js',
    private: false,
  };

  const buildPath = path.resolve(__dirname, '../dist/package.json');

  fs.writeFileSync(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');
  console.log(`Created package.json in ${buildPath}`);

  return newPackageData;
};

const run = () => {
  ['CONTRIBUTING.md', 'README.md', 'CODE_OF_CONDUCT.md'].map(copyFile);
  createPackageJson();
};

run();
