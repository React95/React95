import React from 'react';
import type { SVGProps } from "react";

const Wab321020_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" {...props}><path stroke="gray" d="M10 8h10M10 9h1m9 0h1m-11 1h1m10 0h1m-12 1h1m-1 1h1m-1 1h1m4 0h1m-6 1h1m8 0h1m-10 1h1m-1 1h1m4 0h1m-6 1h1m2 0h1m-4 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="#fff" d="M11 9h3m1 0h3m-7 1h1m1 0h3m1 0h2m1 0h1m-10 1h3m1 0h3m-7 1h1m1 0h1m5 0h1m-9 1h2m7 0h1m-10 1h1m-1 1h2m1 0h1m5 0h1m-10 1h1m-1 1h2m7 0h1m-10 1h1m-1 1h3m5 0h2m-10 1h1m1 0h3m1 0h3m-9 1h3m1 0h3m1 0h2" /><path stroke="#ff0" d="M14 9h1m3 0h1m-7 1h1m3 0h1m-3 1h1m3 0h1m-7 1h1m7 0h1m-9 2h1m7 0h1m-9 2h1m7 0h1m-9 2h1m7 0h1m-9 2h1m3 0h1m3 0h1m-7 1h1m3 0h1" /><path stroke="silver" d="M19 9h1m-1 1h1m-6 2h1m3 0h1m2 0h1m-9 1h1m5 0h1m1 0h1m-8 1h1m6 0h1m-7 1h1m5 0h1m-8 1h1m6 0h1m-1 1h1m-9 1h1m5 0h1m1 0h1m-8 1h1m3 0h1m2 0h1m-1 1h1m-1 1h1m-11 1h11" /><path stroke="#000" d="M19 11h4m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-5 1h1m3 0h1m-8 1h3m4 0h1m-1 1h1m-1 1h1m-1 1h1m-13 1h13" /><path stroke="teal" d="M15 12h3m-4 1h1m1 0h1m1 0h1m-6 1h1m1 0h1m1 0h1m-5 1h1m-1 1h1m3 0h1" /><path stroke="green" d="M17 13h1m0 1h1m-3 1h1m-1 1h1m-1 1h1" /><path stroke="#00f" d="M16 14h1m1 1h1m-1 1h1m-5 1h2m1 0h1m-3 1h1" /><path stroke="navy" d="M17 15h1m1 0h1m-1 1h1m-2 1h2m-6 1h1m1 0h2" /></svg>;

export const wab321020Data = {
  '32x32_4': Wab321020_32x32_4
};

export interface Wab321020Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_4';
}

export const Wab321020: React.FC<Wab321020Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const Svg = wab321020Data[variant];

  return <Svg {...rest} />;
};
