import React from 'react';
import type { SVGProps } from "react";

const Iosclass3_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M4 8h26M3 9h1m25 0h1M2 10h1m25 0h2M1 11h1m25 0h3M1 12h1m25 0h3M1 13h1m25 0h3M1 14h1m25 0h3M1 15h1m8 0h8m9 0h3M1 16h1m2 0h6m8 0h6m3 0h3M1 17h1m25 0h3M1 18h1m25 0h3M1 19h1m25 0h2M1 20h27" /><path stroke="silver" d="M4 9h25M3 10h25M3 12h24M3 13h19m2 0h3M3 14h19m2 0h3M3 15h7m8 0h9M3 16h1m20 0h3M3 17h1m20 0h3M3 18h7m8 0h9M3 19h24" /><path stroke="#000" d="M30 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-21 1h8m12 0h1m-21 1h8m12 0h1m-1 1h1m-2 1h1m-2 1h1M2 21h26" /><path stroke="#fff" d="M2 11h25M2 12h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 0h6m8 0h6M2 18h1m7 0h8M2 19h1" /><path stroke="red" d="M22 13h2m-2 1h2" /></svg>;
const Iosclass3_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M2 3h13M1 4h1m12 0h1M0 5h1m12 0h2M0 6h1m12 0h2M0 7h1m4 0h4m4 0h2M0 8h1m1 0h3m4 0h3m1 0h2M0 9h1m12 0h2M0 10h14" /><path stroke="silver" d="M2 4h12M1 6h10m1 0h1M1 7h4m4 0h4M1 8h1m10 0h1M1 9h4m4 0h4" /><path stroke="#000" d="M15 4h1m-1 1h1m-1 1h1m-1 1h1M5 8h4m6 0h1m-1 1h1m-2 1h1M1 11h13" /><path stroke="#fff" d="M1 5h12M5 9h4" /><path stroke="red" d="M11 6h1" /></svg>;

export const iosclass3Data = {
  '32x32_4': Iosclass3_32x32_4,
  '16x16_4': Iosclass3_16x16_4
};

export interface Iosclass3Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Iosclass3Component = ({
  variant = '32x32_4',
  ...rest
}: Iosclass3Props) => {
  const Svg = iosclass3Data[variant];

  return <Svg {...rest} />;
};

export const Iosclass3 = React.memo(Iosclass3Component);
Iosclass3.displayName = 'Iosclass3';
