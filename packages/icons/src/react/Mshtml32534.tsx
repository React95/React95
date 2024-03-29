import React from 'react';
import type { SVGProps } from "react";

const Mshtml32534_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="#000" d="M4 4h18M4 5h1m16 0h1M4 6h1m16 0h1M4 7h18M4 8h1m16 0h1M4 9h1m16 0h1M4 10h1m16 0h1M4 11h1m2 0h1m1 0h1m1 0h18M4 12h1m6 0h1m16 0h1M4 13h1m2 0h1m1 0h1m1 0h1m16 0h1M4 14h1m6 0h18M4 15h1m2 0h1m1 0h1m1 0h1m16 0h1M4 16h1m6 0h1m16 0h1M4 17h1m6 0h1m16 0h1M4 18h1m6 0h1m2 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h2m2 0h1M4 19h1m6 0h1m16 0h1M4 20h1m6 0h1m2 0h1m1 0h2m1 0h1m1 0h1m1 0h2m3 0h1M4 21h8m16 0h1m-18 1h1m2 0h1m1 0h1m1 0h1m1 0h2m1 0h1m1 0h1m2 0h1m-18 1h1m16 0h1m-18 1h1m16 0h1m-18 1h1m16 0h1m-18 1h1m2 0h1m1 0h1m1 0h1m9 0h1m-18 1h1m16 0h1m-18 1h18" /><path stroke="#00f" d="M5 5h16M5 6h16m-9 6h16m-16 1h16" /><path stroke="gray" d="M22 6h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m6 3h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M6 22h5m18 0h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-17 1h17" /><path stroke="#fff" d="M5 8h16M5 9h16M5 10h16M5 11h2m1 0h1m1 0h1m-6 1h6m-6 1h2m1 0h1m1 0h1m-6 1h6m-6 1h2m1 0h1m1 0h1m-6 1h6m-6 1h6m-6 1h6m-6 1h6m-6 1h6" /><path stroke="silver" d="M12 15h16m-16 1h16m-16 1h16m-16 1h2m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m2 0h2m-16 1h16m-16 1h2m1 0h1m2 0h1m1 0h1m1 0h1m2 0h3m-16 1h16m-16 1h2m1 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h2m-16 1h16m-16 1h16m-16 1h16m-16 1h2m1 0h1m1 0h1m1 0h9m-16 1h16" /></svg>;

export const mshtml32534Data = {
  '32x32_4': Mshtml32534_32x32_4
};

export interface Mshtml32534Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Mshtml32534: React.FC<Mshtml32534Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = mshtml32534Data[variant];

  return <Svg {...rest} />;
};
