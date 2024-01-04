import fs from 'fs';
import ICO from 'icojs';
import path from 'path';

import { getIconDataName, iconComponentTemplate } from './component-template';
import { filterBlockedIcons } from './iconBlockList';
import {
  REACT_FOLDER,
  IMAGE_FOLDER,
  IconData,
  ICON_DEMOS_FILE_PATH,
  ICONS_INDEX_FILE_PATH,
  CSS_FILE_PATH,
  ICONS_FOLDER,
  SVG_FOLDER,
} from './utils';
import { generateSVG } from './toSVG';

const getReactFileName = (name: string) => `${REACT_FOLDER}/${name}.tsx`;
const getSVGFileName = (name: string) => `${SVG_FOLDER}/${name}.svg`;
const getImageFileName = (imageId: string) => `${IMAGE_FOLDER}/${imageId}.png`;

const makeCssClass = (icon: IconData) => `.${icon.id} {
  width: ${icon.width}px;
  height: ${icon.height}px;
  background-image: url(${icon.svgImportPath});
  display: inline-block;
}
`;

const capitalizeFirst = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

async function extractPNGFromIco(fileName: string) {
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
  const iconVariants: IconData[] = parsedIcon
    .map(image => {
      const variant = `${image.width}x${image.height}_${image.bpp}`;
      const imageId = `${iconName}_${variant}`;

      const imageFileName = getImageFileName(imageId);
      const svgFileName = getSVGFileName(imageId);

      return {
        ...image,
        width: image.width,
        height: image.height,
        filePath: imageFileName,
        svgImportPath: svgFileName,
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
}

type IconsMap = Awaited<ReturnType<typeof extractPNGFromIco>>;

async function toReact(icons: IconsMap[]) {
  console.log('⚛️  Generating React components');

  const indexFileReExports: string[] = [];

  icons.forEach(({ name, variants }) => {
    // Index file for making all icons importable from '@react95/icons'
    indexFileReExports.push(`export * from './react/${name}';`);

    // Individual .tsx icon components
    fs.writeFileSync(
      getReactFileName(name),
      iconComponentTemplate(name, variants),
    );
  });

  fs.writeFileSync(ICONS_INDEX_FILE_PATH, indexFileReExports.join('\n'));
}

async function toCSS(icons: IconsMap[]) {
  console.log('💅 Generating CSS stylesheet');

  const cssClasses: string[] = [];

  icons.forEach(({ variants }) => {
    variants.forEach(variant => {
      // Writing CSS file for supporting older CSS file usage
      cssClasses.push(makeCssClass(variant));
    });
  });

  fs.writeFileSync(CSS_FILE_PATH, cssClasses.join('\n'));
}

async function toPNG(icons: IconsMap[]) {
  console.log('🖼️  Generating PNG files');

  icons.forEach(({ variants }) => {
    variants.forEach(variant => {
      // Writing individual PNG files
      fs.writeFileSync(variant.filePath, Buffer.from(variant.buffer));
    });
  });
}

async function toDemo(icons: IconsMap[]) {
  console.log('💡 Generating demo files');

  const demoFileImports: string[] = [];
  const demoFileExports: string[] = [];

  icons.forEach(({ name }) => {
    const componentName = name;
    const variantDataName = getIconDataName(name);

    // Demo file imports & exports for use in React95 Core Storybook
    demoFileImports.push(
      `import { ${variantDataName}, ${componentName} } from './react/${name}';`,
    );
    demoFileExports.push(`  {
    componentName: "${componentName}",
    component: ${componentName},
    variants: ${variantDataName},
  },`);
  });

  fs.writeFileSync(
    ICON_DEMOS_FILE_PATH,
    `${demoFileImports.join('\n')}

export const icons = [
  ${demoFileExports.join('\n')}
]
`,
  );
}

async function toSVG(icons: IconsMap[]) {
  console.log('💫 Generating SVG components');

  icons.forEach(({ variants }) => {
    variants.forEach(variant => {
      const svg = generateSVG(variant.filePath);

      // Writing individual SVG files
      fs.writeFileSync(getSVGFileName(variant.id), svg);
    });
  });
}

export async function makeIcons() {
  fs.mkdirSync(REACT_FOLDER);
  fs.mkdirSync(SVG_FOLDER);
  fs.mkdirSync(IMAGE_FOLDER);

  const files = fs.readdirSync(ICONS_FOLDER);
  const icons = await Promise.all(files.map(extractPNGFromIco));

  await toPNG(icons);
  await toSVG(icons);
  await toReact(icons);
  await toCSS(icons);
  await toDemo(icons);
}
