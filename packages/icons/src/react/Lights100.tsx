import React from 'react';
import type { SVGProps } from "react";

const Lights100_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M6 9h25M5 10h25M4 11h25m1 0h1M3 12h25m1 0h2m-5 1h1m1 0h3m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h4m-4 1h3m-3 1h2m-2 1h1" /><path stroke="#000" d="M31 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 14h25m5 0h1M0 15h27m4 0h1M0 16h5m4 0h9m4 0h5m4 0h1M0 17h4m6 0h7m6 0h4m4 0h1M0 18h4m6 0h7m6 0h4m4 0h1M0 19h4m6 0h7m6 0h4m3 0h1M0 20h4m6 0h7m6 0h4m2 0h1M0 21h5m4 0h9m4 0h5m1 0h1M0 22h28M1 23h25" /><path stroke="silver" d="M30 10h1m-2 1h1m-2 1h1M2 13h24m1 0h1m-2 1h1" /><path stroke="red" d="M5 16h4m9 0h4M4 17h6m7 0h6M4 18h6m7 0h6M4 19h6m7 0h6M4 20h6m7 0h6M5 21h4m9 0h4" /></svg>;
const Lights100_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M3 3h13M2 4h12M1 5h12m1 0h1M0 6h1m12 0h2m-2 1h2m-2 1h2m-2 1h2m-2 1h1" /><path stroke="silver" d="M14 4h1m-2 1h1M1 6h12" /><path stroke="#000" d="M15 4h1m-1 1h1m-1 1h1M0 7h13m2 0h1M0 8h2m3 0h3m3 0h2m2 0h1M0 9h2m3 0h3m3 0h2m2 0h1M0 10h2m3 0h3m3 0h2m1 0h1M0 11h14M1 12h12" /><path stroke="maroon" d="M2 8h1m1 0h1m3 0h1m1 0h1m-9 2h1m1 0h1m3 0h1m1 0h1" /><path stroke="red" d="M3 8h1m5 0h1M2 9h3m3 0h3m-8 1h1m5 0h1" /></svg>;

export const lights100Data = {
  '32x32_4': Lights100_32x32_4,
  '16x16_4': Lights100_16x16_4
};

export interface Lights100Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Lights100: React.FC<Lights100Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = lights100Data[variant];

  return <Svg {...rest} />;
};
