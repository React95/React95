import { css } from 'styled-components';
import { scrollBarBorder } from './Borders';

export const createTriangleSVG = (color: string, angle = 0) => {
  const svg = `<svg height="21" width="21" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${angle} 13 13)">
      <polygon fill="${color}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;
  const encoded = typeof window != 'undefined' ? window.btoa(svg) : '';
  return `url(data:image/svg+xml;base64,${encoded})`;
};

// TODO for flat box styles add checkered background when disabled (not solid color)
export const createHatchedBackground = ({
  mainColor = 'black',
  secondaryColor = 'transparent',
  pixelSize = 2,
}) => css`
  background-image: ${[
    `linear-gradient(
      45deg,
      ${mainColor} 25%,
      transparent 25%,
      transparent 75%,
      ${mainColor} 75%
    )`,
    `linear-gradient(
      45deg,
      ${mainColor} 25%,
      transparent 25%,
      transparent 75%,
      ${mainColor} 75%
    )`,
  ].join(',')};
  background-color: ${secondaryColor};
  background-size: ${`${pixelSize * 2}px ${pixelSize * 2}px`};
  background-position: 0 0, ${`${pixelSize}px ${pixelSize}px`};
`;

export const scrollbars = css`
  ::-webkit-scrollbar {
    width: 17;
    height: 17;
  }
  ::-webkit-scrollbar-track {
    ${({ theme }) =>
      createHatchedBackground({
        mainColor: theme.colors.material,
        secondaryColor: theme.colors.borderLightest,
      })}
  }
  ::-webkit-scrollbar-thumb {
    box-sizing: border-box;
    display: inline-block;
    background: ${({ theme }) => theme.colors.material};
    color: ${({ theme }) => theme.colors.materialText};
    ${scrollBarBorder()}
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({ theme }) => theme.colors.material};
  }
  ::-webkit-scrollbar-button {
    box-sizing: border-box;
    display: inline-block;
    background: ${({ theme }) => theme.colors.material};
    color: ${({ theme }) => theme.colors.materialText};
    ${scrollBarBorder()}
    display: block;
    outline-offset: -2px;
    height: 17;
    width: 17;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1;
    ${scrollBarBorder()}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({ theme }) =>
      createTriangleSVG(theme.colors.materialText, 90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({ theme }) =>
      createTriangleSVG(theme.colors.materialText, 270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({ theme }) =>
      createTriangleSVG(theme.colors.materialText, 180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({ theme }) =>
      createTriangleSVG(theme.colors.materialText, 0)};
  }
`;
