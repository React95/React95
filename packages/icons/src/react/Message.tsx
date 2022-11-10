import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Message_16x16_4 from '../../png/Message_16x16_4.png';

export const messageData = {
  '16x16_4': {
    imageSrc: Message_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface MessageProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Message: React.FC<MessageProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = messageData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
