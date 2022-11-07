import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Spellchk_16x16_4 from '../../png/Spellchk_16x16_4.png';

export const spellchkData = {
  '16x16_4': {
    imageSrc: Spellchk_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface SpellchkProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Spellchk: React.FC<SpellchkProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = spellchkData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
