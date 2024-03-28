interface IBorderStyle {
  direction?: 'extrude' | 'intrude';
}

interface IBorder extends IBorderStyle {
  outerTopLeft: string;
  innerTopLeft: string;
  outerBottomRight: string;
  innerBottomRight: string;
}

export const createBorder = ({
  direction,
  outerTopLeft,
  innerTopLeft,
  outerBottomRight,
  innerBottomRight,
}: IBorder) => ({
  border: 0,
  boxShadow: `-1px -1px 0 0
      ${direction == 'extrude' ? outerBottomRight : innerTopLeft} inset,
    1px 1px 0 0
      ${direction == 'extrude' ? outerTopLeft : innerBottomRight} inset ,
    -2px -2px 0 0
      ${direction == 'extrude' ? innerBottomRight : outerTopLeft} inset ,
    2px 2px 0 0
      ${direction == 'extrude' ? innerTopLeft : outerBottomRight} inset`,
});

export const createTriangleSVG = (color: string, angle = 0) => {
  const svg = `<svg height="21" width="21" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${angle} 13 13)">
      <polygon fill="${color}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;
  const encoded = btoa(svg);
  return `url(data:image/svg+xml;base64,${encoded})`;
};
