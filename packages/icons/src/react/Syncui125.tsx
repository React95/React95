import React from 'react';
import type { SVGProps } from "react";

const Syncui125_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="gray" d="M0 0h10M0 1h1m8 0h1M0 2h1m8 0h1M0 3h1M0 4h1M0 5h1M0 6h1M0 7h1M0 8h1M0 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m18 0h10m-10 1h1m8 0h1m-10 1h1m8 0h1m-10 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M1 1h8M1 2h8m1 0h1M1 3h8M1 4h10M1 5h2m4 0h4M1 6h10M1 7h2m7 0h1M1 8h10M1 9h2m7 0h1M1 10h10M1 11h2m7 0h1M1 12h10M1 13h10M1 14h10m9 2h8m-8 1h8m1 0h1m-10 1h8m-8 1h10m-10 1h2m4 0h4m-10 1h10m-10 1h2m7 0h1m-10 1h10m-10 1h2m7 0h1m-10 1h10m-10 1h2m7 0h1m-10 1h10m-10 1h10m-10 1h10" /><path stroke="#000" d="M10 1h1m0 1h1M9 3h4m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M0 16h13m16 0h1m0 1h1m-3 1h4m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-13 1h13" /><path stroke="silver" d="M11 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M1 15h11m18 4h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-11 1h11" /><path stroke="#00f" d="M3 5h4M3 7h7m5 0h1m0 1h1M3 9h7m7 0h1m2 0h1m-3 1h1m1 0h1M3 11h7m9 0h2m-4 1h4m1 8h4m-4 2h7m-7 2h7m-7 2h7" /></svg>;

export const syncui125Data = {
  '32x32_4': Syncui125_32x32_4
};

export interface Syncui125Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Syncui125: React.FC<Syncui125Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = syncui125Data[variant];

  return <Svg {...rest} />;
};
