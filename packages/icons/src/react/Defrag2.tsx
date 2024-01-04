import React from 'react';
import type { SVGProps } from "react";

const Defrag2_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M4 15h26M3 16h1m25 0h1M2 17h1m25 0h2M1 18h1m25 0h3M1 19h1m25 0h3M1 20h1m25 0h3M1 21h1m7 0h8m10 0h3M1 22h1m3 0h4m8 0h4m6 0h3M1 23h1m25 0h3M1 24h1m25 0h3M1 25h1m25 0h3M1 26h1m25 0h2M1 27h27" /><path stroke="silver" d="M4 16h25M3 17h25M3 19h24M3 20h19m2 0h3M3 21h6m8 0h5m2 0h3M3 22h2m16 0h6M3 23h2m16 0h6M3 24h6m8 0h10M3 25h24M3 26h24" /><path stroke="#000" d="M30 16h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M9 22h8m13 0h1M9 23h8m13 0h1m-1 1h1m-1 1h1m-2 1h1m-2 1h1M2 28h26" /><path stroke="#fff" d="M2 18h25M2 19h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m2 0h4m8 0h4M2 24h1m6 0h8M2 25h1m-1 1h1" /><path stroke="red" d="M22 20h2m-2 1h2" /></svg>;
const Defrag2_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="1em" height="1em" {...props}><path stroke="gray" d="M2 5h13M1 6h1m12 0h1M0 7h1m12 0h2M0 8h1m4 0h4m4 0h2M0 9h1m1 0h3m4 0h3m1 0h2M0 10h1m12 0h2M0 11h1m12 0h2M0 12h14" /><path stroke="silver" d="M2 6h12M1 8h4m4 0h2m1 0h1M1 9h1m10 0h1M1 10h4m4 0h4M1 11h12" /><path stroke="#000" d="M15 6h1m-1 1h1m-1 1h1M5 9h4m6 0h1m-1 1h1m-1 1h1m-2 1h1M1 13h13" /><path stroke="#fff" d="M1 7h12m-8 3h4" /><path stroke="red" d="M11 8h1" /></svg>;

export const defrag2Data = {
  '32x32_4': Defrag2_32x32_4,
  '16x16_4': Defrag2_16x16_4
};

export interface Defrag2Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Defrag2: React.FC<Defrag2Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = defrag2Data[variant];

  return <Svg {...rest} />;
};
