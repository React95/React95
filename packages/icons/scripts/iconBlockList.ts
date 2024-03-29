import { IconData } from './utils';

/** This list includes all icons seen as not including any visual output */
const iconBlockedIds = [
  'Access218_16x16_4',
  'Access219_16x16_4',
  'Access220_16x16_4',
  'Access221_16x16_4',
  'Access222_16x16_4',
  'Access223_16x16_4',
  'Access224_16x16_4',
  'Access225_16x16_4',
  'Access226_16x16_4',
  'Access227_16x16_4',
  'Access228_16x16_4',
  'Access229_16x16_4',
  'Access230_16x16_4',
  'Appwiz1501_16x16_4',
  'Appwiz1502_16x16_4',
  'Awfext326050_32x32_4',
  'Awfxcg321302_16x16_4',
  'Awfxcg321303_16x16_4',
  'Awfxcg321305_16x16_4',
  'Dial16x16_4',
  'Explorer104_32x32_4',
  'Filefind3_16x16_4',
  'Filepick_16x16_4',
  'Filexfer129_16x16_4',
  'Filexfer130_16x16_4',
  'Gcdef108_32x32_4',
  'Gcdef109_32x32_4',
  'Gcdef110_32x32_4',
  'Gcdef111_32x32_4',
  'Gcdef112_32x32_4',
  'Gcdef113_32x32_4',
  'Gcdef114_32x32_4',
  'Gcdef115_32x32_4',
  'Gcdef116_32x32_4',
  'Gcdef117_32x32_4',
  'Gcdef122_32x32_4',
  'Gcdef124_32x32_4',
  'Lights101_32x32_4',
  'Lights102_32x32_4',
  'Lights103_32x32_4',
  'Mshtml32539_16x16_4',
  'Mshtml32544_32x32_4',
  'Mshtml32545_32x32_4',
  'Shdocvw261_32x32_4',
  'Shdocvw274_32x32_4',
  'Shdocvw275_32x32_4',
];

/** Returns true if icon is not marked as blocked */
export const filterBlockedIcons = (icon: IconData): boolean =>
  !iconBlockedIds.includes(icon.id);
