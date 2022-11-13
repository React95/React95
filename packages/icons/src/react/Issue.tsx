import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Issue_32x32_4 from '../../png/Issue_32x32_4.png';
import Issue_16x16_4 from '../../png/Issue_16x16_4.png';

export const issueData = {
  '32x32_4': {
    imageSrc: Issue_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Issue_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface IssueProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Issue: React.FC<IssueProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = issueData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
