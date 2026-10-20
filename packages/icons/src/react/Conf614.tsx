import React from 'react';
import type { SVGProps } from "react";

const Conf614_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M7 0h4M5 1h2m4 0h2M4 2h1m8 0h1M4 3h1M0 4h12m2 0h1M0 5h1m10 0h1m2 0h1M0 6h1m13 0h1M0 7h1m13 0h1M0 8h1M0 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h9" /><path stroke="gray" d="M7 1h1M5 3h1M3 5h1M2 8h5m-5 2h4" /><path stroke="teal" d="M8 1h1M5 2h1m5 0h1M6 3h1m4 0h1m1 1h1" /><path stroke="green" d="M9 1h2M6 2h2m2 0h1m1 0h1m-1 1h1" /><path stroke="#00f" d="M8 2h2M7 3h1m1 0h2m2 0h1m-2 1h1m-1 1h1m-1 1h1" /><path stroke="navy" d="M8 3h1M1 5h1m2 0h7m2 0h1M1 6h8m4 0h1" /><path stroke="#fff" d="M2 5h1M1 7h6M1 8h1m6 0h2m1 0h2M1 9h5m3 0h3M1 10h1m7 0h3M1 11h6m1 0h2m1 0h2M1 12h6" /><path stroke="red" d="M9 6h3M7 7h7M7 8h1m2 0h1m2 0h1M6 9h3m3 0h3m-9 1h3m3 0h3m-8 1h1m2 0h1m2 0h1m-7 1h7m-5 1h3" /></svg>;

export const conf614Data = {
  '16x16_4': Conf614_16x16_4
};

export interface Conf614Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Conf614Component = ({
  variant = '16x16_4',
  ...rest
}: Conf614Props) => {
  const Svg = conf614Data[variant];

  return <Svg {...rest} />;
};

export const Conf614 = React.memo(Conf614Component);
Conf614.displayName = 'Conf614';
