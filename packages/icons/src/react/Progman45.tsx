import React from 'react';
import type { SVGProps } from "react";

const Progman45_32x32_1 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M15 1h2m-2 1h3m-3 1h4m-4 1h5m-5 1h6m-6 1h7m-7 1h8m-8 1h9M4 9h21M3 10h23M3 11h24M3 12h25M3 13h26M3 14h27M3 15h27M3 16h26M3 17h25M3 18h24M3 19h23M3 20h22M4 21h20m-9 1h8m-8 1h7m-7 1h6m-6 1h5m-5 1h4m-4 1h3m-3 1h2" /></svg>;
const Progman45_32x32_4 = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges" viewBox="0 -0.5 32 32" width="32" height="32" {...props}><path stroke="#000" d="M15 1h2m-2 1h1m1 0h1m-3 1h1m2 0h1m-4 1h1m3 0h1m-5 1h1m4 0h1m-6 1h1m5 0h1m-7 1h1m6 0h1m-8 1h1m7 0h1M4 9h12m8 0h1M3 10h1m21 0h1M3 11h1m22 0h1M3 12h1m23 0h1M3 13h1m24 0h1M3 14h1m25 0h1M3 15h1m25 0h1M3 16h1m24 0h1M3 17h1m23 0h1M3 18h1m22 0h1M3 19h1m21 0h1M3 20h1m20 0h1M4 21h12m7 0h1m-9 1h1m6 0h1m-8 1h1m5 0h1m-7 1h1m4 0h1m-6 1h1m3 0h1m-5 1h1m2 0h1m-4 1h1m1 0h1m-3 1h2" /><path stroke="gray" d="M16 2h1m0 1h1m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-1 1h2m-2 1h2m-3 1h2m-3 1h2m-3 1h2m-3 1h2M4 20h13m5 0h2m-3 1h2m-3 1h2m-3 1h2m-3 1h2m-3 1h2m-2 1h1m-2 1h1" /><path stroke="#fff" d="M16 3h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1M4 10h13M4 11h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m11 2h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1m-1 1h1" /><path stroke="silver" d="M17 5h1m-1 1h2m-2 1h3m-3 1h4m-4 1h5m-5 1h6M5 11h19M5 12h20M5 13h21M5 14h22M5 15h22M5 16h21M5 17h20M5 18h19M5 19h18m-6 1h5m-5 1h4m-4 1h3m-3 1h2m-2 1h1" /></svg>;

export const progman45Data = {
  '32x32_1': Progman45_32x32_1,
  '32x32_4': Progman45_32x32_4
};

export interface Progman45Props extends SVGProps<SVGSVGElement> {
  /**
   * Icon variant to use.
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Progman45: React.FC<Progman45Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const Svg = progman45Data[variant];

  return <Svg {...rest} />;
};
