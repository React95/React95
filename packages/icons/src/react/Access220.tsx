import React from 'react';
import type { SVGProps } from "react";

const Access220_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M7 0h21M6 1h1m20 0h1M5 2h1m20 0h2M4 3h1m20 0h3M3 4h1m21 0h3M3 5h1m2 0h17m2 0h3M3 6h1m2 0h1m15 0h1m2 0h3M3 7h1m2 0h1m15 0h1m2 0h3M3 8h1m2 0h1m15 0h1m2 0h3M3 9h1m2 0h1m15 0h1m2 0h3M3 10h1m2 0h1m5 0h1m9 0h1m2 0h3M3 11h1m2 0h1m15 0h1m2 0h3M3 12h1m2 0h1m8 0h1m6 0h1m2 0h3M3 13h1m2 0h1m15 0h1m2 0h3M3 14h1m2 0h1m15 0h1m2 0h3M3 15h1m2 0h1m15 0h1m2 0h3M3 16h1m2 0h1m15 0h1m2 0h3M3 17h1m2 0h17m2 0h3M3 18h1m21 0h3M3 19h1m21 0h2m1 0h3M3 20h23m1 0h2m1 0h1m-5 1h2m1 0h2M1 22h26m1 0h3M0 23h1m26 0h4M0 24h1m26 0h4M0 25h1m14 0h10m2 0h4M0 26h1m26 0h4M0 27h1m3 0h2m15 0h1m5 0h4M0 28h1m26 0h3M0 29h1m26 0h2M0 30h28" /><path stroke="silver" d="M7 1h19M6 2h19M5 4h20M5 5h1m18 0h1M5 6h1m18 0h1M5 7h1m18 0h1M5 8h1m18 0h1M5 9h1m18 0h1M5 10h1m18 0h1M5 11h1m18 0h1M5 12h1m18 0h1M5 13h1m18 0h1M5 14h1m18 0h1M5 15h1m18 0h1M5 16h1m18 0h1M5 17h1m18 0h1M5 18h1m18 0h1M5 19h20m4 1h1m-2 1h1m-2 1h1M2 24h25M2 25h13m10 0h2M2 26h2m2 0h9m10 0h2M2 27h2m2 0h15m1 0h5M2 28h25M2 29h25" /><path stroke="#fff" d="M26 1h1m-2 1h1M5 3h20M4 4h1M4 5h1m18 0h1M4 6h1m18 0h1M4 7h1m4 0h13m1 0h1M4 8h1m5 0h12m1 0h1M4 9h1m14 0h3m1 0h1M4 10h1m14 0h3m1 0h1M4 11h1m7 0h2m5 0h3m1 0h1M4 12h1m7 0h3m4 0h3m1 0h1M4 13h1m7 0h5m2 0h3m1 0h1M4 14h1m7 0h6m1 0h3m1 0h1M4 15h1m15 0h2m1 0h1M4 16h1m16 0h1m1 0h1M4 17h1m18 0h1M4 18h1m1 0h18M4 19h1m-4 4h26M1 24h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M28 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M7 6h15m6 0h1M7 7h2m19 0h1M7 8h3m18 0h1M7 9h12m9 0h1M7 10h5m1 0h6m9 0h1M7 11h5m2 0h5m9 0h1M7 12h5m4 0h3m9 0h1M7 13h5m5 0h2m9 0h1M7 14h5m6 0h1m9 0h1M7 15h13m8 0h1M7 16h14m7 0h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1m4 0h1M3 21h23m5 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-17 1h10m6 0h1m-1 1h1m-2 1h1m-2 1h1m-2 1h1M1 31h27" /><path stroke="green" d="M4 26h2" /></svg>;

export const access220Data = {
  '32x32_4': Access220_32x32_4
};

export interface Access220Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Access220: React.FC<Access220Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = access220Data[variant];

  return <Svg {...rest} />;
};
