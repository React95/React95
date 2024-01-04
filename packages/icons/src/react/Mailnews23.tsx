import React from 'react';
import type { SVGProps } from "react";

const Mailnews23_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M3 0h1M3 1h1M3 2h1m3 0h1M0 3h1m2 0h1m2 0h1M1 4h1m1 0h1m1 0h1M2 5h1M0 6h3m2 0h5M3 7h1m1 0h1M2 8h2m2 0h1M1 9h1m1 0h1m-1 1h1" /><path stroke="#ff0" d="M4 0h1M0 2h1m3 0h1M1 3h1m5 0h1M2 4h1m1 0h1m1 0h1M1 5h1m1 0h1m1 0h1m1 0h1m1 0h1M4 6h1M2 7h1m3 0h1M1 8h1m2 0h1m2 0h1M0 9h1m3 1h1" /><path stroke="#fff" d="M4 1h1M4 3h1M0 5h1m3 0h1m1 0h1m1 0h1M3 6h1m0 1h1m2 0h6M5 8h1m2 0h5M4 9h11M5 10h1m6 0h3M4 11h11M4 12h2m6 0h3M4 13h11" /><path stroke="#000" d="M10 6h6m-1 1h1m-1 1h1m-1 1h1m-1 1h1M3 11h1m11 0h1M3 12h1m11 0h1M3 13h1m11 0h1M3 14h13" /><path stroke="maroon" d="M13 7h1m0 1h1" /><path stroke="red" d="M14 7h1m-2 1h1" /><path stroke="#00f" d="M6 10h6m-6 2h6" /></svg>;

export const mailnews23Data = {
  '16x16_4': Mailnews23_16x16_4
};

export interface Mailnews23Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Mailnews23: React.FC<Mailnews23Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = mailnews23Data[variant];

  return <Svg {...rest} />;
};
