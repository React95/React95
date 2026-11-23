import React from 'react';
import type { SVGProps } from "react";

const Thumbvw100_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M24 1h6m-7 1h1m5 0h1m-8 1h1m6 0h1m-9 1h1m5 0h2m-9 1h1m5 0h1m-8 1h1m6 0h1m-9 1h1m6 0h1m-8 1h1m5 0h1m-8 1h1m5 0h1m-8 1h1m5 0h1m-7 1h1m5 0h1m-8 1h1m5 0h1m-8 1h1m5 0h1m-7 1h1m5 0h1m-8 1h1m5 0h1m-7 1h1m5 0h1m-8 1h1m5 0h1M3 18h4m5 0h1m4 0h1M2 19h1m4 0h1m3 0h1m5 0h1M1 20h1m6 0h1m2 0h1m4 0h1M1 21h1m7 0h2m5 0h1M1 22h1m8 0h1m4 0h1M2 23h1m12 0h1M3 24h1m11 0h1M4 25h1m9 0h1M5 26h1m8 0h1M5 27h1m7 0h1m-8 1h1m6 0h1m-7 1h6" /><path stroke="maroon" d="M24 2h2m2 1h1m-9 3h1m4 0h1m-7 1h1m4 0h1m-2 1h1m-6 1h1m-2 1h1m3 1h1m-6 1h1m-2 1h1m3 1h1m-6 1h1m3 1h1m-6 1h1m3 0h1M3 19h1m2 0h1m5 0h1m3 0h1m-6 2h1m3 0h1M2 22h1m6 0h1m-7 1h1m6 0h1m3 0h1M4 24h1m9 0h1M5 25h1m7 1h1m-8 1h1m0 1h1m4 0h1" /><path stroke="red" d="M26 2h3m-6 1h5m-6 1h5m-6 1h5m-5 1h4m-5 1h4m-5 1h4m-4 1h4m-5 1h4m-5 1h4m-4 1h4m-5 1h4m-5 1h4m-4 1h4m-5 1h4m-4 1h3m-4 1h4M4 19h2m7 0h3M2 20h6m4 0h4M2 21h7m3 0h3M3 22h6m2 0h4M4 23h6m1 0h3m-9 1h9m-8 1h8m-8 1h7m-6 1h6m-5 1h4" /></svg>;

export const thumbvw100Data = {
  '32x32_4': Thumbvw100_32x32_4
};

export interface Thumbvw100Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Thumbvw100Component = ({
  variant = '32x32_4',
  ...rest
}: Thumbvw100Props) => {
  const Svg = thumbvw100Data[variant];

  return <Svg {...rest} />;
};

export const Thumbvw100 = React.memo(Thumbvw100Component);
Thumbvw100.displayName = 'Thumbvw100';
