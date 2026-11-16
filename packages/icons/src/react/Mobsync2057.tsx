import React from 'react';
import type { SVGProps } from "react";

const Mobsync2057_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#0f0" d="M2 4h1m1 2h1" /><path stroke="green" d="M3 4h1M2 5h2m1 0h1M5 6h1M3 7h3" /><path stroke="gray" d="M8 4h4M7 5h1m4 0h2M7 6h1m3 0h1m2 0h1M6 7h1m1 0h1m4 0h2M6 8h1m6 0h2M4 9h3m1 0h1m3 0h1M3 10h1m2 0h4m1 0h1m1 0h1M2 11h1m3 0h1m1 0h3m-9 1h3m2 0h1m3 0h2m-8 1h2m2 0h2m-4 1h2" /><path stroke="#fff" d="M8 5h1M7 9h1m-3 2h1m1 0h1m-2 1h1m1 0h1" /><path stroke="silver" d="M9 5h3M8 6h1m3 0h2M7 7h1M7 8h1m5 1h1M4 10h2m4 0h1m1 0h1M3 11h2m6 0h2m-8 1h1m3 0h2m-4 1h2" /><path stroke="navy" d="M9 6h2M9 7h1m2 0h1M8 8h1m0 1h2" /><path stroke="#00f" d="M10 7h2M9 8h4m-2 1h1" /><path stroke="#000" d="M15 7h1m-1 1h1m-2 1h1m-1 1h1m-2 1h1m-1 1h1M3 13h2m6 0h2m-8 1h2m2 0h2m-4 1h2" /></svg>;

export const mobsync2057Data = {
  '16x16_4': Mobsync2057_16x16_4
};

export interface Mobsync2057Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Mobsync2057Component = ({
  variant = '16x16_4',
  ...rest
}: Mobsync2057Props) => {
  const Svg = mobsync2057Data[variant];

  return <Svg {...rest} />;
};

export const Mobsync2057 = React.memo(Mobsync2057Component);
Mobsync2057.displayName = 'Mobsync2057';
