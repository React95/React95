import React from 'react';
import type { SVGProps } from "react";

const Inetcpl1302_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M1 3h28M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1m1 0h25M1 9h1m1 0h1m23 0h1M1 10h1m1 0h1m23 0h1M1 11h1m1 0h1m14 0h1m8 0h1M1 12h1m1 0h1m16 0h1m6 0h1M1 13h1m1 0h1m3 0h2m1 0h2m1 0h2m1 0h3m1 0h1m6 0h1M1 14h1m1 0h1m23 0h1M1 15h1m1 0h25M1 16h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M29 3h1m-1 1h1m-6 1h1m1 0h1m1 0h2m-7 1h7m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 28h29" /><path stroke="navy" d="M2 4h27M2 5h21M2 6h21m-1 5h1m1 0h1m-3 1h1m1 0h1m-3 1h1m1 0h1" /><path stroke="#fff" d="M23 5h1m1 0h1m1 0h1M4 9h23M4 10h1m-1 1h1m5 0h1m5 0h1m3 0h1M4 12h1m6 0h1m-8 1h1m-1 1h1m-2 2h25M3 17h25M3 18h2m21 0h2M3 19h25M3 20h2m21 0h2M3 21h25M3 22h2m21 0h2M3 23h25M3 24h2m21 0h2M3 25h25M3 26h25" /><path stroke="silver" d="M2 7h27M2 8h1m25 0h1M2 9h1m25 0h1M2 10h1m2 0h22m1 0h1M2 11h1m2 0h2m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1m3 0h2m1 0h1M2 12h1m2 0h2m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1m3 0h2m1 0h1M2 13h1m2 0h2m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1m3 0h2m1 0h1M2 14h1m2 0h22m1 0h1M2 15h1m25 0h1M2 16h1m25 0h1M2 17h1m25 0h1M2 18h1m2 0h21m2 0h1M2 19h1m25 0h1M2 20h1m2 0h21m2 0h1M2 21h1m25 0h1M2 22h1m2 0h21m2 0h1M2 23h1m25 0h1M2 24h1m2 0h21m2 0h1M2 25h1m25 0h1M2 26h1m25 0h1M2 27h27" /><path stroke="red" d="M7 11h1" /><path stroke="maroon" d="M8 11h1m-2 1h2" /><path stroke="green" d="M11 11h1m-2 1h1" /><path stroke="#ff0" d="M13 11h1" /><path stroke="olive" d="M14 11h1m-2 1h2" /><path stroke="teal" d="M17 11h1m-2 1h2" /><path stroke="#00f" d="M23 11h1m-1 1h1m-1 1h1" /><path stroke="purple" d="M18 12h1" /></svg>;

export const inetcpl1302Data = {
  '32x32_4': Inetcpl1302_32x32_4
};

export interface Inetcpl1302Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Inetcpl1302: React.FC<Inetcpl1302Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = inetcpl1302Data[variant];

  return <Svg {...rest} />;
};
