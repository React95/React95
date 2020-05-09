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

const useIcon = ({ name, size, fallback }) => {
  const [availableIcons, setAvailableIcons] = useState([{}]);
  const [iconUrl, setIconUrl] = useState('');

  useEffect(() => {
    (async function fetchIcon() {
      const response = await fetch(icons[name]);
      const iconBuffer = await response.arrayBuffer();

      const allIcons = await icoParse(iconBuffer);

      const iconsToRender = allIcons.map((i) => ({
        size: i.width,
        url: URL.createObjectURL(new Blob([i.buffer], { type: MIME_TYPE })),
        bit: i.bbt,
      }));

      if (fallback) {
        setIconUrl(iconsToRender[0].url);
      } else {
        const match = iconsToRender.find((i) => i.size === size);
        const url = match ? match.url : undefined;

        setIconUrl(url);
      }

      setAvailableIcons(iconsToRender);
    })();
  }, []);

  return { iconUrl, setIconUrl, availableIcons };
};

export default useIcon;
