import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import WindowsExplorer_32x32_1 from '../../png/WindowsExplorer_32x32_1.png';
import WindowsExplorer_32x32_4 from '../../png/WindowsExplorer_32x32_4.png';
import WindowsExplorer_16x16_4 from '../../png/WindowsExplorer_16x16_4.png';

export const windowsExplorerData = {
  '32x32_1': {
    imageSrc: WindowsExplorer_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: WindowsExplorer_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: WindowsExplorer_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface WindowsExplorerProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4' | '16x16_4';
}

export const WindowsExplorer: React.FC<WindowsExplorerProps> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = windowsExplorerData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
