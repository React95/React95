import React from 'react';
import type { SVGProps } from "react";

const Setupx1_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M5 0h24M4 1h1m23 0h1M3 2h1m23 0h2M2 3h1m23 0h3M1 4h1m24 0h3M1 5h1m2 0h20m2 0h3M1 6h1m24 0h3M1 7h1m24 0h3M1 8h1m24 0h3M1 9h1m24 0h3M1 10h1m24 0h3M1 11h1m24 0h3M1 12h1m24 0h3M1 13h1m24 0h3M1 14h1m24 0h3M1 15h1m24 0h3M1 16h1m24 0h3M1 17h1m24 0h3M1 18h1m24 0h3M1 19h1m24 0h3M1 20h1m24 0h3M1 21h1m24 0h3M1 22h1m24 0h2M1 23h26m-17 2h1m6 0h1M7 26h4m7 0h4M5 27h2m14 0h2M4 28h1m17 0h2M4 29h1m17 0h2m-4 1h2" /><path stroke="silver" d="M5 1h22M4 2h22M3 4h23M3 5h1m21 0h1M3 6h1m21 0h1M3 7h1m21 0h1M3 8h1m21 0h1M3 9h1m21 0h1M3 10h1m21 0h1M3 11h1m21 0h1M3 12h1m21 0h1M3 13h1m21 0h1M3 14h1m21 0h1M3 15h1m21 0h1M3 16h1m21 0h1M3 17h1m21 0h1M3 18h1m21 0h1M3 19h1m21 0h1M3 20h1m21 0h1M3 21h1m21 0h1M3 22h23m-14 3h5m-5 1h6M7 27h3m1 0h10m-11 1h12M8 29h14M7 30h1m10 0h2" /><path stroke="#fff" d="M27 1h1m-2 1h1M3 3h23M2 4h1M2 5h1m21 0h1M2 6h1m21 0h1M2 7h1m21 0h1M2 8h1m21 0h1M2 9h1m21 0h1M2 10h1m21 0h1M2 11h1m21 0h1M2 12h1m21 0h1M2 13h1m21 0h1M2 14h1m21 0h1M2 15h1m21 0h1M2 16h1m21 0h1M2 17h1m21 0h1M2 18h1m21 0h1M2 19h1m21 0h1M2 20h1m21 0h1M2 21h1m1 0h21M2 22h1m8 3h1m-1 1h1m-2 1h1m-6 1h5m-5 1h3m0 1h10" /><path stroke="#000" d="M29 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M4 6h19m6 0h1M4 7h1m24 0h1M4 8h1m24 0h1M4 9h1m24 0h1M4 10h1m24 0h1M4 11h1m24 0h1M4 12h1m24 0h1M4 13h1m24 0h1M4 14h1m24 0h1M4 15h1m24 0h1M4 16h1m24 0h1M4 17h1m24 0h1M4 18h1m24 0h1M4 19h1m24 0h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M2 24h25m-9 1h1m4 2h1m0 1h1m-1 1h1M5 30h2m15 0h2M7 31h15" /><path stroke="navy" d="M23 6h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M4 20h20" /><path stroke="#00f" d="M5 7h18M5 8h2m1 0h15M5 9h2m1 0h15M5 10h2m1 0h15M5 11h18M5 12h18M5 13h18M5 14h18M5 15h18M5 16h18M5 17h18M5 18h18M5 19h18" /><path stroke="#0ff" d="M7 8h1M7 9h1m-1 1h1" /></svg>;

export const setupx1Data = {
  '32x32_4': Setupx1_32x32_4
};

export interface Setupx1Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Setupx1Component = ({
  variant = '32x32_4',
  ...rest
}: Setupx1Props) => {
  const Svg = setupx1Data[variant];

  return <Svg {...rest} />;
};

export const Setupx1 = React.memo(Setupx1Component);
Setupx1.displayName = 'Setupx1';
