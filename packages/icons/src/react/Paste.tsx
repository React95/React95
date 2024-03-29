import React from 'react';
import type { SVGProps } from "react";

const Paste_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M6 1h4M2 2h5m2 0h5M1 3h1m3 0h1m1 0h2m1 0h1m3 0h1M1 4h1m2 0h1m6 0h1m2 0h1M1 5h1m2 0h8m2 0h1M1 6h1m12 0h1M1 7h1m12 0h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1m0 1h5" /><path stroke="#ff0" d="M7 2h2M6 3h1m2 0h1" /><path stroke="gray" d="M2 3h1m1 0h1m7 0h1M3 4h1m9 0h1M2 5h1m9 0h1M3 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 7h1m1 0h1m1 0h1M3 8h1m1 0h1M2 9h1m1 0h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m1 0h1" /><path stroke="olive" d="M3 3h1m7 0h1m1 0h1M2 4h1m9 0h1M3 5h1m9 0h1M2 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 7h1m1 0h1M2 8h1m1 0h1m1 0h1M3 9h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m1 0h1" /><path stroke="navy" d="M7 7h7M7 8h1m5 0h2M7 9h1m5 0h1m1 0h1m-9 1h1m1 0h3m1 0h3m-9 1h1m7 0h1m-9 1h1m1 0h5m1 0h1m-9 1h1m7 0h1m-9 1h9" /><path stroke="#fff" d="M8 8h5M8 9h5m1 0h1m-7 1h1m3 0h1m-5 1h7m-7 1h1m5 0h1m-7 1h7" /></svg>;

export const pasteData = {
  '16x16_4': Paste_16x16_4
};

export interface PasteProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Paste: React.FC<PasteProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = pasteData[variant];

  return <Svg {...rest} />;
};
