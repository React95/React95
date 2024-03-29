import React from 'react';
import type { SVGProps } from "react";

const Syncui122_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M0 0h10M0 1h1m8 0h1M0 2h1m8 0h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m18 0h2m2 0h6m-10 1h1m8 0h1m-10 1h1m8 0h1m-10 5h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M1 1h8M1 2h8m1 0h1M1 3h8M1 4h10M1 5h2m4 0h4M1 6h10M1 7h2m7 0h1M1 8h10M1 9h2m7 0h1M1 10h10M1 11h2m7 0h1M1 12h9m-9 1h9m-9 1h8m11 2h1m2 0h5m-8 1h1m2 0h5m1 0h1m-8 1h6m-6 1h8m-9 1h1m4 0h4m-10 1h10m-10 1h2m7 0h1m-10 1h10m-10 1h2m7 0h1m-10 1h10m-10 1h2m7 0h1m-10 1h10m-10 1h10m-10 1h10" /><path stroke="#000" d="M10 1h1m0 1h1M9 3h4m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 5h1m-1 1h1M0 16h9m2 0h2m16 0h1m0 1h1m-3 1h4m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-13 1h13" /><path stroke="silver" d="M11 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 4h1M1 15h8m2 0h1m18 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-11 1h11" /><path stroke="#00f" d="M3 5h4M3 7h7M3 9h7m-7 2h7m12 9h4m-4 2h7m-7 2h7m-7 2h7" /><path stroke="red" d="M14 9h4m-6 1h8m-9 1h3m4 0h3m-11 1h4m5 0h3m-12 1h5m5 0h2M9 14h2m2 0h3m5 0h2M9 15h2m3 0h3m4 0h2M9 16h2m4 0h3m3 0h2M9 17h2m5 0h3m2 0h2m-13 1h2m5 0h5m-12 1h3m5 0h4m-11 1h3m4 0h3m-9 1h8m-6 1h4" /></svg>;

export const syncui122Data = {
  '32x32_4': Syncui122_32x32_4
};

export interface Syncui122Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Syncui122: React.FC<Syncui122Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = syncui122Data[variant];

  return <Svg {...rest} />;
};
