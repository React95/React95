import React from 'react';
import type { SVGProps } from "react";

const Shell329_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M4 15h26M3 16h1m25 0h1M2 17h1m25 0h2M1 18h1m25 0h3M1 19h1m25 0h3M1 20h1m25 0h3M1 21h1m25 0h3M1 22h1m2 0h21m2 0h3M1 23h1m25 0h3M1 24h1m2 0h21m2 0h3M1 25h1m25 0h3M1 26h1m25 0h2M1 27h27" /><path stroke="silver" d="M4 16h25M3 17h25M3 19h19m3 0h2M3 20h19m3 0h2M3 21h24M3 22h1m21 0h2M3 23h1m21 0h2M3 24h1m21 0h2M3 25h1m21 0h2M3 26h24" /><path stroke="#000" d="M30 16h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M2 28h26" /><path stroke="#fff" d="M2 18h25M2 19h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h21M2 24h1m-1 1h1m1 0h21M2 26h1" /><path stroke="#0f0" d="M22 19h3" /><path stroke="green" d="M22 20h3" /></svg>;
const Shell329_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M2 5h13M1 6h1m12 0h1M0 7h1m12 0h2M0 8h1m12 0h2M0 9h1m12 0h2M0 10h1m1 0h10m1 0h2M0 11h1m12 0h2M0 12h14" /><path stroke="silver" d="M2 6h12M1 8h10m1 0h1M1 9h12M1 10h1m10 0h1M1 11h1m10 0h1" /><path stroke="#000" d="M15 6h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1M1 13h13" /><path stroke="#fff" d="M1 7h12M2 11h10" /><path stroke="green" d="M11 8h1" /></svg>;

export const shell329Data = {
  '32x32_4': Shell329_32x32_4,
  '16x16_4': Shell329_16x16_4
};

export interface Shell329Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shell329: React.FC<Shell329Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = shell329Data[variant];

  return <Svg {...rest} />;
};
