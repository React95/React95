import React from 'react';
import type { SVGProps } from "react";

const Mnmshco1202_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M8 4h23M8 5h1M8 6h1M8 7h1M8 8h1M8 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m0 2h9m0 1h2m0 1h2m-4 3h3m4 1h1m-12 1h10" /><path stroke="#000" d="M31 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M8 19h1m22 0h1M8 20h1m22 0h1M8 21h1m22 0h1M8 22h1m22 0h1M8 23h1m7 0h1m5 0h1m8 0h1M8 24h1m8 0h6m8 0h1M8 25h3m10 0h11M8 26h1m2 0h1m14 0h1M0 27h8m4 0h2m10 0h2m-12 1h10" /><path stroke="silver" d="M9 5h22M9 6h1m20 0h1M9 7h1m20 0h1M9 8h1m20 0h1M9 9h22M9 10h1m20 0h1M9 11h1m20 0h1M9 12h1m20 0h1M9 13h1m20 0h1M9 14h1m20 0h1M9 15h1m20 0h1M9 16h1m20 0h1M9 17h1m20 0h1M9 18h1m20 0h1M9 19h1m20 0h1m-1 1h1M9 21h1m20 0h1M9 22h1m20 0h1M9 23h1m20 0h1M9 24h3m11 0h8m-20 1h3m-2 1h4m8 0h1" /><path stroke="navy" d="M10 6h20M10 7h20M10 8h20M0 18h8m-8 3h8m-8 1h8m-8 1h8m-8 1h8m-8 1h8m-8 1h8" /><path stroke="#fff" d="M10 10h20m-20 1h20m-20 1h20m-20 1h20m-20 1h20m-20 1h20m-20 1h20m-20 1h20m-20 1h20m-20 1h20m-12 1h12m-20 1h8m2 0h10m-20 1h10m2 0h8m-20 1h6m1 0h5m1 0h7m-18 1h5m-3 1h4m-2 1h8" /><path stroke="#00f" d="M0 19h8m-8 1h8" /></svg>;
const Mnmshco1202_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" {...props}><path stroke="gray" d="M4 2h11M4 3h1M4 4h1M4 5h1M4 6h1M4 7h1M4 8h1M3 9h5m0 1h1m0 1h1" /><path stroke="#000" d="M15 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M2 9h1m12 0h1M2 10h1m12 0h1M2 11h1m4 0h1m7 0h1M2 12h3m3 0h8M0 13h2m3 0h1m5 0h1m-6 1h5" /><path stroke="navy" d="M5 3h10M5 4h10M0 8h2m-2 2h2m-2 1h2m-2 1h2" /><path stroke="#fff" d="M5 5h9M5 6h9M5 7h9M5 8h9M8 9h6M3 10h5m1 0h5m-9 1h2m1 0h1m-3 1h2" /><path stroke="silver" d="M14 5h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M3 11h2m5 0h5M5 12h1m0 1h5" /><path stroke="#00f" d="M0 9h2" /></svg>;

export const mnmshco1202Data = {
  '32x32_4': Mnmshco1202_32x32_4,
  '16x16_4': Mnmshco1202_16x16_4
};

export interface Mnmshco1202Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

const Mnmshco1202Component = ({
  variant = '32x32_4',
  ...rest
}: Mnmshco1202Props) => {
  const Svg = mnmshco1202Data[variant];

  return <Svg {...rest} />;
};

export const Mnmshco1202 = React.memo(Mnmshco1202Component);
Mnmshco1202.displayName = 'Mnmshco1202';
