import fs from 'fs';
import path from 'path';

const distPackageJsonPath = path.join(__dirname, '../dist/package.json');

const packageJson = JSON.parse(
  fs.readFileSync(distPackageJsonPath, 'utf8')
);

packageJson.exports = {
  '.': {
    types: './types/index.d.ts',
    import: './esm/index.js',
    require: './cjs/index.js',
  },
  './*': {
    types: './types/react/*.d.ts',
    import: './esm/react/*.js',
    require: './cjs/react/*.js',
  },
};

fs.writeFileSync(distPackageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

console.log('✨ exports field added to dist/package.json');
