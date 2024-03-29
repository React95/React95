import React from 'react';
import type { SVGProps } from "react";

const Comdlg32534_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M2 6h27M2 7h1m25 0h1M2 8h1m12 0h1m12 0h1M2 9h1m2 0h7m6 0h7m3 0h1M2 10h1m12 0h1m12 0h1M2 11h1m25 0h1M2 12h1m2 0h8m2 0h1m2 0h8m2 0h1M2 13h1m25 0h1M2 14h1m12 0h1m12 0h1M2 15h1m2 0h7m6 0h7m3 0h1M2 16h1m12 0h1m12 0h1M2 17h1m25 0h1M2 18h1m2 0h8m2 0h1m2 0h8m2 0h1M2 19h1m25 0h1M2 20h1m12 0h1m12 0h1M2 21h1m2 0h7m6 0h7m3 0h1M2 22h1m12 0h1m12 0h1M2 23h1m25 0h1M2 24h27" /><path stroke="#fff" d="M3 7h25M3 8h12m1 0h12M3 9h2m7 0h6m7 0h3M3 10h12m1 0h12M3 11h25M3 12h2m8 0h2m1 0h2m8 0h2M3 13h25M3 14h12m1 0h12M3 15h2m7 0h6m7 0h3M3 16h12m1 0h12M3 17h25M3 18h2m8 0h2m1 0h2m8 0h2M3 19h25M3 20h12m1 0h12M3 21h2m7 0h6m7 0h3M3 22h12m1 0h12M3 23h25" /><path stroke="gray" d="M29 7h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M3 25h27" /></svg>;

export const comdlg32534Data = {
  '32x32_4': Comdlg32534_32x32_4
};

export interface Comdlg32534Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Comdlg32534: React.FC<Comdlg32534Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = comdlg32534Data[variant];

  return <Svg {...rest} />;
};
