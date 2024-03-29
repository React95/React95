import React from 'react';
import type { SVGProps } from "react";

const Format16_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M1 0h1m12 0h1M1 1h1m12 0h1M1 2h1m12 0h1M1 3h1m12 0h1M1 4h1m12 0h1M1 5h1m12 0h1M1 6h10m1 0h3M1 10h10m1 0h3M1 11h1m12 0h1M1 12h1m12 0h1M1 13h1m12 0h1M1 14h1m12 0h1M1 15h1m12 0h1" /><path stroke="#fff" d="M2 0h12M2 1h12M2 2h1m3 0h1m3 0h1m2 0h1M2 3h12M2 4h1m3 0h1m3 0h1m2 0h1M2 5h12M2 11h12M2 12h1m10 0h1M2 13h12M2 14h1m3 0h1m3 0h1m2 0h1M2 15h12" /><path stroke="gray" d="M3 2h3m1 0h3m1 0h2M3 4h3m1 0h3m1 0h2M3 14h3m1 0h3m1 0h2" /><path stroke="#00f" d="M11 6h1m-2 1h2M9 8h7m-6 1h2m-1 1h1" /><path stroke="olive" d="M3 12h10" /></svg>;

export const format16Data = {
  '16x16_4': Format16_16x16_4
};

export interface Format16Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Format16: React.FC<Format16Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = format16Data[variant];

  return <Svg {...rest} />;
};
