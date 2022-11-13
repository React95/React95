import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import QuestionBubble_32x32_32 from '../../png/QuestionBubble_32x32_32.png';

export const questionBubbleData = {
  '32x32_32': {
    imageSrc: QuestionBubble_32x32_32 as string,
    width: 32,
    height: 32,
  },
};

export interface QuestionBubbleProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_32';
}

export const QuestionBubble: React.FC<QuestionBubbleProps> = ({
  variant = '32x32_32',
  ...rest
}) => {
  const image = questionBubbleData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
