import React from 'react';
import type { SVGProps } from "react";

const Comdlg32530_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M8 6h14M8 7h1m12 0h1M8 8h1m12 0h1M8 9h1m2 0h7m3 0h1M8 10h1m12 0h1M8 11h1m12 0h1M8 12h1m2 0h8m2 0h1M8 13h1m12 0h1M8 14h1m12 0h1M8 15h1m2 0h7m3 0h1M8 16h1m12 0h1M8 17h1m12 0h1M8 18h1m2 0h8m2 0h1M8 19h1m12 0h1M8 20h1m12 0h1M8 21h1m2 0h7m3 0h1M8 22h1m12 0h1M8 23h1m12 0h1M8 24h14" /><path stroke="#fff" d="M9 7h12M9 8h12M9 9h2m7 0h3M9 10h12M9 11h12M9 12h2m8 0h2M9 13h12M9 14h12M9 15h2m7 0h3M9 16h12M9 17h12M9 18h2m8 0h2M9 19h12M9 20h12M9 21h2m7 0h3M9 22h12M9 23h12" /><path stroke="gray" d="M22 7h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M9 25h14" /></svg>;

export const comdlg32530Data = {
  '32x32_4': Comdlg32530_32x32_4
};

export interface Comdlg32530Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Comdlg32530: React.FC<Comdlg32530Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = comdlg32530Data[variant];

  return <Svg {...rest} />;
};
