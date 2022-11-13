import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import LogView_32x32_4 from '../../png/LogView_32x32_4.png';

export const logViewData = {
  '32x32_4': {
    imageSrc: LogView_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface LogViewProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const LogView: React.FC<LogViewProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = logViewData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
