import * as React from 'react';
import icons from '@react95/icons';
import ico from 'icojs';

import 'isomorphic-fetch';

import { IconProps } from './Icon';

const MIME_TYPE = 'image/png';

async function icoParse(file: ArrayBuffer): Promise<ico.ParsedImage[]> {
  if (ico.isICO(file)) {
    return ico.parse(file);
  }

  return [];
}

export interface IAvailableIcon {
  size: number;
  url: string;
  bpp: number;
}

type UseIconState = {
  iconUrl?: string;
  availableIcons: Array<IAvailableIcon>;
};

const useIcon = ({
  name,
  size,
  fallback,
  bpp = 4,
  variant = 1,
}: Partial<IconProps>) => {
  const [data, setAvailableIcons] = React.useState<UseIconState>({
    iconUrl: '',
    availableIcons: [],
  });

  const changeIconUrl = (newUrl: string) => {
    setAvailableIcons(iconData => ({ ...iconData, iconUrl: newUrl }));
  };

  React.useEffect(() => {
    async function fetchIcon() {
      const response = await fetch(icons[name]);
      const iconBuffer = await response.arrayBuffer();

      const allIcons = await icoParse(iconBuffer);

      const iconsToRender = allIcons.map(i => ({
        size: i.width,
        url: URL.createObjectURL(new Blob([i.buffer], { type: MIME_TYPE })),
        bpp: i.bpp,
      }));

      let url = undefined;
      const match = iconsToRender.filter(i => i.size === size && i.bpp === bpp);

      if (match.length > 0) {
        const found = match[variant - 1];
        url = found.url;
      } else if (fallback) {
        url = iconsToRender[0].url;
      }

      setAvailableIcons({ iconUrl: url, availableIcons: iconsToRender });
    }

    fetchIcon();
  }, []);

  return {
    changeIconUrl,
    iconUrl: data.iconUrl,
    availableIcons: data.availableIcons,
  };
};

export default useIcon;
