import React from 'react';
import type { SVGProps } from "react";

const Msacm12_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M24 1h1m-1 1h1m-1 1h1m-1 1h1m-6 1h2m2 0h1m1 0h1m-7 1h2m2 0h1m1 0h1m-8 1h3m2 0h1m1 0h1m-9 1h1m1 0h2m2 0h1m1 0h1m4 0h1M16 9h1m2 0h2m2 0h1m1 0h1m4 0h1m-16 1h1m3 0h2m2 0h1m1 0h1m4 0h1m-17 1h1m4 0h2m2 0h1m1 0h1m4 0h1m-18 1h1m5 0h2m1 0h1m3 0h1m3 0h1m-20 1h2m6 0h2m1 0h1m3 0h1m3 0h1M9 14h2m8 0h2m1 0h1m3 0h1m2 0h1M9 15h1m9 0h2m1 0h1m3 0h1m2 0h1M9 16h1m9 0h2m1 0h1m3 0h1m2 0h1M9 17h1m1 0h1m7 0h2m5 0h1m2 0h1M9 18h3m7 0h2m5 0h1m2 0h1m-19 1h2m6 0h2m6 0h1m1 0h1m-17 1h1m5 0h2m6 0h1m1 0h1m-16 1h1m4 0h2m6 0h1m1 0h1m-15 1h1m3 0h2m6 0h1m1 0h1m-14 1h1m2 0h2m6 0h1m1 0h1m-13 1h1m1 0h2m6 0h1m1 0h1m-12 1h3m6 0h2m-10 1h2m7 0h1m-10 1h2m7 0h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="gray" d="M18 8h1m-2 1h1m-2 1h1m-2 1h1m2 0h1m-5 1h1m2 0h1m-5 1h1m2 0h1m1 0h1m-8 1h2m2 0h1m1 0h2m-8 1h1m2 0h1m1 0h3m-8 1h1m1 0h1m1 0h4m-9 1h1m1 0h7m-7 1h7m-6 1h6m-5 1h5m-4 1h4m-3 1h3m-2 1h2m-1 1h1" /><path stroke="#fff" d="M18 9h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-4 1h1m1 0h1" /><path stroke="silver" d="M18 10h1m-2 1h1m-2 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-4 1h1m1 0h1m-6 1h1m1 0h1m1 0h1" /></svg>;

export const msacm12Data = {
  '32x32_4': Msacm12_32x32_4
};

export interface Msacm12Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

const Msacm12Component = ({
  variant = '32x32_4',
  ...rest
}: Msacm12Props) => {
  const Svg = msacm12Data[variant];

  return <Svg {...rest} />;
};

export const Msacm12 = React.memo(Msacm12Component);
Msacm12.displayName = 'Msacm12';
