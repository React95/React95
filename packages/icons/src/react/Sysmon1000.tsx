import React from 'react';
import type { SVGProps } from "react";

const Sysmon1000_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M0 0h31M0 1h1m29 0h1M0 2h1m29 0h1M0 3h1m29 0h1M0 4h1m29 0h1M0 5h1m29 0h1M0 6h1m29 0h1M0 7h1m29 0h1M0 8h1m29 0h1M0 9h1m29 0h1M0 10h1m6 0h1m22 0h1M0 11h1m5 0h1m1 0h1m21 0h1M0 12h1m5 0h1m2 0h1m20 0h1M0 13h1m4 0h1m4 0h1m19 0h1M0 14h1m4 0h1m5 0h1m13 0h3m2 0h1M0 15h5m7 0h4m8 0h1m3 0h1m1 0h1M0 16h1m15 0h1m7 0h1m4 0h2M0 17h1m15 0h1m6 0h1m6 0h1M0 18h1m16 0h1m5 0h1m6 0h1M0 19h1m16 0h1m4 0h1m7 0h1M0 20h1m17 0h4m8 0h1M0 21h1m29 0h1M0 22h1m29 0h1M0 23h1m14 0h2m9 0h1m3 0h1M0 24h1m13 0h1m2 0h1m7 0h1m1 0h1m2 0h1M0 25h4m9 0h1m4 0h1m6 0h1m2 0h1m1 0h1M0 26h1m3 0h2m4 0h3m6 0h6m4 0h2M0 27h1m5 0h4m20 0h1M0 28h1m29 0h1M0 29h31M0 30h31" /><path stroke="#fff" d="M31 0h1M1 1h29M1 2h29M1 3h29M1 4h29M1 5h29M1 7h29M1 8h29M1 9h29M1 10h6m1 0h22M1 11h5m3 0h21M1 13h4m6 0h19M1 14h4m7 0h13m3 0h2m-14 1h8m5 0h1m-13 1h7m-7 1h6m-5 2h4M0 31h1" /><path stroke="gray" d="M31 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 31h31" /><path stroke="silver" d="M1 6h29M1 12h5m4 0h20m-12 6h5" /><path stroke="purple" d="M7 11h1m-1 1h2m-3 1h4m-4 1h5m-6 1h7m13 0h3M1 16h15m9 0h4M1 17h15m8 0h6M1 18h16m7 0h6M1 19h16m6 0h7M1 20h17m4 0h8M1 21h29M1 22h29M1 23h14m2 0h9m1 0h3M1 24h13m4 0h7m3 0h2M4 25h9m6 0h6m4 0h1M6 26h4" /><path stroke="#0ff" d="M15 24h2m9 0h1m-13 1h4m8 0h2M1 26h3m9 0h6m6 0h4M1 27h5m4 0h20M1 28h29" /></svg>;

export const sysmon1000Data = {
  '32x32_4': Sysmon1000_32x32_4
};

export interface Sysmon1000Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Sysmon1000: React.FC<Sysmon1000Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = sysmon1000Data[variant];

  return <Svg {...rest} />;
};
