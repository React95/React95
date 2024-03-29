import React from 'react';
import type { SVGProps } from "react";

const Regedit206_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M0 0h13M0 1h1m11 0h2M0 2h1m11 0h1m1 0h1M0 3h1m11 0h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m6 0h1m4 0h1M3 14h1m9 0h1" /><path stroke="#fff" d="M1 1h11M1 2h11m1 0h1M1 3h2m3 0h2m2 0h1M1 4h1m2 0h1m2 0h1m2 0h1m2 0h1M1 5h1m2 0h1m2 0h1m2 0h1m2 0h1M1 6h2m3 0h2m2 0h1m2 0h1M1 7h13M1 8h1m2 0h1m2 0h2m3 0h2M1 9h1m2 0h1m2 0h1m2 0h1m2 0h1M1 10h1m2 0h1m2 0h1m2 0h1m2 0h1M1 11h1m2 0h1m2 0h2m3 0h2M2 12h6m4 0h2m-1 1h1" /><path stroke="#00f" d="M3 3h3m2 0h2m1 0h1M2 4h2m1 0h2m1 0h2m1 0h2M2 5h2m1 0h2m1 0h2m1 0h2M3 6h3m2 0h2m1 0h2M2 8h2m1 0h2m2 0h3M2 9h2m1 0h2m1 0h2m1 0h2M2 10h2m1 0h2m1 0h2m1 0h2M2 11h2m1 0h2m2 0h3" /><path stroke="#000" d="M13 3h3m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 13h2m5 0h4m3 0h1M4 14h4m4 0h1m2 0h1m-3 1h3" /><path stroke="silver" d="M14 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 12h1m6 0h4m2 0h1M3 13h4m7 0h1m-1 1h1" /></svg>;

export const regedit206Data = {
  '16x16_4': Regedit206_16x16_4
};

export interface Regedit206Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Regedit206: React.FC<Regedit206Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = regedit206Data[variant];

  return <Svg {...rest} />;
};
