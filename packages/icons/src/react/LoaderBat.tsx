import React from 'react';
import type { SVGProps } from "react";

const LoaderBat_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="gray" d="M9 5h18M9 6h1M9 7h1M9 8h1M9 9h1m-1 1h1m-5 4h1m5 0h1m-7 1h1m5 0h1m-7 1h1m1 0h1m3 0h1m-6 1h1m3 0h1m5 0h3m2 0h3M7 18h1m1 0h1m-3 1h1m1 0h1m-4 1h1m1 0h1m1 0h1m-6 1h1m5 0h1m-7 1h1m5 0h1m-7 1h1m5 0h1" /><path stroke="#000" d="M27 5h1m-1 1h1m-7 1h1m1 0h1m1 0h1m1 0h1m-8 1h6m1 0h1m-1 1h1m-1 1h1m-15 1h1m13 0h1m-15 1h1m13 0h1M5 13h8m14 0h1m-16 1h1m14 0h1m-16 1h1m14 0h1M9 16h1m2 0h1m14 0h1M8 17h1m2 0h1m15 0h1m-18 1h1m16 0h1m-18 1h1m16 0h1m-17 1h1m15 0h1m-16 1h16M8 22h1m3 0h1m-6 1h1m1 0h1m2 0h1m-8 1h8m0 1h1M4 26h10" /><path stroke="silver" d="M10 6h17M10 7h1m15 0h1M10 8h1m15 0h1M10 9h17m-17 1h1m15 0h1m-1 1h1M6 12h2m18 0h1m-1 1h1M8 14h3m7 0h1m7 0h1M8 15h3m5 0h1m9 0h1M6 16h1m1 0h1m1 0h1m15 0h1M7 17h1m1 0h1m16 0h1m-1 1h1m-1 1h1M7 20h1m1 0h1m2 0h15M6 21h1m1 0h3m-2 1h2m-3 1h1m1 0h1m-5 2h2" /><path stroke="navy" d="M11 7h9m-9 1h9" /><path stroke="#fff" d="M20 7h1m1 0h1m1 0h1m-14 3h15m-12 1h12m-12 1h2m1 0h5m1 0h3m-13 1h3m3 0h3m2 0h2M6 14h2m5 0h3m3 0h2m3 0h2M6 15h2m5 0h2m4 0h2m3 0h2m-13 1h13m-14 1h4m3 0h2m3 0h2M8 18h1m2 0h15M8 19h1m2 0h15M7 21h1m-2 1h2m-2 1h1" /><path stroke="maroon" d="M4 11h9m-9 1h1M4 25h1" /><path stroke="red" d="M5 12h1m2 0h5M5 25h1m2 0h5" /><path stroke="#00f" d="M16 12h1m0 1h2m-3 1h2m5 0h1" /><path stroke="green" d="M22 12h1m-1 1h2m-3 1h1m-1 1h3" /><path stroke="#0ff" d="M16 13h1" /><path stroke="#0f0" d="M22 14h1" /><path stroke="purple" d="M15 15h1m1 0h2" /></svg>;
const LoaderBat_16x16_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 16 16" width="16" height="16" {...props}><path stroke="gray" d="M2 0h14M2 1h1M2 2h1M2 3h13M2 4h1m11 0h1m-1 1h1m-1 1h1M0 7h1m13 0h1M0 8h1m1 0h1m1 0h1m9 0h1M1 9h1m1 0h1m10 0h1M2 10h1m11 0h1M1 11h1m1 0h1m1 0h10M0 12h1m2 0h1m-4 1h1m1 0h1m1 0h1" /><path stroke="navy" d="M3 1h1m2 0h9M3 2h1m2 0h5" /><path stroke="red" d="M4 1h1M1 5h4m-4 9h4" /><path stroke="#ff0" d="M5 1h1" /><path stroke="#000" d="M15 1h1m-4 1h1m1 0h2m-1 1h1m-1 1h1m-1 1h1M0 6h6m9 0h1M5 7h1m9 0h1M3 8h1m1 0h1m9 0h1M4 9h1m10 0h1M3 10h1m11 0h1M4 11h1m10 0h1M5 12h11M3 13h1m1 0h1m-6 2h6" /><path stroke="#0ff" d="M4 2h1" /><path stroke="#0f0" d="M5 2h1" /><path stroke="silver" d="M11 2h1m1 0h1M3 4h1M3 7h2M2 9h1m-2 3h1m2 0h1" /><path stroke="#fff" d="M4 4h10M6 5h8M6 6h8M1 7h2m3 0h8M1 8h1m4 0h8M5 9h9M4 10h10M2 11h1m-1 1h1m-2 1h1" /><path stroke="maroon" d="M0 5h1m4 0h1m-6 9h1m4 0h1" /></svg>;

export const loaderBatData = {
  '32x32_4': LoaderBat_32x32_4,
  '16x16_4': LoaderBat_16x16_4
};

export interface LoaderBatProps extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const LoaderBat: React.FC<LoaderBatProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = loaderBatData[variant];

  return <Svg {...rest} />;
};
