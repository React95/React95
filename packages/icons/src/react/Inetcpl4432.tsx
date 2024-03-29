import React from 'react';
import type { SVGProps } from "react";

const Inetcpl4432_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M4 5h23M4 6h1M4 7h1M4 8h1M4 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M27 5h1m-1 1h1m-8 1h1m1 0h1m1 0h1m2 0h1m-9 1h6m2 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M4 26h24" /><path stroke="navy" d="M5 6h22M5 7h14m6 0h2M5 8h14m6 0h2" /><path stroke="#fff" d="M19 7h1m1 0h1m1 0h1M6 10h20M6 11h1m18 0h1M6 12h20M6 13h1m18 0h1M6 14h20M6 15h1m18 0h1M6 16h20M6 17h1m18 0h1M6 18h20M6 19h1m18 0h1M6 20h20M6 21h1m18 0h1M6 22h20M6 23h20M6 24h20" /><path stroke="silver" d="M5 9h22M5 10h1m20 0h1M5 11h1m1 0h18m1 0h1M5 12h1m20 0h1M5 13h1m5 0h10m5 0h1M5 14h1m20 0h1M5 15h1m1 0h14m5 0h1M5 16h1m20 0h1M5 17h1m1 0h7m4 0h7m1 0h1M5 18h1m20 0h1M5 19h1m5 0h14m1 0h1M5 20h1m20 0h1M5 21h1m1 0h7m4 0h3m5 0h1M5 22h1m20 0h1M5 23h1m20 0h1M5 24h1m20 0h1M5 25h22" /><path stroke="red" d="M7 13h4m10 0h4m-4 2h4m-11 2h4M7 19h4m3 2h4m3 0h4" /></svg>;

export const inetcpl4432Data = {
  '32x32_4': Inetcpl4432_32x32_4
};

export interface Inetcpl4432Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Inetcpl4432: React.FC<Inetcpl4432Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = inetcpl4432Data[variant];

  return <Svg {...rest} />;
};
