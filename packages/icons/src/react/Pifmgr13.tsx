import React from 'react';
import type { SVGProps } from "react";

const Pifmgr13_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M20 2h1m-2 1h1m1 0h1m-2 1h2m0 1h3m0 1h1m-1 1h1M5 8h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m3 0h1M3 9h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h4M2 10h1m-1 1h1m28 2h1m-1 1h1M5 15h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m1 0h1M5 16h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m1 0h1M3 17h27m1 0h1M7 18h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1M7 19h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m3 0h1m1 0h1M3 20h27m1 0h1M5 21h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m5 0h1m1 0h1M5 22h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m5 0h1m1 0h1M3 23h27m1 0h1M7 24h1m2 0h1m11 0h1m2 0h1m3 0h1m1 0h1M7 25h1m2 0h1m11 0h1m2 0h1m3 0h1m1 0h1M3 26h27m1 0h1m-1 1h1M1 28h30" /><path stroke="#ff0" d="M20 3h1" /><path stroke="gray" d="M1 12h30M0 13h1m29 0h1M0 14h1m1 0h29M0 15h1m1 0h1m27 0h1M0 16h1m1 0h1m27 0h1M0 17h1m1 0h1m27 0h1M0 18h1m1 0h1m27 0h1M0 19h1m1 0h1m27 0h1M0 20h1m1 0h1m27 0h1M0 21h1m1 0h1m27 0h1M0 22h1m1 0h1m27 0h1M0 23h1m1 0h1m27 0h1M0 24h1m1 0h1m27 0h1M0 25h1m1 0h1m27 0h1M0 26h1m1 0h1m27 0h1M0 27h31" /><path stroke="#fff" d="M1 13h29M1 14h1m-1 1h1m1 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M1 16h1m-1 1h1m-1 1h1m1 0h3m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M1 19h1m-1 1h1m-1 1h1m1 0h2m1 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h4M1 22h1m-1 1h1m-1 1h1m1 0h3m2 0h1m2 0h10m2 0h1m2 0h2M1 25h1m-1 1h1" /><path stroke="silver" d="M4 15h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1M3 16h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2M6 18h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h2M3 19h4m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h3M7 21h1m2 0h1m2 0h1m2 0h1m2 0h1m2 0h1m5 0h1M3 22h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h2m1 0h5M6 24h1m2 0h1m11 0h1m2 0h1m3 0h1M3 25h4m1 0h2m1 0h11m1 0h2m1 0h3" /></svg>;

export const pifmgr13Data = {
  '32x32_4': Pifmgr13_32x32_4
};

export interface Pifmgr13Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Pifmgr13Component = ({
  variant = '32x32_4',
  ...rest
}: Pifmgr13Props) => {
  const Svg = pifmgr13Data[variant];

  return <Svg {...rest} />;
};

export const Pifmgr13 = React.memo(Pifmgr13Component);
Pifmgr13.displayName = 'Pifmgr13';
