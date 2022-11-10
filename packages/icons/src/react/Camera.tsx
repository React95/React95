import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Camera_32x32_4 from '../../png/Camera_32x32_4.png';
import Camera_16x16_4 from '../../png/Camera_16x16_4.png';

export const cameraData = {
  '32x32_4': {
    imageSrc: Camera_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Camera_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface CameraProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Camera: React.FC<CameraProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = cameraData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
