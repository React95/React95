import React from 'react';
import type { SVGProps } from "react";

const Shdocvw206_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M11 0h1m-1 2h1M8 3h1m5 0h1M9 4h1m1 0h1m1 0h1m-4 1h1m1 0h1m0 1h1m1 0h1m-5 1h2m-2 1h1m1 0h1m-3 1h1m2 0h1m-4 1h1m-1 1h1m-1 1h1M1 13h11" /><path stroke="gray" d="M3 4h4M2 5h1m4 0h1M1 6h1m6 0h4M1 7h1M1 8h1M1 9h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#ff0" d="M3 5h1m1 0h1M3 7h1m1 0h1m1 0h1m1 0h1M4 8h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1" /><path stroke="silver" d="M4 5h1m1 0h1M4 7h1m1 0h1m1 0h1m1 0h1M3 8h1m1 0h1m1 0h1m1 0h1M4 9h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h1" /><path stroke="#fff" d="M2 6h6M2 7h1M2 8h1M2 9h1m-1 1h1m-1 1h1m-1 1h1" /></svg>;
const Shdocvw206_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#fff" d="M0 0h16M0 1h16M0 2h11m1 0h4M0 3h16M0 4h11m1 0h4M0 5h8m1 0h5m1 0h1M0 6h3m4 0h2m1 0h1m1 0h1m1 0h2M0 7h2m6 0h2m1 0h1m1 0h3M0 8h1m10 0h2m1 0h1M0 9h1m12 0h3M0 10h1m11 0h1m1 0h2M0 11h1m11 0h2m1 0h1M0 12h1m11 0h4M0 13h1m11 0h4M0 14h1m11 0h4M0 15h1m11 0h4" /><path stroke="#000" d="M11 2h1m-1 2h1M8 5h1m5 0h1M3 6h4m2 0h1m1 0h1m1 0h1M2 7h1m4 0h1m2 0h1m1 0h1M1 8h10m2 0h1m1 0h1M1 9h1m9 0h2M1 10h1m9 0h1m1 0h1M1 11h1m9 0h1m2 0h1M1 12h1m9 0h1M1 13h1m9 0h1M1 14h1m9 0h1M1 15h11" /><path stroke="#ff0" d="M3 7h4M2 9h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9" /></svg>;

export const shdocvw206Data = {
  '32x32_4': Shdocvw206_32x32_4,
  '16x16_4': Shdocvw206_16x16_4
};

export interface Shdocvw206Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Shdocvw206Component = ({
  variant = '32x32_4',
  ...rest
}: Shdocvw206Props) => {
  const Svg = shdocvw206Data[variant];

  return <Svg {...rest} />;
};

export const Shdocvw206 = React.memo(Shdocvw206Component);
Shdocvw206.displayName = 'Shdocvw206';
