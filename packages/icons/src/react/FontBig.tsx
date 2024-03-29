import React from 'react';
import type { SVGProps } from "react";

const FontBig_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M13 0h1M7 1h1m4 0h3M7 2h2m2 0h5M6 3h3M6 4h4M5 5h2m1 0h2M5 6h1m2 0h3M4 7h2m3 0h2M4 8h1m4 0h3M3 9h2m5 0h2m-9 1h10M2 11h2m7 0h2M2 12h1m8 0h3M1 13h2m9 0h2M0 14h4m7 0h5" /><path stroke="gray" d="M8 1h1M6 2h1m2 1h1M5 4h1m1 1h1m2 0h1M4 6h1m1 0h1m1 1h1m2 0h1M3 8h1m1 0h1m3 1h1m2 0h1M2 10h1m7 1h1m2 0h1M1 12h1m1 0h1m7 1h1m2 0h1" /></svg>;

export const fontBigData = {
  '16x16_4': FontBig_16x16_4
};

export interface FontBigProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const FontBig: React.FC<FontBigProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = fontBigData[variant];

  return <Svg {...rest} />;
};
