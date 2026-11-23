import React from 'react';
import type { SVGProps } from "react";

const Setupx53_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M4 10h26M3 11h1m25 0h1M2 12h1m25 0h2M1 13h1m25 0h3M1 14h1m25 0h3M1 15h1m25 0h3M1 16h1m25 0h3M1 17h1m2 0h21m2 0h3M1 18h1m25 0h3M1 19h1m2 0h21m2 0h3M1 20h1m25 0h3M1 21h1m25 0h2M1 22h27" /><path stroke="silver" d="M4 11h25M3 12h25M3 14h19m3 0h2M3 15h19m3 0h2M3 16h24M3 17h1m21 0h2M3 18h1m21 0h2M3 19h1m21 0h2M3 20h1m21 0h2M3 21h24" /><path stroke="#000" d="M30 11h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M2 23h26" /><path stroke="#fff" d="M2 13h25M2 14h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h21M2 19h1m-1 1h1m1 0h21M2 21h1" /><path stroke="green" d="M22 14h3m-3 1h3" /></svg>;

export const setupx53Data = {
  '32x32_4': Setupx53_32x32_4
};

export interface Setupx53Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Setupx53Component = ({
  variant = '32x32_4',
  ...rest
}: Setupx53Props) => {
  const Svg = setupx53Data[variant];

  return <Svg {...rest} />;
};

export const Setupx53 = React.memo(Setupx53Component);
Setupx53.displayName = 'Setupx53';
