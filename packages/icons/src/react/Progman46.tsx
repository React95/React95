import React from 'react';
import type { SVGProps } from "react";

const Progman46_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="#000" d="M15 2h2m-3 1h4m-5 1h6m-7 1h8m-9 1h10M10 7h12M9 8h14M8 9h16M7 10h18M6 11h20M5 12h22M4 13h24M3 14h26M2 15h28M2 16h28m-20 1h13m-13 1h13m-13 1h13m-13 1h13m-13 1h13m-13 1h13m-13 1h13m-13 1h13m-13 1h13m-13 1h13m-13 1h13m-12 1h11" /></svg>;
const Progman46_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="1em" height="1em" {...props}><path stroke="#000" d="M15 2h2m-3 1h1m2 0h1m-5 1h1m4 0h1m-7 1h1m6 0h1m-9 1h1m8 0h1M10 7h1m10 0h1M9 8h1m12 0h1M8 9h1m14 0h1M7 10h1m16 0h1M6 11h1m18 0h1M5 12h1m20 0h1M4 13h1m22 0h1M3 14h1m24 0h1M2 15h1m26 0h1M2 16h9m11 0h8m-20 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-13 1h1m11 0h1m-12 1h11" /><path stroke="#fff" d="M15 3h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1M9 9h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m-2 1h1m6 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="gray" d="M16 3h1m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2M3 15h9m9 0h8m-8 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-11 1h11" /><path stroke="silver" d="M15 4h1m-2 1h3m-4 1h5m-6 1h7m-8 1h9M10 9h11M9 10h13M8 11h15M7 12h17M6 13h19M5 14h21m-14 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9m-9 1h9" /></svg>;

export const progman46Data = {
  '32x32_1': Progman46_32x32_1,
  '32x32_4': Progman46_32x32_4
};

export interface Progman46Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Progman46: React.FC<Progman46Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const Svg = progman46Data[variant];

  return <Svg {...rest} />;
};
