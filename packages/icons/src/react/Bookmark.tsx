import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Bookmark_32x32_4 from '../../png/Bookmark_32x32_4.png';
import Bookmark_16x16_4 from '../../png/Bookmark_16x16_4.png';

export const bookmarkData = {
  '32x32_4': {
    imageSrc: Bookmark_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Bookmark_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface BookmarkProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Bookmark: React.FC<BookmarkProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = bookmarkData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
