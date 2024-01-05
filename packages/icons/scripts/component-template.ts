// @ts-check

import fs from 'fs';
import { transform } from '@svgr/core';
import { IconData } from './utils';
import { Options } from '@svgr/babel-preset';

export const getIconDataName = (name: string): string => {
  const lowercase = name.charAt(0).toLowerCase() + name.slice(1);
  return `${lowercase}Data`;
};

const svgTemplate: Options['template'] = (variables, { tpl }) => {
  return tpl`
const ${variables.componentName} = (${variables.props}) => (
  ${variables.jsx}
);
`;
};

export const iconComponentTemplate = (
  name: string,
  images: IconData[],
): string => {
  const iconDataVariableName = getIconDataName(name);
  const componentName = name;
  const componentPropsName = `${componentName}Props`;

  return `import React from 'react';
import type { SVGProps } from "react";

${images
  .map(image => {
    const svg = fs.readFileSync(image.svgImportPath).toString();

    const component = transform.sync(
      svg,
      {
        icon: true,
        jsxRuntime: 'automatic',
        template: svgTemplate,
        plugins: ['@svgr/plugin-jsx'],
        typescript: true,
        svgProps: {
          width: image.width.toString(),
          height: image.height.toString(),
        },
      },
      { componentName: image.id },
    );

    return component;
  })
  .join('\n')}

export const ${iconDataVariableName} = {${images
    .map(
      image => `
  '${image.variant}': ${image.id}`,
    )
    .join(',')}
};

export interface ${componentPropsName} extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: ${images.map(image => `'${image.variant}'`).join(' | ')};
}

export const ${componentName}: React.FC<${componentPropsName}> = ({
  variant = '${images[0].variant}',
  ...rest
}) => {
  const Svg = ${iconDataVariableName}[variant];

  return <Svg {...rest} />;
};
`;
};
