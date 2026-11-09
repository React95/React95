import React from 'react';
import type { SVGProps } from "react";

const Fp20tdo128_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M24 4h3m-3 1h1m2 0h1m-9 1h3m1 0h3m1 0h1m-9 1h1m2 0h1m2 0h3m-9 1h1m1 0h1m3 0h1m-7 1h1m4 0h1m-6 1h2m2 0h1m1 0h1m-6 1h2m3 0h1m-7 1h1m1 0h4m-7 1h1m-2 1h1" /><path stroke="#fff" d="M25 5h1m-6 2h2m1 0h2m-5 1h1m1 0h2m-4 1h3m-1 1h1m1 0h1" /><path stroke="silver" d="M26 5h1m-1 1h1m-3 2h1m-2 1h1m-3 1h1m0 1h3" /><path stroke="olive" d="M17 7h1m-2 1h1m1 0h1m-4 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m12 0h1m-15 1h1m14 0h1M9 15h1m8 0h2m6 0h1M8 16h1m11 0h2m3 0h1m1 0h1M7 17h1m14 0h4m2 0h1M6 18h1m16 0h4m2 0h1M5 19h1m19 0h4m1 0h1M4 20h1m21 0h2m3 0h1M3 21h1m22 0h1m4 0h1M4 22h1m26 0h1M5 23h1m25 0h1M6 24h1m24 0h1M7 25h1m23 0h1M8 26h1m22 0h1M9 27h1m21 0h1m-22 1h1m20 0h1m-21 1h1m19 0h1m-20 1h1m18 0h1m-19 1h19" /><path stroke="#ff0" d="M17 8h1m-2 1h3m-4 1h4m-5 1h6m-7 1h6m1 0h1m-9 1h6m1 0h5m-13 1h6m1 0h7m-15 1h8m2 0h6M9 16h11m2 0h3m1 0h1M8 17h14m4 0h2M7 18h16m4 0h2M6 19h19m4 0h1M5 20h21m2 0h3M4 21h22m1 0h4M5 22h26M6 23h25M7 24h24M8 25h23M9 26h22m-21 1h21m-20 1h20m-19 1h19m-18 1h18" /><path stroke="gray" d="M4 23h1m-2 1h3m-4 1h5m-4 1h5m-4 1h5m-4 1h5m-4 1h5m-4 1h5m-4 1h5" /></svg>;
const Fp20tdo128_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="silver" d="M0 0h12M0 1h12m2 0h1M0 2h7m7 0h1M0 3h5m1 0h1M0 4h4m8 0h1m1 0h2M0 5h3m8 0h1m1 0h3M0 6h2m7 0h1m4 0h2M0 7h1m9 0h3m1 0h2m-3 1h3m-3 1h3m-2 1h2m-1 1h1M0 14h1" /><path stroke="#000" d="M12 0h4m-4 1h1m2 0h1M7 2h3m1 0h3m1 0h1M7 3h1m2 0h1m2 0h3M7 4h1m1 0h1m3 0h1M7 5h1m4 0h1M7 6h2m2 0h1m1 0h1M8 7h2m3 0h1M7 8h1m1 0h4M6 9h1m-2 1h1" /><path stroke="#ff0" d="M5 3h1M4 4h3M3 5h4M2 6h5M1 7h7M0 8h7m1 0h1M0 9h6m1 0h6M0 10h5m1 0h8M0 11h6m2 0h7M0 12h8m2 0h3m1 0h2M1 13h9m4 0h2M2 14h9m4 0h1" /><path stroke="olive" d="M6 11h2m0 1h2m3 0h1m-4 1h4m-3 1h4" /><path stroke="gray" d="M0 13h1m0 1h1" /></svg>;

export const fp20tdo128Data = {
  '32x32_4': Fp20tdo128_32x32_4,
  '16x16_4': Fp20tdo128_16x16_4
};

export interface Fp20tdo128Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Fp20tdo128Component = ({
  variant = '32x32_4',
  ...rest
}: Fp20tdo128Props) => {
  const Svg = fp20tdo128Data[variant];

  return <Svg {...rest} />;
};

export const Fp20tdo128 = React.memo(Fp20tdo128Component);
Fp20tdo128.displayName = 'Fp20tdo128';
