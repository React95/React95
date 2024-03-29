import React from 'react';
import type { SVGProps } from "react";

const Regedit205_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M0 0h13M0 1h1m11 0h2M0 2h1m11 0h1m1 0h1M0 3h1m11 0h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m6 0h1m4 0h1M3 14h1m9 0h1" /><path stroke="#fff" d="M1 1h11M1 2h11m1 0h1M1 3h7m2 0h2M1 4h7m2 0h4M1 5h2m4 0h1m4 0h2M1 6h4m2 0h1m2 0h1m2 0h1M1 7h2m4 0h1m2 0h1m2 0h1M1 8h1m2 0h1m2 0h1m2 0h1m2 0h1M1 9h2m9 0h2M1 10h13M1 11h13M2 12h6m4 0h2m-1 1h1" /><path stroke="maroon" d="M8 3h2M8 4h2M3 5h3m2 0h4M5 6h2m1 0h2m1 0h2M3 7h4m1 0h2m1 0h2M2 8h2m1 0h2m1 0h2m1 0h2M3 9h9" /><path stroke="#000" d="M13 3h3m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 13h2m5 0h4m3 0h1M4 14h4m4 0h1m2 0h1m-3 1h3" /><path stroke="silver" d="M14 4h1M6 5h1m7 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 12h1m6 0h4m2 0h1M3 13h4m7 0h1m-1 1h1" /></svg>;

export const regedit205Data = {
  '16x16_4': Regedit205_16x16_4
};

export interface Regedit205Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Regedit205: React.FC<Regedit205Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = regedit205Data[variant];

  return <Svg {...rest} />;
};
