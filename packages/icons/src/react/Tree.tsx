import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Tree_32x32_4 from '../../png/Tree_32x32_4.png';
import Tree_16x16_4 from '../../png/Tree_16x16_4.png';

export const treeData = {
  '32x32_4': {
    imageSrc: Tree_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Tree_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface TreeProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Tree: React.FC<TreeProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = treeData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
