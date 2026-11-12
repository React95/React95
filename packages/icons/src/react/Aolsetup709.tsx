import React from 'react';
import type { SVGProps } from "react";

const Aolsetup709_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M14 5h5m-9 2h1m4 0h1m2 0h1m2 0h1M10 8h1m3 0h1m1 0h4M10 9h1m7 0h1m-9 1h1m3 0h1m2 0h1m1 0h1m4 0h1m-13 1h1m4 0h2m-3 1h3m6 0h1m-16 1h1m4 0h3m1 0h1m5 0h1M5 14h1m4 0h1m2 0h3m2 0h2m5 0h1M5 15h1m7 0h1m4 0h1m1 0h1m-8 1h2m3 0h1m6 0h1M5 17h1m6 0h1m1 0h1m3 0h1m1 0h1M5 18h1m7 0h2m2 0h4m4 0h1m-11 1h5m-5 1h1m2 0h1m1 0h3m-9 1h2m-1 1h2m-2 1h2m-3 1h3m3 0h2m-9 1h4m2 0h1" /><path stroke="olive" d="M12 6h7m-8 1h4m1 0h2m-7 1h3m1 0h1m7 0h1M11 9h7m6 0h1m-14 1h3m1 0h2m-7 1h2m1 0h4m8 0h1m-16 1h6m-5 1h4m-4 1h2m13 0h1m-16 1h2m13 0h1m-16 1h2m13 0h1m-14 1h1m12 0h1m-1 1h1m-2 1h1m-10 1h2m1 0h1m-4 1h7m1 0h1m-8 1h5m-5 1h4m-4 1h3m-3 1h2" /><path stroke="#000" d="M19 6h3m0 1h2m0 1h1m0 1h1m-1 1h1m0 1h1m-1 1h1m-1 1h2m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-2 1h2m-2 1h2M6 21h1m18 0h2M7 22h1m16 0h3M7 23h2m14 0h3M8 24h2m12 0h3M9 25h3m8 0h4m-13 1h4m1 0h7m-10 1h7" /><path stroke="silver" d="M19 7h2m-1 1h3m-4 1h5m-6 1h1m1 0h4m-5 1h6m-6 1h4m-5 1h1m1 0h3m-3 1h2m2 0h1m-6 1h1m1 0h1m3 0h1m-7 1h3m-3 1h1m1 0h2m2 0h1m-5 1h2m-3 1h4m-1 1h2m-2 1h1m-2 1h2m-3 1h2" /><path stroke="navy" d="M9 8h1M8 9h2m-2 1h2m-3 1h2m-3 1h3m-3 1h3m-3 1h4m6 0h1M6 15h4m5 0h3M6 16h4m5 0h3M6 17h5m4 0h2M6 18h7m2 0h1M6 19h8m-8 1h8m-7 1h7m-6 1h7m-6 1h5m-4 1h4m-2 1h1m2 1h1" /><path stroke="teal" d="M7 10h1m9 4h1M5 16h1m11 1h1m-4 6h1" /><path stroke="purple" d="M9 11h1m-1 1h1m-1 1h1m0 2h1m3 0h1m-5 1h1m0 1h1m4 1h1m-3 1h1m-1 1h1" /><path stroke="maroon" d="M25 20h1" /></svg>;

export const aolsetup709Data = {
  '32x32_4': Aolsetup709_32x32_4
};

export interface Aolsetup709Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Aolsetup709Component = ({
  variant = '32x32_4',
  ...rest
}: Aolsetup709Props) => {
  const Svg = aolsetup709Data[variant];

  return <Svg {...rest} />;
};

export const Aolsetup709 = React.memo(Aolsetup709Component);
Aolsetup709.displayName = 'Aolsetup709';
