import React from 'react';
import type { SVGProps } from "react";

const Regedit202_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M2 0h11M1 1h1m10 0h1M1 2h1m1 0h8m1 0h1M1 3h1m1 0h1m8 0h1M1 4h1m1 0h1m8 0h1M1 5h1m1 0h1m8 0h1M1 6h1m1 0h1m8 0h1M1 7h1m1 0h1m8 0h1M1 8h1m10 0h1M1 9h12M0 10h1m12 0h1M0 11h1m7 0h4m1 0h1M0 12h1m12 0h1M0 13h1m12 0h1M0 14h14" /><path stroke="silver" d="M2 1h10M2 2h1m8 0h1M2 3h1m8 0h1M2 4h1m8 0h1M2 5h1m8 0h1M2 6h1m8 0h1M2 7h1m8 0h1M2 8h10M2 11h6m4 0h1M2 12h6m4 0h1M2 13h11" /><path stroke="#000" d="M13 1h1m-1 1h1m-1 1h1M6 4h4m3 0h1M6 5h1m2 0h1m3 0h1M6 6h4m3 0h1m-1 1h1m-1 1h1m-1 1h1m0 1h1m-1 1h1m-7 1h4m2 0h1m-1 1h1m-1 1h1M1 15h13" /><path stroke="#0ff" d="M4 3h7M4 4h2m4 0h1M4 5h2m4 0h1M4 6h2m4 0h1M4 7h7" /><path stroke="#fff" d="M1 10h12M1 11h1m-1 1h1m-1 1h1" /></svg>;

export const regedit202Data = {
  '16x16_4': Regedit202_16x16_4
};

export interface Regedit202Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '16x16_4';
}

export const Regedit202: React.FC<Regedit202Props> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const Svg = regedit202Data[variant];

  return <Svg {...rest} />;
};
