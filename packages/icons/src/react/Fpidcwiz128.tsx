import React from 'react';
import type { SVGProps } from "react";

const Fpidcwiz128_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#ff0" d="M25 0h1m-7 1h1m4 0h1M15 2h2m1 0h1m5 0h1M13 3h1m9 0h1m-7 1h1m2 0h1M11 5h1m9 0h1m0 1h1m-1 1h1m-1 1h1m2 0h1m-4 1h1m3 0h1m-5 1h1m4 0h1" /><path stroke="maroon" d="M25 1h1m-1 1h1m-9 1h1m6 0h3M7 4h1m6 0h1m1 0h1m4 0h9M5 5h4m4 0h1m8 0h7M3 6h6m7 0h1m6 0h5M2 7h8m13 0h5M2 8h8m2 0h1m10 0h2m1 0h2M1 9h10m12 0h1m3 0h1M1 10h10M0 11h12M0 12h5m3 0h4M0 13h5m4 0h2M0 14h5m-5 1h5m-5 1h5m6 0h4m2 0h7M0 17h5m5 0h5m4 0h4M1 18h4m5 0h6m3 0h3M1 19h4m5 0h6m3 0h3M1 20h4m4 0h7m3 0h2M1 21h5m3 0h2m1 0h4m2 0h3M1 22h5m2 0h3m1 0h4m2 0h2M2 23h4m2 0h3m1 0h4m2 0h2M2 24h4m2 0h2m2 0h4m1 0h3M2 25h8m3 0h6M3 26h7m3 0h6M3 27h6m4 0h6M3 28h6m5 0h4M3 29h5m6 0h4M4 30h4m6 0h4" /><path stroke="gray" d="M26 1h1m-1 1h1m-6 1h2m4 0h3m0 1h1m-2 1h1m-2 1h1m-1 1h1m-1 1h1m-5 1h1m3 0h1m-6 1h1m4 0h1" /><path stroke="#fff" d="M14 3h1m1 0h1m-4 1h1m4 0h1m-5 1h2m-5 1h2m1 0h2m1 0h1" /></svg>;
const Fpidcwiz128_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="#ff0" d="M10 1h1M9 2h1M9 3h1M8 4h1M5 5h1m0 1h1m0 1h1M3 8h1m3 0h1M7 9h1m2 0h1m-9 1h1m4 0h1m3 0h1m-5 1h1m4 0h1M2 12h1m-2 2h1" /><path stroke="maroon" d="M10 2h1m-1 1h1M9 4h3M6 5h9M7 6h7M8 7h5M8 8h5M8 9h2m1 0h2M1 10h1m6 0h1m3 0h1M3 11h1" /><path stroke="gray" d="M11 2h1m-1 1h1M6 4h2m4 0h3m0 1h1m-2 1h2m-3 1h1m-1 1h1m-1 1h2m-6 1h1m3 0h2m-7 1h1m4 0h1" /><path stroke="#fff" d="M2 8h1m1 0h1M1 9h1m3 0h1m-3 1h2m-4 2h1" /></svg>;

export const fpidcwiz128Data = {
  '32x32_4': Fpidcwiz128_32x32_4,
  '16x16_4': Fpidcwiz128_16x16_4
};

export interface Fpidcwiz128Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Fpidcwiz128Component = ({
  variant = '32x32_4',
  ...rest
}: Fpidcwiz128Props) => {
  const Svg = fpidcwiz128Data[variant];

  return <Svg {...rest} />;
};

export const Fpidcwiz128 = React.memo(Fpidcwiz128Component);
Fpidcwiz128.displayName = 'Fpidcwiz128';
