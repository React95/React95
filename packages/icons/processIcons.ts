import fs from 'fs';
import ICO from 'icojs';
import path from 'path';
import { sync as rimrafSync } from 'rimraf';
import { iconComponentTemplate, getIconDataName } from './component-template';
import { filterBlockedIcons } from './iconBlockList';

export interface IconData {
  filePath: string;
  reactImportPath: string;
  variant: string;
  id: string;
  width: number;
  height: number;
  bpp: number;
  buffer: ArrayBuffer;
}

(async () => {
  const ICONS_FOLDER = './src/icons';
  const ICON_DEMOS_FILE_PATH = './src/iconDemos.ts';
  const ICONS_INDEX_FILE_PATH = './src/index.ts';
  const REACT_FOLDER = './src/react';
  const getReactFileName = (name: string) => `${REACT_FOLDER}/${name}.tsx`;
  const IMAGE_FOLDER = './png';
  const getImageFileName = (imageId: string) =>
    `${IMAGE_FOLDER}/${imageId}.png`;
  const CSS_FILE_PATH = './icons.css';

  const makeCssClass = (icon: IconData) => `
  .${icon.id} {
    width: ${icon.width}px;
    height: ${icon.height}px;
    background-image: url(${icon.filePath});
  }
  `;

  rimrafSync('dist');
  rimrafSync(REACT_FOLDER);
  rimrafSync(IMAGE_FOLDER);
  rimrafSync(ICON_DEMOS_FILE_PATH);
  rimrafSync(ICONS_INDEX_FILE_PATH);
  rimrafSync(CSS_FILE_PATH);

  fs.mkdirSync(REACT_FOLDER);
  fs.mkdirSync(IMAGE_FOLDER);

  const files = fs.readdirSync(ICONS_FOLDER);

  const capitalizeFirst = (word: string) =>
    word.charAt(0).toUpperCase() + word.slice(1);

  const icons = await Promise.all(
    files.map(async fileName => {
      // Capitalize first letter for component name
      const iconName = fileName
        // Remove the file extension
        .split('.')[0]
        .split('_')
        .map(capitalizeFirst)
        .join('');

      const iconsBuffer = fs.readFileSync(path.join(ICONS_FOLDER, fileName));

      /** Used to avoid adding the same icon variant multiple times */
      const addedVariants: string[] = [];
      const parsedIcon = await ICO.parse(iconsBuffer, 'image/png');
      const iconVariants = parsedIcon
        .map(image => {
          const variant = `${image.width}x${image.height}_${image.bpp}`;
          const imageId = `${iconName}_${variant}`;

          const imageFileName = getImageFileName(imageId);

          return {
            ...image,
            width: image.width,
            height: image.height,
            filePath: imageFileName,
            reactImportPath: path
              .relative(REACT_FOLDER, imageFileName)
              .replace(/\\/g, '/'),
            variant: variant,
            id: imageId,
          };
        })
        .filter(icon => {
          if (addedVariants.includes(icon.id)) {
            return false;
          }
          addedVariants.push(icon.id);
          return true;
        })
        // Remove icons marked as not rendering anything
        .filter(filterBlockedIcons);

      return {
        name: iconName,
        variants: iconVariants,
      };
    }),
  );

  const cssClasses: string[] = [];
  const indexFileReExports: string[] = [];
  const demoFileImports: string[] = [];
  const demoFileExports: string[] = [];

  icons.forEach(({ name, variants }) => {
    const componentName = name;
    const variantDataName = getIconDataName(name);

    // Index file for making all icons importable from '@react95/icons'
    indexFileReExports.push(`export * from './react/${name}';`);

    // Demo file imports & exports for use in React95 Core Storybook
    demoFileImports.push(
      `import {${variantDataName}, ${componentName}} from './react/${name}';`,
    );
    demoFileExports.push(`{
      componentName: "${componentName}",
      component: ${componentName},
      variants: ${variantDataName},
    },`);

    // Individual .tsx icon components
    fs.writeFileSync(
      getReactFileName(name),
      iconComponentTemplate(name, variants),
    );

    variants.forEach(variant => {
      // Writing CSS file for supporting older CSS file usage
      cssClasses.push(makeCssClass(variant));
      // Writing individual PNG files
      fs.writeFileSync(variant.filePath, Buffer.from(variant.buffer));
    });
  });

  fs.writeFileSync(CSS_FILE_PATH, cssClasses.join('\n'));
  fs.writeFileSync(ICONS_INDEX_FILE_PATH, indexFileReExports.join('\n'));
  fs.writeFileSync(
    ICON_DEMOS_FILE_PATH,
    `
  ${demoFileImports.join('\n')}

  export const icons = [
    ${demoFileExports.join('\n')}
  ]
  `,
  );
})();
