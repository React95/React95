import React from 'react';
import type { SVGProps } from "react";

const Icwconn1202_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M23 2h1m0 1h1m0 1h1m-8 2h1m10 0h1M19 7h1m8 0h1m-9 1h1m6 0h1m-1 1h1m-5 1h2m3 0h1m-8 1h2m2 0h2m1 0h1m-10 1h2m6 0h3" /><path stroke="green" d="M22 3h1m-2 1h1m-4 1h4m4 0h4M20 9h1m-2 1h1m-1 1h1m-2 1h1" /><path stroke="#0f0" d="M23 4h1m-1 1h2m-3 1h6m-7 1h6m-5 1h5m-5 1h5m-6 1h1m4 0h1" /><path stroke="silver" d="M24 4h1m0 1h1m2 1h1m-9 1h1m6 0h1m-7 1h1m0 2h1m2 0h1m1 0h1m-1 1h1" /></svg>;
const Icwconn1202_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#000" d="M7 2h1m0 1h1m0 1h1M2 6h1m10 0h1M3 7h1m8 0h1M4 8h1m6 0h1m-1 1h1m-5 1h2m3 0h1m-8 1h2m2 0h2m1 0h1M3 12h2m6 0h3" /><path stroke="green" d="M6 3h1M5 4h1M2 5h4m4 0h4M4 9h1m-2 1h1m-1 1h1m-2 1h1" /><path stroke="#0f0" d="M7 4h1M7 5h2M6 6h6M5 7h6M6 8h5M6 9h5m-6 1h1m4 0h1" /><path stroke="silver" d="M8 4h1m0 1h1m2 1h1M4 7h1m6 0h1M5 8h1m0 2h1m2 0h1m1 0h1m-1 1h1" /></svg>;

export const icwconn1202Data = {
  '32x32_4': Icwconn1202_32x32_4,
  '16x16_4': Icwconn1202_16x16_4
};

export interface Icwconn1202Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Icwconn1202Component = ({
  variant = '32x32_4',
  ...rest
}: Icwconn1202Props) => {
  const Svg = icwconn1202Data[variant];

  return <Svg {...rest} />;
};

export const Icwconn1202 = React.memo(Icwconn1202Component);
Icwconn1202.displayName = 'Icwconn1202';
