const path = require('path');
const fs = require('fs-extra');

const pkg = require(path.resolve('./package.json'));
const outDir = './dist';

const copyFile = file => {
  const buildPath = path.resolve(outDir, path.basename(file));

  fs.copy(file, buildPath);

  return file;
};

const createTypes = () => {
  const srcDir = `./types`;
  const destDir = `${outDir}/_types`;

  try {
    fs.emptyDirSync(`${destDir}`)
  } catch (err) {
    console.error(err)
    throw err
  }
  try {
    fs.mkdirSync(`${destDir}`)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
  try {
    fs.copySync(srcDir, destDir);
  } catch (err) {
    console.error(err)
    throw err
  }

  return '_/types'
}

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

  const buildPath = path.resolve(`${outDir}/package.json`);

  fs.writeFileSync(buildPath, JSON.stringify(newPackageData, null, 2), 'utf8');

  return 'package.json';
};

const run = () => {
  const distFiles = [...['README.md'].map(copyFile), createPackageJson(), createTypes()];

  console.log(
    `Created ${distFiles.map(file => file).join(', ')} in ${
      pkg.name
    }${outDir.replace('.', '')}`,
  );
};

run();
