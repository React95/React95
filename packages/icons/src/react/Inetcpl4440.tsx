import React from 'react';
import type { SVGProps } from "react";

const Inetcpl4440_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="olive" d="M6 0h3M5 1h1M4 2h1m2 0h1M4 3h1m1 0h1m1 0h1M3 4h1M3 5h1M2 6h1m3 0h1m1 0h1M2 7h1m3 0h1m1 0h1M1 8h1M1 9h1m5 0h1m-8 1h1m5 0h1m1 0h1m-9 1h1m5 0h1m1 0h1" /><path stroke="#ff0" d="M6 1h3M5 2h2m1 0h2M5 3h1m3 0h1M4 4h2m3 0h2M4 5h2m3 0h2M3 6h3m3 0h3M3 7h3m3 0h3M2 8h5m1 0h5M2 9h5m1 0h5M1 10h5m3 0h5M1 11h5m3 0h5M2 12h11" /><path stroke="#000" d="M9 1h1m0 1h1M7 3h1m2 0h1M6 4h3m2 0h1M6 5h3m2 0h1M7 6h1m4 0h1M7 7h1m4 0h1M7 8h1m5 0h1m-1 1h1m-7 1h1m6 0h1m-8 1h1m6 0h1M1 12h1m11 0h1M2 13h11" /><path stroke="gray" d="M10 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-2 1h1M1 13h1m11 0h1M2 14h11" /></svg>;

export const inetcpl4440Data = {
  '16x16_4': Inetcpl4440_16x16_4
};

export interface Inetcpl4440Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

const Inetcpl4440Component = ({
  variant = '16x16_4',
  ...rest
}: Inetcpl4440Props) => {
  const Svg = inetcpl4440Data[variant];

  return <Svg {...rest} />;
};

export const Inetcpl4440 = React.memo(Inetcpl4440Component);
Inetcpl4440.displayName = 'Inetcpl4440';
