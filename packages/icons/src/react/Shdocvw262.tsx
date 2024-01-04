import React from 'react';
import type { SVGProps } from "react";

const Shdocvw262_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="#000" d="M11 0h1m-1 2h1M8 3h1m5 0h1M3 4h4m2 0h1m1 0h1m1 0h1M2 5h1m4 0h1m2 0h1m1 0h1M1 6h10m2 0h1m1 0h1M1 7h1m9 0h2M1 8h1m9 0h1m1 0h1M1 9h1m9 0h1m2 0h1M1 10h1m9 0h1M1 11h1m9 0h1M1 12h1m9 0h1M1 13h11" /><path stroke="#ff0" d="M3 5h4M2 7h9M2 8h9M2 9h9m-9 1h9m-9 1h9m-9 1h9" /><path stroke="silver" d="M11 5h1m-1 1h2" /></svg>;
const Shdocvw262_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="#fff" d="M0 0h16M0 1h16M0 2h11m1 0h4M0 3h16M0 4h11m1 0h4M0 5h8m1 0h5m1 0h1M0 6h3m4 0h2m1 0h1m1 0h1m1 0h2M0 7h2m6 0h2m1 0h1m1 0h3M0 8h1m10 0h2m1 0h1M0 9h1m12 0h3M0 10h1m11 0h1m1 0h2M0 11h1m11 0h2m1 0h1M0 12h1m11 0h4M0 13h1m11 0h4M0 14h1m11 0h4M0 15h1m11 0h4" /><path stroke="#000" d="M11 2h1m-1 2h1M8 5h1m5 0h1M3 6h4m2 0h1m1 0h1m1 0h1M2 7h1m4 0h1m2 0h1m1 0h1M1 8h10m2 0h1m1 0h1M1 9h1m9 0h2M1 10h1m9 0h1m1 0h1M1 11h1m9 0h1m2 0h1M1 12h1m9 0h1M1 13h1m9 0h1M1 14h1m9 0h1M1 15h11" /><path stroke="#ff0" d="M3 7h4M2 9h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9" /></svg>;

export const shdocvw262Data = {
  '32x32_4': Shdocvw262_32x32_4,
  '16x16_4': Shdocvw262_16x16_4
};

export interface Shdocvw262Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Shdocvw262: React.FC<Shdocvw262Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = shdocvw262Data[variant];

  return <Svg {...rest} />;
};
