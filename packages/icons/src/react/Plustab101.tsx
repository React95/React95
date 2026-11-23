import React from 'react';
import type { SVGProps } from "react";

const Plustab101_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M1 2h24M1 3h1m22 0h1M1 4h1m22 0h1M1 5h1m22 0h1M1 6h1m22 0h1M1 7h1m22 0h1M1 8h1m22 0h1M1 9h1m1 0h4m5 0h11m1 0h1M1 10h1m1 0h1m20 0h1M1 11h1m1 0h1m20 0h1M1 12h1m1 0h1m20 0h1M1 13h1m1 0h1m20 0h1M1 14h1m1 0h1m20 0h1M1 15h1m1 0h1m20 0h1M1 16h1m1 0h1m20 0h1M1 17h1m1 0h1m20 0h1M1 18h1m1 0h1m20 0h1M1 19h1m1 0h1m20 0h1M1 20h1m22 0h1M1 21h24" /><path stroke="#000" d="M25 2h1m-1 1h1m-1 1h1M7 5h1m9 0h1m2 0h1m2 0h1m1 0h1m1 0h1M7 6h2m8 0h1m2 0h1m2 0h1m1 0h1M7 7h1m1 0h1m5 0h9m1 0h1m1 0h1m1 0h1M7 8h1m2 0h1m14 0h1M7 9h1m3 0h1m13 0h1m1 0h1m1 0h1m1 0h1M7 10h1m4 0h1m12 0h1M7 11h1m5 0h1m11 0h1m1 0h1m1 0h1m1 0h1M7 12h1m6 0h1m10 0h1M7 13h1m4 0h4m9 0h1m1 0h1m1 0h1m1 0h1M7 14h1m1 0h1m2 0h1m12 0h1M7 15h2m1 0h1m2 0h1m11 0h1m1 0h1m1 0h1m1 0h1M7 16h1m2 0h1m2 0h1m11 0h1m-15 1h1m2 0h1m10 0h1m1 0h1m1 0h1m1 0h1m-21 1h1m2 0h1m10 0h1m-14 1h2m11 0h1m1 0h1m1 0h1m1 0h1m-7 1h1m-1 1h1m1 0h1m1 0h1m1 0h1M1 22h25m1 1h1m1 0h1m1 0h1M4 24h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 1h1m1 0h1M6 26h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 1h1M8 28h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="silver" d="M2 3h22M2 4h1M2 5h1m12 0h2m1 0h2m1 0h2M2 6h1m12 0h2m1 0h2m1 0h2M2 7h1M2 8h5m4 0h13M2 9h1m20 0h1M2 10h1m20 0h1M2 11h1m20 0h1M2 12h1m20 0h1M2 13h1m20 0h1M2 14h1m20 0h1M2 15h1m20 0h1M2 16h1m20 0h1M2 17h1m20 0h1M2 18h1m20 0h1M2 19h1m20 0h1M2 20h22" /><path stroke="navy" d="M3 4h21M3 5h4m1 0h7M3 6h4m2 0h6M3 7h4m3 0h5" /><path stroke="#fff" d="M8 7h1M8 8h2M8 9h3m-7 1h3m1 0h4m1 0h10M4 11h3m1 0h5m1 0h9M4 12h3m1 0h6m1 0h8M4 13h3m1 0h4m4 0h7M4 14h3m1 0h1m1 0h2m1 0h10M4 15h3m2 0h1m1 0h2m1 0h9M4 16h3m1 0h2m1 0h2m1 0h9M4 17h7m1 0h2m1 0h8M4 18h7m1 0h2m1 0h8M4 19h8m2 0h9" /></svg>;

export const plustab101Data = {
  '32x32_4': Plustab101_32x32_4
};

export interface Plustab101Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Plustab101Component = ({
  variant = '32x32_4',
  ...rest
}: Plustab101Props) => {
  const Svg = plustab101Data[variant];

  return <Svg {...rest} />;
};

export const Plustab101 = React.memo(Plustab101Component);
Plustab101.displayName = 'Plustab101';
