// @ts-check

import { IconData } from './utils';

export const getIconDataName = (name: string): string => {
  const lowercase = name.charAt(0).toLowerCase() + name.slice(1);
  return `${lowercase}Data`;
};

export const iconComponentTemplate = (
  name: string,
  images: IconData[],
): string => {
  const iconDataVariableName = getIconDataName(name);
  const componentName = name;
  const componentPropsName = `${componentName}Props`;
  return `import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
${images
  .map(image => `import ${image.id} from '${image.reactImportPath}';`)
  .join('\n')}

export const ${iconDataVariableName} = {${images
    .map(
      image => `
  '${image.variant}': {
    imageSrc: ${image.id} as string,
    width: ${image.width},
    height: ${image.height},
  },`,
    )
    .join('\n')}
};

export interface ${componentPropsName} extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: ${images.map(image => `'${image.variant}'`).join(' | ')};
}

export const ${componentName}: React.FC<${componentPropsName}> = ({
  variant = '${images[0].variant}',
  ...rest
}) => {
  const image = ${iconDataVariableName}[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
`;
};
