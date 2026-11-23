import React from 'react';
import type { SVGProps } from "react";

const Plustab104_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M4 4h27M3 5h1m26 0h1M2 6h1m26 0h2M1 7h1m26 0h3M0 8h1m27 0h3M0 9h1m2 0h23m2 0h3M0 10h1m24 0h1m2 0h3M0 11h1m24 0h1m2 0h3M0 12h1m24 0h1m2 0h3M0 13h1m24 0h1m2 0h3M0 14h1m24 0h1m2 0h3M0 15h1m24 0h1m2 0h3M0 16h1m24 0h1m2 0h3M0 17h1m24 0h1m2 0h3M0 18h1m24 0h1m2 0h3M0 19h1m24 0h1m2 0h3M0 20h1m24 0h1m2 0h3M0 21h1m24 0h1m2 0h3M0 22h1m24 0h1m2 0h3M0 23h1m24 0h1m2 0h3M0 24h1m24 0h1m2 0h3M0 25h1m24 0h1m2 0h3M0 26h1m2 0h23m2 0h3M0 27h1m27 0h3M0 28h1m27 0h2M0 29h29" /><path stroke="silver" d="M4 5h25M3 6h25M2 8h26M2 9h1m24 0h1M2 10h1m24 0h1M2 11h1m24 0h1M2 12h1m24 0h1M2 13h1m24 0h1M2 14h1m24 0h1M2 15h1m24 0h1M2 16h1m24 0h1M2 17h1m24 0h1M2 18h1m24 0h1M2 19h1m24 0h1M2 20h1m24 0h1M2 21h1m24 0h1M2 22h1m24 0h1M2 23h1m24 0h1M2 24h1m24 0h1M2 25h1m24 0h1M2 26h1m24 0h1M2 27h1m24 0h1M2 28h26" /><path stroke="#fff" d="M29 5h1m-2 1h1M2 7h26M1 8h1M1 9h1m24 0h1M1 10h1m24 0h1M1 11h1m24 0h1M1 12h1m24 0h1M1 13h1m24 0h1M1 14h1m24 0h1M1 15h1m24 0h1M1 16h1m24 0h1M1 17h1m24 0h1M1 18h1m24 0h1M1 19h1m24 0h1M1 20h1m24 0h1M1 21h1m24 0h1M1 22h1m24 0h1M1 23h1m24 0h1M1 24h1m24 0h1M1 25h1m24 0h1M1 26h1m24 0h1M1 27h1m1 0h24M1 28h1" /><path stroke="#000" d="M31 5h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M3 10h22m6 0h1M3 11h1m27 0h1M3 12h1m27 0h1M3 13h1m27 0h1M3 14h1m27 0h1M3 15h1m27 0h1M3 16h1m27 0h1M3 17h1m27 0h1M3 18h1m27 0h1M3 19h1m27 0h1M3 20h1m27 0h1M3 21h1m27 0h1M3 22h1m27 0h1M3 23h1m27 0h1M3 24h1m27 0h1M3 25h1m27 0h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M1 30h28" /><path stroke="teal" d="M4 11h10m1 0h10M4 12h9m3 0h9M4 13h8m5 0h8M4 14h10m1 0h10M4 15h10m1 0h10M4 16h2m1 0h7m1 0h7m1 0h2M4 17h1m2 0h15m2 0h1m-15 1h9M4 19h1m2 0h15m2 0h1M4 20h2m1 0h7m1 0h7m1 0h2M4 21h10m1 0h10M4 22h10m1 0h10M4 23h8m5 0h8M4 24h9m3 0h9M4 25h10m1 0h10" /><path stroke="red" d="M14 11h1m-2 1h3m-4 1h5m-3 1h1m-1 1h1m-9 1h1m7 0h1m7 0h1M5 17h2m15 0h2M4 18h6m9 0h6M5 19h2m15 0h2M6 20h1m7 0h1m7 0h1m-9 1h1m-1 1h1m-3 1h5m-4 1h3m-2 1h1" /></svg>;

export const plustab104Data = {
  '32x32_4': Plustab104_32x32_4
};

export interface Plustab104Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Plustab104Component = ({
  variant = '32x32_4',
  ...rest
}: Plustab104Props) => {
  const Svg = plustab104Data[variant];

  return <Svg {...rest} />;
};

export const Plustab104 = React.memo(Plustab104Component);
Plustab104.displayName = 'Plustab104';
