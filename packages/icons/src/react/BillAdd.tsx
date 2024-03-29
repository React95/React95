import React from 'react';
import type { SVGProps } from "react";

const BillAdd_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M0 4h31M0 5h1m29 0h1M0 6h1M0 7h2m28 0h1M0 8h1m1 0h1m27 0h1M0 9h1m2 0h1m3 0h4m1 0h1m1 0h10m6 0h1M0 10h1m3 0h1m25 0h1M0 11h1m4 0h1m4 0h3m1 0h7m9 0h1M0 12h1m5 0h1m23 0h1M0 13h1m6 0h1m3 0h3m1 0h1m1 0h3m10 0h1M0 14h1m7 0h1m21 0h1M0 15h1m8 0h1m20 0h1M0 16h1m9 0h1m19 0h1M0 17h1m10 0h1m18 0h1M0 18h1m11 0h1m17 0h1M0 19h1m12 0h1m16 0h1M0 20h1m29 0h1M0 21h1m29 0h1M0 22h1m29 0h1M0 23h1m29 0h1M0 24h1m29 0h1M0 25h1m29 0h1M0 26h31" /><path stroke="#000" d="M31 4h1m-1 1h1m-2 1h2m-3 1h1m1 0h1m-4 1h1m2 0h1m-5 1h1m3 0h1m-6 1h1m4 0h1m-7 1h1m5 0h1m-8 1h1m6 0h1m-9 1h1m7 0h1m-10 1h1m8 0h1m-11 1h1m9 0h1m-12 1h1m10 0h1m-13 1h1m11 0h1m-14 1h1m12 0h1m-18 1h4m13 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M0 27h32" /><path stroke="#fff" d="M1 5h29M1 6h29M2 7h27M1 8h1m1 0h25m1 0h1M1 9h2m1 0h3m4 0h1m1 0h1m10 0h3m1 0h2M1 10h3m1 0h21m1 0h3M1 11h4m1 0h4m3 0h1m7 0h4m1 0h4M1 12h5m1 0h17m1 0h5M1 13h6m1 0h3m3 0h1m1 0h1m3 0h3m1 0h6M1 14h7m1 0h13m1 0h7M1 15h8m1 0h11m1 0h8M1 16h9m1 0h9m1 0h9M1 17h10m1 0h7m1 0h10M1 18h11m1 0h5m1 0h11M1 19h12m5 0h12M1 20h29M1 21h29M1 22h29M1 23h29M1 24h29M1 25h29" /></svg>;

export const billAddData = {
  '32x32_4': BillAdd_32x32_4
};

export interface BillAddProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const BillAdd: React.FC<BillAddProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = billAddData[variant];

  return <Svg {...rest} />;
};
