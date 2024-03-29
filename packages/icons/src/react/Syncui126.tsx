import React from 'react';
import type { SVGProps } from "react";

const Syncui126_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M2 0h5M1 1h1m5 0h1M0 2h1m7 0h7M0 3h1m13 0h1M0 4h1m13 0h1M0 5h1m13 0h1M0 6h1m13 0h1M0 7h1m13 0h1M0 8h1m13 0h1M0 9h1m13 0h1M0 10h1m13 0h1M0 11h15m3 8h5m-6 1h1m5 0h1m-8 1h1m7 0h7m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h1m13 0h1m-15 1h15" /><path stroke="#ff0" d="M2 1h1m1 0h1m1 0h1M1 2h1m1 0h1m1 0h1m1 0h1M2 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m5 10h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m1 0h1m-6 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="silver" d="M3 1h1m1 0h1M2 2h1m1 0h1m1 0h1M3 4h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 5h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 6h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 7h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 8h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M2 9h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1M3 10h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m5 10h1m1 0h1m-4 1h1m1 0h1m1 0h1m-4 2h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-12 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m-10 1h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1" /><path stroke="#fff" d="M1 3h13M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1m-1 1h1m15 12h13m-13 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M15 3h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 12h15m15 10h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-15 1h15" /><path stroke="#00f" d="M18 11h1m0 1h1m0 1h1m2 0h1m-3 1h1m1 0h1m-2 1h2m-4 1h4" /></svg>;

export const syncui126Data = {
  '32x32_4': Syncui126_32x32_4
};

export interface Syncui126Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Syncui126: React.FC<Syncui126Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = syncui126Data[variant];

  return <Svg {...rest} />;
};
