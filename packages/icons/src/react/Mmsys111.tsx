import React from 'react';
import type { SVGProps } from "react";

const Mmsys111_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M0 10h1m0 1h1m0 1h1m8 0h1m6 0h1M2 13h1m8 0h1m7 0h1M0 14h2m1 0h8m8 0h1m5 0h1M0 15h1m2 0h1m15 0h1m1 0h1m3 0h1m-7 1h1m1 0h1m3 0h1m-7 1h1m1 0h1m3 0h1m-13 1h1m1 0h2m2 0h4m2 0h1m-7 1h1m3 0h1m1 0h1m-7 1h1m4 0h1M4 21h15" /><path stroke="gray" d="M31 10h1M0 11h1m2 0h15m12 0h2M0 12h1m11 0h1m16 0h1m1 0h1M0 13h2m1 0h1m1 0h2m1 0h1m1 0h1m1 0h1m5 0h1m5 0h1m3 0h1m2 0h1m-21 1h2m5 0h1m1 0h4m3 0h1m3 0h1M4 15h8m6 0h1m7 0h1m4 0h1M3 16h1m14 0h1m12 0h1M3 17h1m14 0h1m1 0h1m1 0h2m2 0h1m1 0h1m1 0h2M3 18h1m14 0h1m4 0h2m2 0h1m1 0h1m1 0h1M3 19h1m14 0h1m5 0h1m3 0h1m1 0h2M3 20h16m10 0h1m1 0h1m-2 1h2m-1 1h1" /><path stroke="#fff" d="M1 12h1m1 0h8m3 1h1m1 0h1m7 1h1m4 0h1m-10 1h1m1 0h2m4 0h1M4 16h1m22 0h1M4 17h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M13 12h5m12 0h1M4 13h1m2 0h1m1 0h1m3 0h1m1 0h1m1 0h1m11 0h2m-18 1h5m10 0h1m-17 1h6m6 0h1m2 0h1m2 0h1M5 16h13m2 0h1m1 0h3m1 0h1m2 0h1M5 17h13m6 0h1M6 18h7m1 0h1m2 0h1m10 0h1m1 0h1M5 19h13m11 0h1m0 1h1" /><path stroke="#ff0" d="M30 14h1m-2 1h1m-2 1h1m1 0h1m-4 1h1m1 0h1" /><path stroke="red" d="M5 18h1" /></svg>;
const Mmsys111_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M0 4h1M0 5h2m1 0h9M0 6h1m10 0h1m2 0h2M0 7h1m10 0h1m1 0h1m-3 1h1M2 9h1m8 0h1m2 0h1M2 10h1m8 0h1M2 11h10" /><path stroke="#fff" d="M1 6h1m1 0h4m7 1h1m-2 1h1" /><path stroke="#000" d="M2 6h1m5 0h1m3 0h1M1 7h2m5 0h1m3 0h1m2 0h1M0 8h1m1 0h6m4 0h1m2 0h1m-4 1h2m1 0h1m-8 1h1m1 0h1m1 0h1m1 0h2m-4 1h1M2 12h11" /><path stroke="silver" d="M7 6h1m1 0h2M3 7h5m1 0h2M8 8h3m3 0h1M3 9h8m-7 1h4m1 0h1" /><path stroke="red" d="M3 10h1" /></svg>;

export const mmsys111Data = {
  '32x32_4': Mmsys111_32x32_4,
  '16x16_4': Mmsys111_16x16_4
};

export interface Mmsys111Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mmsys111: React.FC<Mmsys111Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mmsys111Data[variant];

  return <Svg {...rest} />;
};
