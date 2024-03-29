import React from 'react';
import type { SVGProps } from "react";

const Qfecheck111_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M5 3h1m20 0h1M6 4h1m6 0h6m6 0h1M7 5h1m3 0h10m3 0h1M11 6h2m6 0h2M9 7h2m10 0h2M9 8h2m10 0h2M8 9h2m12 0h2M8 10h2m12 0h2M8 11h2m12 0h2M8 12h2m12 0h2M3 13h3m2 0h2m12 0h2m2 0h3M8 14h2m12 0h2M9 15h2m10 0h2M9 16h2m10 0h2m-13 1h2m8 0h2m-12 1h2m8 0h2m-11 1h2m6 0h2m-10 1h2m6 0h2m-10 1h2m6 0h2m3 0h1M8 22h1m3 0h1m6 0h1m5 0h1M7 23h1m4 0h2m4 0h2m6 0h1M6 24h1m5 0h2m4 0h2m7 0h1M5 25h1m6 0h2m4 0h2m-8 1h2m4 0h2m-7 1h2m2 0h2m-6 1h6m-4 1h2" /><path stroke="#fff" d="M13 6h2m-4 1h4m-4 1h3m-4 1h3m-3 1h3m-3 1h2m-2 1h2m-2 1h3m-3 1h3m-2 1h3m-3 1h3m-2 1h3m-3 1h3m-2 1h2m-2 1h2m-2 1h2m-2 1h2m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#ff0" d="M15 6h4m-4 1h6m-7 1h7m-8 1h9m-9 1h9m-10 1h10m-10 1h10m-8 1h4m1 0h3m-8 1h4m1 0h3m-7 1h2m1 0h3m-6 1h2m1 0h3m-4 1h3m-4 1h4m-4 1h3m-3 1h3m-3 1h3m-3 1h3" /><path stroke="gray" d="M13 13h1m4 0h1m-6 1h1m4 0h1m-5 1h1m2 0h1m-4 1h1m2 0h1m-3 1h2m-2 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M15 23h2m-2 1h2m-2 1h2m-2 1h2m-2 1h2" /></svg>;

export const qfecheck111Data = {
  '32x32_4': Qfecheck111_32x32_4
};

export interface Qfecheck111Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Qfecheck111: React.FC<Qfecheck111Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = qfecheck111Data[variant];

  return <Svg {...rest} />;
};
