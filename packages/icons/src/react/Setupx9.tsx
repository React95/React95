import React from 'react';
import type { SVGProps } from "react";

const Setupx9_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M3 5h22M2 6h1m21 0h1M1 7h1m21 0h2M0 8h1m21 0h3M0 9h1m21 0h3M0 10h1m21 0h3M0 11h1m21 0h3M0 12h1m2 0h28M0 13h1m6 0h1m22 0h1M0 14h1m2 0h4m22 0h2M0 15h1m4 0h1m22 0h3M0 16h1m4 0h1m22 0h3M0 17h6m22 0h3M5 18h1m22 0h3M5 19h1m2 0h18m2 0h3M5 20h1m22 0h3M5 21h1m2 0h18m2 0h3M5 22h1m22 0h3M5 23h1m22 0h2M5 24h24" /><path stroke="silver" d="M3 6h21M2 7h21M2 9h15m3 0h2M2 10h15m3 0h2M2 11h20M2 12h1m-1 1h1m5 0h22M2 14h1m4 0h22M2 15h1m-1 1h3m2 0h16m3 0h2M7 17h16m3 0h2M7 18h21M7 19h1m18 0h2M7 20h1m18 0h2M7 21h1m18 0h2M7 22h1m18 0h2M7 23h21" /><path stroke="#000" d="M25 6h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m5 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 18h4m26 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M6 25h23" /><path stroke="#fff" d="M1 8h21M1 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h4m-6 1h1m-1 1h1m1 0h2m1 0h22M1 16h1m4 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h18M6 21h1m-1 1h1m1 0h18M6 23h1" /><path stroke="#0f0" d="M17 9h3m3 7h3" /><path stroke="green" d="M17 10h3m3 7h3" /></svg>;

export const setupx9Data = {
  '32x32_4': Setupx9_32x32_4
};

export interface Setupx9Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Setupx9Component = ({
  variant = '32x32_4',
  ...rest
}: Setupx9Props) => {
  const Svg = setupx9Data[variant];

  return <Svg {...rest} />;
};

export const Setupx9 = React.memo(Setupx9Component);
Setupx9.displayName = 'Setupx9';
