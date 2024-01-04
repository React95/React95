import React from 'react';
import type { SVGProps } from "react";

const Inetcpl1310_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="silver" d="M2 5h27M2 6h1M2 7h1M2 8h1M2 9h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#000" d="M29 5h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M2 23h18m1 0h3m2 0h4" /><path stroke="green" d="M3 6h26M3 7h2m22 0h2M3 8h1m24 0h1M3 9h1m24 0h1M3 10h1m24 0h1M3 11h1m3 0h18m3 0h1M3 12h1m24 0h1M3 13h1m3 0h18m3 0h1M3 14h1m24 0h1M3 15h1m3 0h14m7 0h1M3 16h1m24 0h1M3 17h1m3 0h13m8 0h1M3 18h1m24 0h1M3 19h1m24 0h1M3 20h1m24 0h1M3 21h2m22 0h2M3 22h17m2 0h2m2 0h3" /><path stroke="#fff" d="M5 7h22M4 8h24M4 9h24M4 10h24M4 11h3m18 0h3M4 12h24M4 13h3m18 0h3M4 14h18m2 0h4M4 15h3m18 0h3M4 16h16m2 0h2m2 0h2M4 17h3m14 0h4m1 0h2M4 18h16m2 0h2m2 0h2M4 19h17m4 0h3M4 20h18m2 0h4M5 21h16m4 0h2" /><path stroke="red" d="M22 14h2m-3 1h4m-5 1h2m2 0h2m-6 1h1m4 0h1m-6 1h2m2 0h2m-5 1h4m-3 1h2m-3 1h4m-5 1h2m2 0h2m-6 1h1m3 0h2m-7 1h2m3 0h2m-8 1h2m3 0h2m-7 1h2m3 0h2" /></svg>;

export const inetcpl1310Data = {
  '32x32_4': Inetcpl1310_32x32_4
};

export interface Inetcpl1310Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Inetcpl1310: React.FC<Inetcpl1310Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = inetcpl1310Data[variant];

  return <Svg {...rest} />;
};
