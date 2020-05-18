import { useState, useEffect } from 'react';
import icons from '@react95/icons';
import ico from 'icojs';

const MIME_TYPE = 'image/png';

function icoParse(file) {
  if (ico.isICO(file)) {
    return ico.parse(file);
  }

  return [];
}

const useIcon = ({ name, size, fallback, bpp = 4, variant = 1 }) => {
  const [data, setAvailableIcons] = useState({
    iconUrl: '',
    availableIcons: [{}],
  });

  const changeIconUrl = newUrl => {
    setAvailableIcons(iconData => ({ ...iconData, iconUrl: newUrl }));
  };

  useEffect(() => {
    async function fetchIcon() {
      const response = await fetch(icons[name]);
      const iconBuffer = await response.arrayBuffer();

      const allIcons = await icoParse(iconBuffer);

      const iconsToRender = allIcons.map(i => ({
        size: i.width,
        url: URL.createObjectURL(new Blob([i.buffer], { type: MIME_TYPE })),
        bpp: i.bpp,
      }));

      let url;
      const match = iconsToRender.filter(i => i.size === size && i.bpp === bpp);

      if (match.length > 0) {
        const finded = match[variant - 1];
        url = finded.url;
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
