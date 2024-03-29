import React from 'react';
import type { SVGProps } from "react";

const Wgpocpl128_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M1 3h21M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m14 0h12M1 10h1m13 0h1m11 0h1M1 11h1m12 0h1m11 0h2M1 12h1m12 0h1m1 0h9m1 0h2M1 13h1m12 0h1m1 0h1m7 0h1m1 0h2M1 14h1m12 0h1m1 0h1m7 0h1m1 0h2M1 15h1m12 0h1m1 0h1m7 0h1m1 0h2m-14 1h1m1 0h1m7 0h1m1 0h2M5 17h1m8 0h1m1 0h1m7 0h1m1 0h2M5 18h1m8 0h1m1 0h9m1 0h2M5 19h1m8 0h1m11 0h2M5 20h1m8 0h1m11 0h1m1 0h2M5 21h1m8 0h1m12 0h2M5 22h1m7 0h15m1 0h1M0 23h4m5 0h4m15 0h2m-18 1h1m8 0h1m5 0h3m-18 1h1m15 0h2m-18 1h17" /><path stroke="#000" d="M22 3h1m-1 1h1m-1 1h1m-8 1h3m4 0h1m-1 1h1m-1 1h1m5 2h1m-1 1h1m-1 1h1m-12 1h7m4 0h1m-1 1h1m-1 1h1M1 16h13m14 0h1M7 17h1m20 0h1M7 18h1m20 0h1M7 19h1m20 0h1M7 20h1m19 0h1M7 21h1m7 0h12m3 0h1M7 22h1m22 0h1M8 23h1m21 0h1M8 24h1m13 0h5m3 0h1M0 25h4m4 0h4m18 0h1M4 26h5m20 0h1m-17 1h16" /><path stroke="#fff" d="M2 4h16M2 5h1m6 0h9M2 6h13M2 7h1m5 0h10M2 8h19M2 9h14M2 10h8m-8 1h12m1 0h11M2 12h8m5 0h1m9 0h1M2 13h12m1 0h1m9 0h1M2 14h12m1 0h1m9 0h1m-11 1h1m9 0h1m-11 1h1m9 0h1m-11 1h1m9 0h1m-11 1h1m9 0h1m-11 1h11m-13 4h15M5 24h1m7 0h1m-9 1h1m7 0h1" /><path stroke="silver" d="M18 4h4m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-6 2h11M2 15h12m-8 2h1m-1 1h1m-1 1h1m-1 1h1m8 0h11M6 21h1m22 0h1M6 22h1m21 0h1M0 24h4m5 0h3m2 0h1m1 0h5m-7 1h1m1 0h12" /><path stroke="#00f" d="M3 5h6M3 7h5m2 3h5m-5 2h4" /><path stroke="red" d="M18 5h1m1 0h1m-3 2h1m1 0h1" /><path stroke="maroon" d="M19 5h1m-2 1h3m-2 1h1" /><path stroke="teal" d="M17 14h7m-7 1h1m1 0h5m-7 1h7m-7 1h7" /><path stroke="#0ff" d="M18 15h1" /><path stroke="olive" d="M4 23h4m-4 1h1m2 0h1m-4 1h1m2 0h1" /><path stroke="#ff0" d="M6 24h1m-1 1h1" /><path stroke="#0f0" d="M15 24h1" /><path stroke="green" d="M15 25h1" /></svg>;

export const wgpocpl128Data = {
  '32x32_4': Wgpocpl128_32x32_4
};

export interface Wgpocpl128Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Wgpocpl128: React.FC<Wgpocpl128Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wgpocpl128Data[variant];

  return <Svg {...rest} />;
};
