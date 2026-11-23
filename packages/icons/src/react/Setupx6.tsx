import React from 'react';
import type { SVGProps } from "react";

const Setupx6_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M0 9h8m6 0h18M0 10h1m12 0h1m17 0h1M0 11h7m5 0h1m2 0h17M7 12h1m6 0h1m-7 1h1m4 0h1m-5 1h1m2 0h1m-2 1h1m-3 1h1m1 0h1m-3 1h1m1 0h1m-4 1h2m1 0h1m1 0h1m-7 1h1m-1 1h1m1 2h3m-3 1h1m1 0h1m-3 1h1m1 0h1m-3 1h3" /><path stroke="#fff" d="M1 10h7m6 0h17M8 11h1m4 0h1m-5 1h1m2 0h1m-3 1h2" /><path stroke="#000" d="M8 10h1m0 1h1M0 12h7m3 0h2m3 0h17M7 13h1m6 0h1m-7 1h1m4 0h1m-5 1h1m2 0h1m-1 1h1m-1 1h1m-1 1h1m1 1h1m-1 1h1m-8 1h1m6 0h1m-7 1h1m3 0h2m-2 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M7 11h1m6 0h1m-7 1h1m4 0h1m-5 1h1m2 0h1m-3 1h2m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-1 5h1m-1 1h1" /><path stroke="#ff0" d="M8 19h5m-5 1h5" /><path stroke="olive" d="M13 19h1m-1 1h1m-6 1h6" /></svg>;

export const setupx6Data = {
  '32x32_4': Setupx6_32x32_4
};

export interface Setupx6Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Setupx6Component = ({
  variant = '32x32_4',
  ...rest
}: Setupx6Props) => {
  const Svg = setupx6Data[variant];

  return <Svg {...rest} />;
};

export const Setupx6 = React.memo(Setupx6Component);
Setupx6.displayName = 'Setupx6';
